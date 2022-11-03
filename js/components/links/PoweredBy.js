"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("preact/jsx-runtime");

var S_ROOT = {
  marginTop: 16,
  marginLeft: 8
},
    S_SPAN = {
  color: 'black'
};

var PoweredBy = function PoweredBy(_ref) {
  var style = _ref.style,
      spanStyle = _ref.spanStyle,
      children = _ref.children;
  return (0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROOT, style),
    children: [(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S_SPAN, spanStyle),
      children: "Powered by"
    }), children]
  });
};

var _default = PoweredBy;
exports["default"] = _default;
//# sourceMappingURL=PoweredBy.js.map