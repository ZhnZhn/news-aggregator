"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useTooltip2 = _interopRequireDefault(require("../hooks/useTooltip"));

var _DP = require("../DP");

var _jsxRuntime = require("preact/jsx-runtime");

var CL_BT_MORE = 'bt-more',
    S_SVG = {
  fill: 'black',
  stroke: 'black'
};

var SvgMore = function SvgMore(_ref) {
  var style = _ref.style,
      svgStyle = _ref.svgStyle,
      btRef = _ref.btRef,
      onClick = _ref.onClick;

  var _useTooltip = (0, _useTooltip2["default"])("More", _DP.DP_MIDDLE_LEFT),
      _ariaLabel = _useTooltip[0],
      _dataPos = _useTooltip[1];

  return (0, _jsxRuntime.jsx)("button", {
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    ref: btRef,
    className: CL_BT_MORE,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)("svg", {
      style: (0, _extends2["default"])({}, S_SVG, svgStyle),
      width: "6px",
      height: "24px",
      viewBox: "0 0 6 24",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "4",
        r: "2.5"
      }), (0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "12",
        r: "2.5"
      }), (0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "19",
        r: "2.5"
      })]
    })
  });
};

var _default = SvgMore;
exports["default"] = _default;
//# sourceMappingURL=SvgMore.js.map