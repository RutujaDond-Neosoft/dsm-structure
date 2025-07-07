"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./components/Button/Button"));
var _Input = _interopRequireDefault(require("./components/Input/Input"));
var _Typography = _interopRequireDefault(require("./components/Typography/Typography"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '2rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h1"
  }, "Design System"), /*#__PURE__*/_react.default.createElement(_Input.default, {
    placeholder: "Enter your name"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    onClick: () => alert('Clicked!')
  }, "Primary Button"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Secondary Button"));
}
var _default = exports.default = App;