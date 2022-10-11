"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_BT_MORE = 'bt-more',
    S_SVG = {
  fill: 'black',
  stroke: 'black'
};

var SvgMore = function SvgMore(_ref) {
  var style = _ref.style,
      svgStyle = _ref.svgStyle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Menu More' : _ref$title,
      btRef = _ref.btRef,
      onClick = _ref.onClick;
  return (0, _jsxRuntime.jsx)("button", {
    ref: btRef,
    className: CL_BT_MORE,
    style: style,
    title: title,
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