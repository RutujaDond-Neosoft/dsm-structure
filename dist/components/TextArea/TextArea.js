"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./TextArea.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/components/TextArea.jsx

const TextArea = _ref => {
  let {
    name,
    id,
    value,
    placeholder = "Enter text...",
    rows = 4,
    cols,
    required = false,
    disabled = false,
    readOnly = false,
    className = "",
    ariaLabel
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("textarea", {
    id: id || name,
    name: name,
    value: value,
    placeholder: placeholder,
    rows: rows,
    cols: cols,
    required: required,
    disabled: disabled,
    readOnly: readOnly,
    "aria-label": ariaLabel || placeholder,
    className: "custom-textarea ".concat(className)
  });
};
var _default = exports.default = TextArea;