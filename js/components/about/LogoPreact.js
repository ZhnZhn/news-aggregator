"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useTooltip2 = _interopRequireDefault(require("../hooks/useTooltip"));

var _jsxRuntime = require("preact/jsx-runtime");

var LogoPreact = function LogoPreact(_ref) {
  var ariaLabel = _ref.ariaLabel,
      dataPos = _ref.dataPos,
      className = _ref.className;

  var _useTooltip = (0, _useTooltip2["default"])(ariaLabel, dataPos),
      _ariaLabel = _useTooltip[0],
      _dataPos = _useTooltip[1];

  return (0, _jsxRuntime.jsx)("a", {
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: className,
    href: "https://preactjs.com",
    tabIndex: "-1",
    children: (0, _jsxRuntime.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "60px",
      height: "60px",
      viewBox: "-256 -256 512 512",
      children: [(0, _jsxRuntime.jsx)("path", {
        d: "M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z",
        fill: "white"
      }), (0, _jsxRuntime.jsx)("ellipse", {
        cx: "0",
        cy: "0",
        rx: "75px",
        ry: "196px",
        "stroke-width": "16px",
        "stroke-dasharray": "358.1911894296917 88.8088105703083",
        "stroke-dashoffset": "2981.2868930080463",
        fill: "none",
        stroke: "#673ab8",
        transform: "rotate(52)"
      }), (0, _jsxRuntime.jsx)("ellipse", {
        cx: "0",
        cy: "0",
        rx: "75px",
        ry: "196px",
        "stroke-width": "16px",
        "stroke-dasharray": "415.8864127967576 31.113587203242375",
        "stroke-dashoffset": "-2105.557459071302",
        fill: "none",
        stroke: "#673ab8",
        transform: "rotate(-52)"
      }), (0, _jsxRuntime.jsx)("circle", {
        cx: "0",
        cy: "0",
        r: "34",
        fill: "#673ab8"
      })]
    })
  });
};

var _default = LogoPreact;
exports["default"] = _default;
//# sourceMappingURL=LogoPreact.js.map