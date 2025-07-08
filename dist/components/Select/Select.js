"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Select.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Select = _ref => {
  let {
    name,
    id,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    required = false,
    disabled = false,
    className = "",
    ariaLabel
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement("select", {
    id: id || name,
    name: name,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    className: "custom-select",
    "aria-label": ariaLabel
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.value || option,
    value: option.value || option
  }, option.label || option))), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-chevron-down dropdown-icon",
    "aria-hidden": "true"
  }));
};
var _default = exports.default = Select;