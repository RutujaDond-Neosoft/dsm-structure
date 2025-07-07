"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Input.css");
const _excluded = ["type", "value", "onChange", "placeholder", "name", "id", "disabled", "required", "readOnly", "maxLength", "minLength", "ariaLabel"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
      ariaLabel
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("input", _extends({
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
    "aria-label": ariaLabel
  }, rest));
};
var _default = exports.default = Input;