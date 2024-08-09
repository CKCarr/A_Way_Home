import 'dotenv/config';
import admin from 'firebase-admin';

// Ensure all necessary environment variables are loaded
const requiredEnvVars = [
    'FB_PROJECT_ID',
    'FB_PRIVATE_KEY_ID',
    'FB_PRIVATE_KEY',
    'FB_CLIENT_EMAIL',
    'FB_CLIENT_ID',
    'FB_AUTH_URI',
    'FB_TOKEN_URI',
    'FB_AUTH_PROVIDER_CERT_URL',
    'FB_CLIENT_CERT_URL',
];

requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
        console.error(`Error: Missing environment variable ${envVar}`);
        process.exit(1);
    }
});

const serviceAccount = {
    type: 'service_account',
    project_id: process.env.FB_PROJECT_ID,
    private_key_id: process.env.FB_PRIVATE_KEY_ID,
    private_key: process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FB_CLIENT_EMAIL,
    client_id: process.env.FB_CLIENT_ID,
    auth_uri: process.env.FB_AUTH_URI,
    token_uri: process.env.FB_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.FB_CLIENT_CERT_URL,
};

console.log('Service Account Config:', serviceAccount);

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${process.env.FB_PROJECT_ID}.firebaseio.com`,
    });
    console.log('Firebase Admin SDK initialized');
} catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
    process.exit(1);
}

const db = admin.firestore();
console.log('Firestore initialized');
const auth = admin.auth();

export { db, auth, admin };
