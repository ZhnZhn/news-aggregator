"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useTooltip = _interopRequireDefault(require("../hooks/useTooltip"));
var _Svg = _interopRequireDefault(require("./svg/Svg"));
var _DP = require("../DP");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_MORE = 'bt-more',
  S_SVG = {
    fill: 'black',
    stroke: 'black'
  };
const Circle = _ref => {
  let {
    cy
  } = _ref;
  return (0, _jsxRuntime.jsx)("circle", {
    cx: "3",
    cy: cy,
    r: "2.5"
  });
};
const SvgMore = _ref2 => {
  let {
    style,
    svgStyle,
    btRef,
    onClick
  } = _ref2;
  const [_ariaLabel, _dataPos] = (0, _useTooltip.default)("More", _DP.DP_MIDDLE_LEFT);
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    ref: btRef,
    className: CL_BT_MORE,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)(_Svg.default, {
      width: "6",
      height: "24",
      style: {
        ...S_SVG,
        ...svgStyle
      },
      children: [(0, _jsxRuntime.jsx)(Circle, {
        cy: "4"
      }), (0, _jsxRuntime.jsx)(Circle, {
        cy: "12"
      }), (0, _jsxRuntime.jsx)(Circle, {
        cy: "19"
      })]
    })
  });
};
var _default = exports.default = SvgMore;
//# sourceMappingURL=SvgMore.js.map