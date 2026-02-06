"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT = {
  marginTop: 16,
  marginLeft: 8
};
const PoweredBy = props => (0, _jsxRuntime.jsxs)("div", {
  style: {
    ...S_ROOT,
    ...props.style
  },
  children: [(0, _jsxRuntime.jsx)("span", {
    style: {
      ..._crStyle.S_COLOR_BLACK,
      ...props.spanStyle
    },
    children: "Powered by"
  }), props.children]
});
var _default = exports.default = PoweredBy;
//# sourceMappingURL=PoweredBy.js.map