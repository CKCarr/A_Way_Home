// src/routes/messageRoutes.js

const express = require('express');
const { firestore } = require('../config/firebaseAdmin');
const router = express.Router();

router.post('/send', async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    if (!senderId || !receiverId || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const messageData = {
            senderId,
            receiverId,
            message,
            timestamp: admin.firestore.Timestamp.now(),
        };

        await firestore.collection('messages').add(messageData);

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message: ', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

module.exports = router;
