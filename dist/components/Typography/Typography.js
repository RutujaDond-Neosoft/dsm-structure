"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Typography.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Typography = _ref => {
  let {
    variant = 'h1',
    children
  } = _ref;
  const Tag = variant;
  return /*#__PURE__*/_react.default.createElement(Tag, {
    className: "typography ".concat(variant)
  }, children);
};
var _default = exports.default = Typography;