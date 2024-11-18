// services/chatService.js

const BASE_URL = process.env.REACT_APP_API_URL || 'http://your-api-base-url';

export const chatService = {
  // Get all chat sessions for the current student
  getSessions: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/student/sessions`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) throw new Error('Failed to fetch sessions');
      return await response.json();
    } catch (error) {
      console.error('Error fetching sessions:', error);
      throw error;
    }
  },

  // Start a new chat session
  startSession: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/start-session`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) throw new Error('Failed to start new session');
      return await response.json();
    } catch (error) {
      console.error('Error starting session:', error);
      throw error;
    }
  },

  // Send a message and get AI response
  sendMessage: async (message, sessionId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  // Get chat history for a specific session
  getChatHistory: async (sessionId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/chat-history?sessionId=${sessionId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) throw new Error('Failed to fetch chat history');
      return await response.json();
    } catch (error) {
      console.error('Error fetching chat history:', error);
      throw error;
    }
  },

  // Send feedback for an AI response
  sendFeedback: async (messageId, feedback) => {
    try {
      const response = await fetch(`${BASE_URL}/api/feedback`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageId,
          feedback,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to send feedback');
      return await response.json();
    } catch (error) {
      console.error('Error sending feedback:', error);
      throw error;
    }
  },
};