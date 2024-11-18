// chatwithai.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HistoryIcon from '@mui/icons-material/History';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useStyles } from './styles';
import { chatService } from '../../Services/chat-services';

const ChatWithAI = () => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const fetchSessions = async () => {
    try {
      const sessionsData = await chatService.getSessions();
      setSessions(sessionsData);
      
      // If there are sessions, load the most recent one
      if (sessionsData.length > 0) {
        const latestSession = sessionsData[0];
        setCurrentSessionId(latestSession.id);
        loadChatHistory(latestSession.id);
      }
    } catch (error) {
      console.error('Error fetching sessions:', error);
      // Handle error (show notification, etc.)
    }
  };

  const loadChatHistory = async (sessionId) => {
    try {
      const history = await chatService.getChatHistory(sessionId);
      setChatHistory(history);
    } catch (error) {
      console.error('Error loading chat history:', error);
      // Handle error
    }
  };

  const startNewSession = async () => {
    try {
      const newSession = await chatService.startSession();
      setSessions(prev => [newSession, ...prev]);
      setCurrentSessionId(newSession.id);
      setChatHistory([]);
    } catch (error) {
      console.error('Error starting new session:', error);
      // Handle error
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // If no session exists, create one
    if (!currentSessionId) {
      await startNewSession();
    }

    const newMessage = {
      content: message,
      timestamp: new Date().toLocaleTimeString(),
      sender: 'user'
    };

    setChatHistory(prev => [...prev, newMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await chatService.sendMessage(message, currentSessionId);
      
      const aiResponse = {
        content: response.message,
        timestamp: new Date().toLocaleTimeString(),
        sender: 'ai',
        messageId: response.messageId // Store this for feedback
      };

      setChatHistory(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (show error message to user)
    } finally {
      setLoading(false);
    }
  };

  const handleSessionClick = async (sessionId) => {
    setCurrentSessionId(sessionId);
    await loadChatHistory(sessionId);
  };

  const sendMessageFeedback = async (messageId, isHelpful) => {
    try {
      await chatService.sendFeedback(messageId, isHelpful);
      // Optionally update UI to show feedback was received
    } catch (error) {
      console.error('Error sending feedback:', error);
      // Handle error
    }
  };

  return (
    <Box className={classes.chatContainer}>
      {/* Main Chat Area */}
      <Paper className={classes.mainChat}>
        <Box className={classes.chatHeader}>
          <Typography variant="h6">Student Name</Typography>
          {/* <Typography variant="subtitle2" color="textSecondary">
            Domain: AI/ML
          </Typography> */}
        </Box>
        
        <Divider />

        <Box className={classes.messageArea}>
          {chatHistory.map((msg, index) => (
            <Box
              key={index}
              className={`${classes.messageWrapper} ${
                msg.sender === 'user' ? classes.messageWrapperUser : classes.messageWrapperAi
              }`}
            >
              <Box className={msg.sender === 'user' ? classes.userMessage : classes.aiMessage}>
                {msg.content}
              </Box>
              <Typography variant="caption" className={classes.timestamp}>
                {msg.timestamp}
              </Typography>
            </Box>
          ))}
          {loading && (
            <Box className={classes.loadingContainer}>
              <CircularProgress size={20} />
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>

        <Box component="form" onSubmit={sendMessage} className={classes.inputArea}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.input}
          />
          <IconButton 
            type="submit" 
            color="primary" 
            className={classes.sendButton}
            disabled={loading}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>

      {/* Sessions Sidebar */}
      <Paper className={classes.sidebar}>
        <Box className={classes.sidebarHeader}>
          <Typography variant="h6">Chat Sessions</Typography>
          <IconButton size="small" onClick={startNewSession}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <List>
          {sessions.map((session, index) => (
            <ListItem 
              button 
              key={session.id} 
              className={classes.sessionItem}
              selected={session.id === currentSessionId}
              onClick={() => handleSessionClick(session.id)}
            >
              <HistoryIcon className={classes.sessionIcon} />
              <ListItemText 
                primary={`Session #${index + 1}`}
                secondary={session.latestDate}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ChatWithAI;