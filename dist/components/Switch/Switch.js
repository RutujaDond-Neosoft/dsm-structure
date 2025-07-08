"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Switch.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Switch = _ref => {
  let {
    checked,
    onChange,
    ariaLabel
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: onChange,
    checked: checked,
    "aria-label": ariaLabel
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "slider"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-container"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-sun"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-moon"
  }))));
};
var _default = exports.default = Switch;