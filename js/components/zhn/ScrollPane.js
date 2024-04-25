"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const ScrollPane = _ref => {
  let {
    refScrollPane,
    style,
    className,
    children
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    ref: refScrollPane,
    className: (0, _crStyle.crWithScrollCn)(className),
    style: style,
    children: children
  });
};
var _default = exports.default = ScrollPane;
//# sourceMappingURL=ScrollPane.js.map