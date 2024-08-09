"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "admin", {
  enumerable: true,
  get: function get() {
    return _firebaseAdmin["default"];
  }
});
exports.db = exports.auth = void 0;
require("dotenv/config");
var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Ensure all necessary environment variables are loaded
var requiredEnvVars = ['FB_PROJECT_ID', 'FB_PRIVATE_KEY_ID', 'FB_PRIVATE_KEY', 'FB_CLIENT_EMAIL', 'FB_CLIENT_ID', 'FB_AUTH_URI', 'FB_TOKEN_URI', 'FB_AUTH_PROVIDER_CERT_URL', 'FB_CLIENT_CERT_URL'];
requiredEnvVars.forEach(function (envVar) {
  if (!process.env[envVar]) {
    console.error("Error: Missing environment variable ".concat(envVar));
    process.exit(1);
  }
});
var serviceAccount = {
  type: 'service_account',
  project_id: process.env.FB_PROJECT_ID,
  private_key_id: process.env.FB_PRIVATE_KEY_ID,
  private_key: process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FB_CLIENT_EMAIL,
  client_id: process.env.FB_CLIENT_ID,
  auth_uri: process.env.FB_AUTH_URI,
  token_uri: process.env.FB_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.FB_CLIENT_CERT_URL
};
console.log('Service Account Config:', serviceAccount);
try {
  _firebaseAdmin["default"].initializeApp({
    credential: _firebaseAdmin["default"].credential.cert(serviceAccount),
    databaseURL: "https://".concat(process.env.FB_PROJECT_ID, ".firebaseio.com")
  });
  console.log('Firebase Admin SDK initialized');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error);
  process.exit(1);
}
var db = exports.db = _firebaseAdmin["default"].firestore();
console.log('Firestore initialized');
var auth = exports.auth = _firebaseAdmin["default"].auth();