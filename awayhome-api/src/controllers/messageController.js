Backend: Add a new route to handle messages
javascript
Copy code
// src/routes/messageRoutes.js
import express from 'express';
import { createMessage } from '../controllers/messageController.js';

const router = express.Router();

router.post('/send', createMessage);

export default router;
javascript
Copy code
// src/controllers/messageController.js
import Message from '../models/Message.js';

export const createMessage = async (req, res) => {
  const { senderId, receiverId, message } = req.body;

  try {
    const newMessage = await Message.create({ sender_id: senderId, receiver_id: receiverId, message });
    res.status(201).json({ message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

