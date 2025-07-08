"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Input.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Input = _ref => {
  let {
    type = 'text',
    value,
    onChange,
    placeholder,
    name,
    id,
    disabled,
    required,
    readOnly,
    maxLength,
    minLength,
    ariaLabel,
    tabIndex
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    className: "input",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    name: name,
    id: id,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    maxLength: maxLength,
    minLength: minLength,
    "aria-label": ariaLabel,
    tabIndex: tabIndex
  });
};
var _default = exports.default = Input;