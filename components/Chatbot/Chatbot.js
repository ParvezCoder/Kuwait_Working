import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [conversationId, setConversationId] = useState(Date.now().toString());

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Debug: only run in browser & when isOpen changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Chatbot state changed, isOpen:', isOpen);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Add welcome message only when chat opens
      setMessages([
        {
          id: 1,
          text: "Hello! I'm your Corp-Digital assistant. How can I help you today? I can answer questions about our IT solutions, software development, and business consulting services.",
          sender: 'bot',
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputMessage,
          conversationId,
          userInfo: { timestamp: new Date().toISOString() }
        }),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, botMessage]);

      if (data.isAskingForContact) setShowContactForm(true);

    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "I'm sorry, I'm experiencing technical difficulties. Please provide your email address or phone number so our team can assist you directly.",
          sender: 'bot',
          timestamp: new Date().toISOString()
        }
      ]);
      setShowContactForm(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!contactForm.email && !contactForm.phone) {
      alert('Please provide either an email or phone number');
      return;
    }

    try {
      const response = await fetch('/api/chatbot-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contactForm,
          conversationId,
          source: 'chatbot'
        }),
      });

      if (response.ok) {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now(),
            text: "Thank you! I've saved your contact information. Our team will reach out to you soon.",
            sender: 'bot',
            timestamp: new Date().toISOString()
          }
        ]);
        setShowContactForm(false);
        setContactForm({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to save contact');
      }
    } catch (error) {
      console.error('Error saving contact:', error);
      alert('Failed to save contact information. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
          width: '70px',
          height: '70px',
          backgroundColor: '#ff6b35',
          border: '3px solid #ffffff',
          borderRadius: '50%',
          color: 'white',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Chat with AI Assistant"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {/* Chatbot UI (unchanged from your original) */}
      {isOpen && (
        <div style={{
  position: 'fixed',
  bottom: '110px',
  right: '24px',
  zIndex: 99998,
  width: '400px',
  height: '550px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  border: '2px solid #e5e7eb',
  display: 'flex',
  flexDirection: 'column'
}}>
  {/* Header */}
  <div style={{ padding: '12px', borderBottom: '1px solid #ddd', fontWeight: 'bold' }}>
    Corp-Digital Assistant
  </div>

  {/* Messages */}
  <div
    ref={chatContainerRef}
    style={{ flex: 1, padding: '12px', overflowY: 'auto' }}
  >
    {messages.map(msg => (
      <div key={msg.id} style={{ marginBottom: '10px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '8px 12px',
            borderRadius: '12px',
            background: msg.sender === 'user' ? '#ff6b35' : '#f3f4f6',
            color: msg.sender === 'user' ? '#fff' : '#333',
            maxWidth: '80%',
            wordWrap: 'break-word'
          }}
        >
          {msg.text}
        </div>
      </div>
    ))}
    <div ref={messagesEndRef}></div>
  </div>

  {/* Input */}
  <div style={{ padding: '12px', borderTop: '1px solid #ddd', display: 'flex' }}>
    <input
      type="text"
      value={inputMessage}
      onChange={(e) => setInputMessage(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Type your message..."
      style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
    />
    <button
      onClick={handleSendMessage}
      disabled={isLoading}
      style={{
        marginLeft: '8px',
        padding: '10px 16px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#ff6b35',
        color: '#fff',
        cursor: 'pointer'
      }}
    >
      <FaPaperPlane />
    </button>
  </div>
</div>
      )}
    </>
  );
};

export default Chatbot;
