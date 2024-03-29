"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const Svg = _ref => {
  let {
    w,
    h = w,
    children,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)("svg", {
    width: w + "px",
    height: h + "px",
    ...restProps,
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    viewBox: "0 0 " + w + " " + h,
    children: children
  });
};
var _default = exports.default = Svg;
//# sourceMappingURL=Svg.js.map