// src/components/MessageForm.tsx
'use client';

import React, { useState } from 'react';
import { Textarea, Button } from '../app/MTailwind';
import axios from 'axios';

const MessageForm: React.FC<{ receiverId: string; onClose: () => void }> = ({
  receiverId,
  onClose,
}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      const senderId = localStorage.getItem('userId'); // Assume userId is stored in localStorage
      if (!senderId) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('/messages/send', {
        senderId,
        receiverId,
        message,
      });

      alert(response.data.message);
      setMessage('');
      onClose();
    } catch (error) {
      console.error('Error sending message: ', error);
      alert(error.response?.data?.error || 'Failed to send message');
    }
  };

  return (
    <div className="p-4">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here"
        className="w-full p-2 border rounded-md"
      />
      <Button
        variant="gradient"
        color="blue"
        onClick={handleSendMessage}
        className="mt-2"
      >
        Send Message
      </Button>
    </div>
  );
};

export default MessageForm;
