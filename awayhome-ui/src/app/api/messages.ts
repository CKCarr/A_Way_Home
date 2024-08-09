// src/api/messages.ts
import 'dotenv/config';
import api from '../../config/axiosConfig';

export const addMessage = async (messageData) => {
  const response = await api.post(`/messages`, messageData);
  return response.data;
};

export const getMessages = async () => {
  const response = await api.get(`/messages`);
  return response.data;
};

export const getMessage = async (id) => {
  const response = await api.get(`/messages/${id}`);
  return response.data;
};

export const updateMessage = async (id, messageData) => {
  const response = await api.put(`/messages/${id}`, messageData);
  return response.data;
};

export const deleteMessage = async (id) => {
  const response = await api.delete(`/messages/${id}`);
  return response.data;
};
