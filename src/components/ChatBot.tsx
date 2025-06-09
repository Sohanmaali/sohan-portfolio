'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { FiMessageSquare, FiX, FiMinimize2, FiMaximize2, FiSend, FiTrash2 } from 'react-icons/fi'; // Added FiTrash2 icon

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const initialMessage = {
    id: 1,
    text: "Hello! I'm your Sohan's assistant. How can I help you today?",
    sender: 'bot' as const,
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const controls = useDragControls();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Generate bot response based on user input
  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')||input.includes('hy')) {
      return "Hello! I'm Sohan's assistant. How can I help you today?";
    } else if (input.includes('project') || input.includes('work') || input.includes('portfolio')) {
      return "You can check out my projects in the 'Projects' section of my portfolio. Would you like me to tell you more about any specific project?";
    } else if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
      return "You can reach me through the contact form on my website or email me directly. Would you like my email address?";
    } else if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else if (input.includes('bye') || input.includes('goodbye')) {
      return "Goodbye! Feel free to come back if you have more questions.";
    } else if (input.includes('who are you') || input.includes('what are you')) {
      return "I'm an AI assistant here to help you learn more about Sohan and his work. How can I assist you today?";
    } else if (input.includes('experience') || input.includes('background')) {
      return "Sohan has experience in full-stack development with technologies like React, Node.js, and more. Would you like to know about specific technologies he's worked with?";
    } else if (input.includes('skill') || input.includes('technolog')) {
      return "Sohan works with various technologies including React, Next.js, Node.js, TypeScript, and more. Is there a specific technology you'd like to know more about?";
    } else {
      const defaultResponses = [
        "I'm not sure I understand. Could you rephrase that?",
        "That's interesting! Could you tell me more?",
        "I'm still learning. Could you ask me something else?",
        "Thanks for sharing! Is there anything specific you'd like to know?"
      ];
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = inputValue.trim();
    if (!userInput) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: userInput,
      sender: 'user',
      timestamp: new Date(),
    };

    // Update messages with user message
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    const typingIndicator: Message = {
      id: Date.now() + 1,
      text: '...',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };
    
    setMessages(prev => [...prev, typingIndicator]);

    // Simulate bot thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + (Math.random() * 1000)));

    // Generate and add bot response
    const botResponse: Message = {
      id: Date.now() + 2,
      text: generateBotResponse(userInput),
      sender: 'bot',
      timestamp: new Date(),
    };

    // Remove typing indicator and add bot response
    setMessages(prev => [...prev.filter(msg => !msg.isTyping), botResponse]);
  };

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsMinimized(true);
    } else if (isOpen && isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const clearChat = () => {
    setMessages([{...initialMessage, id: 1, timestamp: new Date()}]);
  };

  if (!isOpen) {
    return (
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <FiMessageSquare className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      className="fixed bottom-4 sm:bottom-8 right-2 sm:right-4 md:right-8 z-50 w-[calc(100%-1rem)] sm:w-96 max-w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col"
      style={{ 
        height: isMinimized ? '60px' : '80vh',
        maxHeight: 'calc(100vh - 2rem)',
        minHeight: isMinimized ? '60px' : '300px',
        touchAction: 'none',
      }}
      drag
      dragConstraints={{
        top: -window.innerHeight + 100,
        left: -window.innerWidth + 50,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.1}
      dragMomentum={false}
      dragControls={controls}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
    >
      {/* Header */}
      <div 
        className="px-4 py-3 bg-blue-600 text-white flex items-center justify-between cursor-move"
        onPointerDown={(e) => controls.start(e)}
      >
        <h3 className="font-medium text-sm sm:text-base">Chat with me</h3>
        <div className="flex items-center space-x-2">
          {!isMinimized && messages.length > 1 && (
            <button
              onClick={clearChat}
              className="p-1 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Clear chat"
              title="Clear chat"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 rounded-full hover:bg-blue-700 transition-colors"
            aria-label={isMinimized ? 'Maximize' : 'Minimize'}
            title={isMinimized ? 'Maximize' : 'Minimize'}
          >
            {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Close chat"
            title="Close chat"
          >
            <FiX />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] xs:max-w-xs sm:max-w-md rounded-2xl px-4 py-3 text-sm sm:text-base ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : message.isTyping
                        ? 'bg-gray-100 dark:bg-gray-700 text-transparent animate-pulse rounded-bl-none'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {message.isTyping ? (
                      <div className="flex space-x-1 items-center">
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    ) : (
                      <>
                        <p className="break-words">{message.text}</p>
                        <p className="text-[10px] xs:text-xs mt-1 opacity-70 text-right">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-2 sm:p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 text-sm sm:text-base px-3 sm:px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-0 min-w-0"
              />
              <button
                type="submit"
                className="p-1.5 sm:p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex-shrink-0"
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </form>
        </>
      )}
    </motion.div>
  );
};

export default ChatBot;
