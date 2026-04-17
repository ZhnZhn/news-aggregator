"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_SVG_X = "bt-svg-x",
  S_SVG = {
    padding: 3,
    stroke: 'inherit'
  };
const BtSvgX = props => (0, _jsxRuntime.jsx)("button", {
  type: "button",
  "aria-label": props.ariaLabel || "Close",
  tabIndex: "-1",
  className: props.className || CL_BT_SVG_X,
  style: props.style,
  onClick: props.onClick,
  children: (0, _jsxRuntime.jsxs)(_Svg.default, {
    w: "12",
    style: S_SVG,
    strokeLinecap: "round",
    strokeWidth: "2",
    children: [(0, _jsxRuntime.jsx)("path", {
      d: "M 0,0 L 12,12"
    }), (0, _jsxRuntime.jsx)("path", {
      d: "M 12,0 L 0,12"
    })]
  })
});
var _default = exports.default = BtSvgX;
//# sourceMappingURL=BtSvgX.js.map