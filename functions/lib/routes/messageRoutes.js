"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _messageController = require("../controllers/messageController.js");
var _authMiddleware = require("../middlewares/authMiddleware.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/routes/messageRoutes.js

var router = _express["default"].Router();
router.post('/', _authMiddleware.authenticate, _messageController.addMessage);
router.get('/', _authMiddleware.authenticate, _messageController.getMessages);
router.get('/:id', _authMiddleware.authenticate, _messageController.getMessage);
router.put('/:id', _authMiddleware.authenticate, _messageController.updateMessage);
router["delete"]('/:id', _authMiddleware.authenticate, _messageController.deleteMessage);
var _default = exports["default"] = router;