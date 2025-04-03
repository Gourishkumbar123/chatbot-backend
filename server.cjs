import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import dialogflow from 'dialogflow';


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const dialogflow = require("dialogflow");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const projectId = "paymentbot-lpeu";  // Replace with your Dialogflow project ID
const sessionClient = new dialogflow.SessionsClient();

// Connect to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydatabase"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

// API to check user KYC status
app.post("/check-kyc", (req, res) => {
    console.log("Received request:", req.body); // Debugging log

    const { user_id } = req.body;

    if (!user_id) {
        console.log("User ID missing"); // Log if missing
        return res.status(400).json({ error: "User ID is required" });
    }

    const query = "SELECT kyc_status FROM users WHERE user_id = ?";
    db.query(query, [user_id], (err, result) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: err.message });
        }

        if (result.length === 0) {
            console.log("User not found for ID:", user_id);
            return res.status(404).json({ message: "User not found" });
        }

        console.log("KYC Status found:", result[0].kyc_status);
        res.json({ kyc_status: result[0].kyc_status });
    });
});


// API to check card balance
app.post("/check-balance", (req, res) => {
    const {card_id} = req.body;
    const query = "SELECT balance FROM cards WHERE card_id = ?";
    db.query(query, [card_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: "Card not found" });
        res.json({ balance: result[0].balance });
    });
});

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        // Add your chatbot logic here
        const reply = `Echo: ${message}`;
        res.json({ reply });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint for the chatbot
app.post("/chat", async (req, res) => {
    const { message } = req.body;  // User's message sent from the frontend
    const sessionId = "12345";  // Replace with a unique session ID, can be user-specific
    
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: "en",
            },
        },
    };

    try {
        // Call the Dialogflow API to detect the user's intent
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;  // Get the response from Dialogflow
        res.json({ reply: result.fulfillmentText });  // Send back the response to the frontend
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
