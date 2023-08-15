"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_WITH_SCROLL = 'with-scroll';
const ScrollPane = _ref => {
  let {
    style,
    className,
    children
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    className: (0, _crStyle.crCn)(CL_WITH_SCROLL, className),
    style: style,
    children: children
  });
};
var _default = ScrollPane;
exports.default = _default;
//# sourceMappingURL=ScrollPane.js.map