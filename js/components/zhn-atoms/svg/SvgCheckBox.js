"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Svg = _interopRequireDefault(require("./Svg100"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_CHECK_BOX = "chb",
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

var SvgChecked = function SvgChecked(_ref) {
  var stroke = _ref.stroke;
  return (0, _jsxRuntime.jsx)("path", {
    d: "M 2,5 L 8,14 14,1",
    strokeWidth: "2",
    strokeLinecap: "round",
    stroke: stroke,
    fill: COLOR_BLANK
  });
};

var _crRestStyle = function _crRestStyle(stroke, fill) {
  if (fill === void 0) {
    fill = stroke;
  }

  return {
    stroke: stroke,
    fill: fill
  };
};

var SvgCheckBox = function SvgCheckBox(_ref2) {
  var isChecked = _ref2.isChecked,
      style = _ref2.style,
      stroke = _ref2.stroke,
      onClick = _ref2.onClick,
      onKeyDown = _ref2.onKeyDown;

  var _restStyle = isChecked ? _crRestStyle(DF_COLOR_IS) : _crRestStyle(COLOR_GREY, COLOR_BLANK);

  return (0, _jsxRuntime.jsx)("div", {
    role: "checkbox",
    tabIndex: "0",
    "aria-checked": isChecked,
    className: CL_CHECK_BOX,
    style: (0, _extends2["default"])({}, S_DIV, style),
    onClick: onClick,
    onKeyDown: onKeyDown,
    children: (0, _jsxRuntime.jsxs)(_Svg["default"], {
      w: CHECKBOX_WIDTH,
      style: S_SVG,
      children: [(0, _jsxRuntime.jsx)("rect", (0, _extends2["default"])({
        x: "1",
        y: "1",
        height: "14",
        width: "14",
        strokeWidth: "2",
        rx: "3",
        strokeLinecap: "round"
      }, _restStyle)), isChecked ? (0, _jsxRuntime.jsx)(SvgChecked, {
        stroke: stroke
      }) : null]
    })
  });
};

var _default = SvgCheckBox;
exports["default"] = _default;
//# sourceMappingURL=SvgCheckBox.js.map