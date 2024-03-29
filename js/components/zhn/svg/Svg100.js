"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("./Svg"));
var _jsxRuntime = require("preact/jsx-runtime");
const Svg100 = _ref => {
  let {
    children,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_Svg.default, {
    ...restProps,
    width: "100%",
    height: "100%",
    children: children
  });
};
var _default = exports.default = Svg100;
//# sourceMappingURL=Svg100.js.map