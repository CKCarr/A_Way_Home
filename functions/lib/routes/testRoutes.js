"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _testController = require("../controllers/testController.js");
// src/controllers/testController.js

var router = (0, _express.Router)();
router.post('/create', _testController.createTestDocument);
router.get('/get', _testController.getTestDocument);
var _default = exports["default"] = router;