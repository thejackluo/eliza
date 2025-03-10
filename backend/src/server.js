require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { createServer } = require('http');
const { Server } = require('socket.io');
const db = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth.routes');
const meetingRoutes = require('./routes/meeting.routes');
const transcriptRoutes = require('./routes/transcript.routes');
const projectRoutes = require('./routes/project.routes');
const peopleRoutes = require('./routes/people.routes');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? 'https://eliza.ai' 
      : 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Initialize database
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/transcripts', transcriptRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/people', peopleRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Socket.io connection for real-time updates
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('join-meeting', (meetingId) => {
    socket.join(`meeting-${meetingId}`);
    console.log(`Client joined meeting: ${meetingId}`);
  });
  
  socket.on('leave-meeting', (meetingId) => {
    socket.leave(`meeting-${meetingId}`);
    console.log(`Client left meeting: ${meetingId}`);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, httpServer, io };
