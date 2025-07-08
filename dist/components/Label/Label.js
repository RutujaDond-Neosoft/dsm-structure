"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Label.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Label = _ref => {
  let {
    label,
    htmlFor,
    required = false,
    value,
    onChange,
    placeholder,
    type = "text",
    id,
    name
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "labelContainer"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: htmlFor,
    className: "label"
  }, label, required && /*#__PURE__*/_react.default.createElement("span", {
    className: "required"
  }, "*")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder
  })));
};
var _default = exports.default = Label;