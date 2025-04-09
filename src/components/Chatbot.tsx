import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MinusCircle } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [awaitingUserId, setAwaitingUserId] = useState(false);
  const [awaitingCardId, setAwaitingCardId] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm VA Tech's assistant. How can I help you today?", isBot: true }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (input: string) => {
    return "I can help you learn more about our Card Management System, Banking Solutions, Corporate Solutions, or B2B Pay. What would you like to know about?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    const trimmedInput = input.trim();
    setInput('');

    if (awaitingUserId) {
      try {
        const res = await fetch('http://localhost:5050/check-kyc', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: trimmedInput })
        });
        const data = await res.json();
        const kycStatus = data.kyc_status || data.message || 'Unable to fetch KYC status.';
        setMessages(prev => [...prev, { text: `Your KYC status is: ${kycStatus}`, isBot: true }]);
      } catch (error) {
        setMessages(prev => [...prev, { text: "Something went wrong while checking your KYC. Please try again", isBot: true }]);
      }
      setAwaitingUserId(false);

    } else if (awaitingCardId) {
      try {
        const res = await fetch('http://localhost:5050/check-balance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ card_id: trimmedInput })
        });
        const data = await res.json();
        const balance = data.balance || data.message || 'Unable to fetch balance.';
        setMessages(prev => [...prev, { text: `Your card balance is: ₹${balance}`, isBot: true }]);
      } catch (error) {
        setMessages(prev => [...prev, { text: "Something went wrong while checking your balance.", isBot: true }]);
      }
      setAwaitingCardId(false);

    } else {
      const lower = trimmedInput.toLowerCase();
      if (lower.includes('kyc')) {
        setMessages(prev => [...prev, { text: 'Please enter your user ID to check KYC status.', isBot: true }]);
        setAwaitingUserId(true);
      } else if (lower.includes('balance')) {
        setMessages(prev => [...prev, { text: 'Please enter your card ID to check balance.', isBot: true }]);
        setAwaitingCardId(true);
      } else {
        const botResponse = getBotResponse(trimmedInput);
        setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      }
    }
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
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
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
