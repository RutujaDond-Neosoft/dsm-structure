"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Button = _ref => {
  let {
    children,
    onClick,
    type = "button",
    variant = "primary",
    ariaLabel,
    role = "button"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-".concat(variant),
    onClick: onClick,
    type: type,
    "aria-label": ariaLabel,
    role: role
  }, children);
};
var _default = exports.default = Button;