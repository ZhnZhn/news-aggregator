"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const _crViewBox = size => "0 0 " + size + " " + size;
const SvgIcon = _ref => {
  let {
    color = 'currentColor',
    size = '24',
    children,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: _crViewBox(size),
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...restProps,
    children: children
  });
};
var _default = exports.default = SvgIcon;
//# sourceMappingURL=SvgIcon.js.map