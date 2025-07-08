"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Label.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LabelWithHeading = _ref => {
  let {
    label,
    htmlFor,
    required = false,
    value,
    onChange,
    placeholder = " ",
    type = "text",
    id,
    name
  } = _ref;
  const inputId = id || htmlFor || name;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: inputId,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    required: required
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: inputId,
    className: "floating-label"
  }, label, required && /*#__PURE__*/_react.default.createElement("span", {
    className: "required"
  }, "*")));
};
var _default = exports.default = LabelWithHeading;