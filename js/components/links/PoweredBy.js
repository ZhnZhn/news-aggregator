"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S = {
  ROOT: {
    marginTop: 16,
    marginLeft: 8
  },
  SPAN: {
    color: 'black'
  }
};

var PoweredBy = function PoweredBy(_ref) {
  var rootStyle = _ref.rootStyle,
      spanStyle = _ref.spanStyle,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S.ROOT, rootStyle),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S.SPAN, spanStyle),
      children: "Powered by"
    }), children]
  });
};

var _default = PoweredBy;
exports["default"] = _default;
//# sourceMappingURL=PoweredBy.js.map