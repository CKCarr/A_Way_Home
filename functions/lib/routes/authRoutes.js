"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = require("../controllers/authController.js");
var _authMiddleware = require("../middlewares/authMiddleware.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/routes/authRoutes.js

var router = _express["default"].Router();
router.post('/register', _authController.registerUser);
router.post('/login', _authController.loginUser);
router.get('/me', _authMiddleware.authenticate, _authController.getUserDetails); // Protected route
var _default = exports["default"] = router;