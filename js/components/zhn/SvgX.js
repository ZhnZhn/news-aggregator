"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useTooltip = _interopRequireDefault(require("../hooks/useTooltip"));
var _DP = require("../DP");
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_SVG_X = "bt-svg-x",
  S_SVG = {
    padding: 3,
    stroke: 'inherit'
  };
const SvgX = _ref => {
  let {
    dataPos,
    className = CL_BT_SVG_X,
    style,
    onClick
  } = _ref;
  const [_ariaLabel, _dataPos] = (0, _useTooltip.default)("Close", dataPos || _DP.DP_CLOSE_LEFT);
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    tabIndex: "-1",
    className: className,
    style: style,
    onClick: onClick,
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
};
var _default = exports.default = SvgX;
//# sourceMappingURL=SvgX.js.map