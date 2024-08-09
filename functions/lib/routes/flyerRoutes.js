"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _flyerController = require("../controllers/flyerController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/', _flyerController.addFlyer);
router.get('/', _flyerController.getFlyers);
router.get('/:id', _flyerController.getFlyer);
router.put('/:id', _flyerController.updateFlyer);
router["delete"]('/:id', _flyerController.deleteFlyer);
var _default = exports["default"] = router;