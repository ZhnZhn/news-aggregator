"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("./Svg100"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_CHECK_BOX = "chb",
  COLOR_BLANK = "rgba(0,0,0,0)",
  COLOR_GREY = "#777777",
  DF_COLOR_IS = "#2f7ed8",
  CHECKBOX_WIDTH = 16,
  S_DIV = {
    display: 'inline-block',
    cursor: 'pointer'
  },
  S_SVG = {
    display: 'inline-block'
  };
const SvgChecked = () => (0, _jsxRuntime.jsx)("path", {
  d: "M 2,5 L 8,14 14,1",
  strokeWidth: "2",
  strokeLinecap: "round",
  fill: COLOR_BLANK
});
const _crRestStyle = function (stroke, fill) {
  if (fill === void 0) {
    fill = stroke;
  }
  return {
    stroke,
    fill
  };
};
const SvgCheckBox = _ref => {
  let {
    refChb,
    isChecked,
    style,
    onClick,
    onKeyDown
  } = _ref;
  const _restStyle = isChecked ? _crRestStyle(DF_COLOR_IS) : _crRestStyle(COLOR_GREY, COLOR_BLANK);
  return (0, _jsxRuntime.jsx)("div", {
    ref: refChb,
    role: "checkbox",
    tabIndex: "0",
    "aria-checked": isChecked,
    className: CL_CHECK_BOX,
    style: {
      ...S_DIV,
      ...style
    },
    onClick: onClick,
    onKeyDown: onKeyDown,
    children: (0, _jsxRuntime.jsxs)(_Svg.default, {
      w: CHECKBOX_WIDTH,
      style: S_SVG,
      children: [(0, _jsxRuntime.jsx)("rect", {
        x: "1",
        y: "1",
        height: "14",
        width: "14",
        strokeWidth: "2",
        rx: "3",
        strokeLinecap: "round",
        ..._restStyle
      }), isChecked ? (0, _jsxRuntime.jsx)(SvgChecked, {}) : null]
    })
  });
};
var _default = exports.default = SvgCheckBox;
//# sourceMappingURL=SvgCheckBox.js.map