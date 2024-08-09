// functions/src/server.js
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import petRoutes from './routes/petRoutes.js';
import flyerRoutes from './routes/flyerRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import testRoutes from './routes/testRoutes.js';

// Initialize Express app
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};

app.options('*', cors(corsOptions));
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/flyers', flyerRoutes);
app.use('/api/messages', messageRoutes);
app.use('/test', testRoutes);

app.get('/test', (req, res) => {
  res.send('Server is running!');
});

// Export the Express app
export default app;
