"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _jsxRuntime = require("preact/jsx-runtime");
var Button = function Button(children) {
  for (var _len = arguments.length, restProps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restProps[_key - 1] = arguments[_key];
  }
  return (0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    type: "button"
  }, restProps, {
    children: children
  }));
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=Button.js.map