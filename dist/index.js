"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button2.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function () {
    return _Input.default;
  }
});
Object.defineProperty(exports, "Typography", {
  enumerable: true,
  get: function () {
    return _Typography.default;
  }
});
require("./components/Button/Button.css");
require("./styles/variables.css");
var _Button2 = _interopRequireDefault(require("./components/Button/Button"));
var _Input = _interopRequireDefault(require("./components/Input/Input"));
var _Typography = _interopRequireDefault(require("./components/Typography/Typography"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }