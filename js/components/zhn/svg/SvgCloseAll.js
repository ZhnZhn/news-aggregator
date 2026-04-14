"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_SVG = {
  transform: 'scale(2)'
};
const SvgCloseAll = props => (0, _jsxRuntime.jsxs)(_SvgIcon.default, {
  viewBox: "0 0 16 16",
  width: "16",
  height: "16",
  fill: "currentColor",
  "stroke-width": "0",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  className: props.className,
  style: S_SVG,
  children: [(0, _jsxRuntime.jsx)("path", {
    d: "M8.6 8l-.7-.7L6.5 8.7 5 7.3l-.7.7L5.7 9.5l-1.4 1.4.70.70L6.5 10.2l1.4 1.4.7-.7L7.2 9.5l1.4-1.4z"
  }), (0, _jsxRuntime.jsx)("path", {
    d: "M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"
  })]
});
var _default = exports.default = SvgCloseAll;
//# sourceMappingURL=SvgCloseAll.js.map