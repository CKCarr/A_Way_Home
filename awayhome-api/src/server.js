// src/server.js
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import cors from 'cors';
import express from 'express';
import { authenticate } from './middlewares/authMiddleware.js';
import authRoutes from './routes/authRoutes.js';
const messageRoutes = require('./routes/messageRoutes');
// import animalRoutes from './routes/animalRoutes.js';

// Log environment variables (for debugging, remove in production)
// console.log('FIREBASE_API_KEY:', process.env.FIREBASE_API_KEY);
// console.log('FIREBASE_AUTH_DOMAIN:', process.env.FIREBASE_AUTH_DOMAIN);
// console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID);

// Initialize Express app
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes); // No authentication middleware for auth routes
app.use('/api/messages', authenticate, messageRoutes);
// app.use('/api/animals', authenticate, animalRoutes); // Example for protected routes

app.get('/test', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.API_PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`AWH-API Server running on port ${PORT}`);
});
