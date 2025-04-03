import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MinusCircle } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm VA Tech's assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('card') || input.includes('cms')) {
      return "Our Card Management System (CMS) offers end-to-end solutions including HSM Cryptography, Authorization, and Multi-wallet support. Would you like to know more specific details?";
    }
    if (input.includes('banking') || input.includes('fintech')) {
      return "We provide comprehensive Banking & Fintech solutions including Limit Management Stack, Wallet Stack, and we're registered partners with NPCI for Rupay, UPI, and BBPS.";
    }
    if (input.includes('corporate')) {
      return "Our Corporate Solutions handle ₹700 Cr+ Monthly Volume with admin-controlled flows and white-labeled dashboards. Would you like to learn more about specific features?";
    }
    if (input.includes('b2b') || input.includes('business')) {
      return "Our B2B Pay solution offers Platform as a Service (PaaS) with API Integration and white-labeled solutions. We recently launched at GFF 2024!";
    }
    if (input.includes('contact') || input.includes('support')) {
      return "You can reach our support team at support@vatechventures.com or visit our contact page to fill out an inquiry form.";
    }
    
    return "I can help you learn more about our Card Management System, Banking Solutions, Corporate Solutions, or B2B Pay. What would you like to know about?";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && !isMinimized && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isMinimized && (
        <button
          onClick={() => {
            setIsMinimized(false);
            setIsOpen(true);
          }}
          className="bg-sky-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-sky-700 transition-colors flex items-center space-x-2"
        >
          <MessageCircle size={20} />
          <span>Chat with us</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-full border border-gray-200">
          <div className="bg-sky-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">VA Tech Assistant</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setIsMinimized(true);
                  setIsOpen(false);
                }}
                className="hover:text-gray-200 transition-colors"
              >
                <MinusCircle size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="h-96 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-sky-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-sky-500"
              />
              <button
                onClick={handleSend}
                className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;