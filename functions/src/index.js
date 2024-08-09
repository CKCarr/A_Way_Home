import * as functions from 'firebase-functions';
import app from './server.js';

// Export the API to Firebase Functions
export const api = functions.https.onRequest(app);
