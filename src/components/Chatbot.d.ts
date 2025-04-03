import React from 'react';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

declare const Chatbot: React.FC;

export default Chatbot; 