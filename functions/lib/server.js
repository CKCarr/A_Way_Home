"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _authRoutes = _interopRequireDefault(require("./routes/authRoutes.js"));
var _petRoutes = _interopRequireDefault(require("./routes/petRoutes.js"));
var _flyerRoutes = _interopRequireDefault(require("./routes/flyerRoutes.js"));
var _messageRoutes = _interopRequireDefault(require("./routes/messageRoutes.js"));
var _testRoutes = _interopRequireDefault(require("./routes/testRoutes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// functions/src/server.js

_dotenv["default"].config({
  path: '../.env'
});
// Initialize Express app
var app = (0, _express["default"])();
var corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
};
app.options('*', (0, _cors["default"])(corsOptions));
app.use(_express["default"].json());

// Define routes
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/pets', _petRoutes["default"]);
app.use('/api/flyers', _flyerRoutes["default"]);
app.use('/api/messages', _messageRoutes["default"]);
app.use('/test', _testRoutes["default"]);
app.get('/test', function (req, res) {
  res.send('Server is running!');
});

// Export the Express app
var _default = exports["default"] = app;