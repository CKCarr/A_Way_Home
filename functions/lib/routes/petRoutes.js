"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _petController = require("../controllers/petController.js");
var _authMiddleware = require("../middlewares/authMiddleware.js");
// src/routes/petRoutes.js

var router = (0, _express.Router)();
router.post('/', _authMiddleware.authenticate, _petController.addPet);
router.get('/', _petController.getPets);
router.get('/:id', _petController.getPet);
router.put('/:id', _authMiddleware.authenticate, _petController.updatePet);
router["delete"]('/:id', _authMiddleware.authenticate, _petController.deletePet);
var _default = exports["default"] = router;