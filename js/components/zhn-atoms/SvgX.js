"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _useTooltip2 = _interopRequireDefault(require("../hooks/useTooltip"));
var _DP = require("../DP");
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_SVG_CLOSE = "svg-close",
  DF_COLOR = '#d64336',
  S_SVG = {
    padding: 3
  };
var SvgX = function SvgX(_ref) {
  var dataPos = _ref.dataPos,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? CL_SVG_CLOSE : _ref$className,
    style = _ref.style,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? DF_COLOR : _ref$color,
    onClick = _ref.onClick;
  var _useTooltip = (0, _useTooltip2["default"])("Close", dataPos || _DP.DP_CLOSE_LEFT),
    _ariaLabel = _useTooltip[0],
    _dataPos = _useTooltip[1];
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    tabIndex: "-1",
    className: className,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)(_Svg["default"], {
      w: "12",
      style: S_SVG,
      strokeLinecap: "round",
      strokeWidth: "2",
      stroke: color,
      children: [(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), (0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
};
var _default = SvgX;
exports["default"] = _default;
//# sourceMappingURL=SvgX.js.map