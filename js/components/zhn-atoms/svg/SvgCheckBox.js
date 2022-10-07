"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useToggle2 = _interopRequireDefault(require("../../hooks/useToggle"));

var _isKeyEnter = _interopRequireDefault(require("../../hooks/isKeyEnter"));

var _Svg = _interopRequireDefault(require("./Svg100"));

var _jsxRuntime = require("preact/jsx-runtime");

var COLOR_BLANK = "rgba(0,0,0,0)",
    COLOR_GREY = "#777777",
    DF_COLOR_IS = "#2f7ed8",
    CHECKBOX_WIDTH = 16,
    S_DIV = {
  display: 'inline-block',
  width: CHECKBOX_WIDTH,
  height: CHECKBOX_WIDTH,
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

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
},
    _crRestStyle = function _crRestStyle(stroke, fill) {
  if (fill === void 0) {
    fill = stroke;
  }

  return {
    stroke: stroke,
    fill: fill
  };
};

var SvgCheckBox = function SvgCheckBox(_ref2) {
  var initialValue = _ref2.initialValue,
      style = _ref2.style,
      stroke = _ref2.stroke,
      onCheck = _ref2.onCheck,
      onUnCheck = _ref2.onUnCheck;

  var _useToggle = (0, _useToggle2["default"])(initialValue),
      isChecked = _useToggle[0],
      toggleIsChecked = _useToggle[1],
      _hClick = function _hClick() {
    if (!isChecked && _isFn(onCheck)) {
      onCheck();
    } else if (_isFn(onUnCheck)) {
      onUnCheck();
    }

    toggleIsChecked();
  },
      _hKeyDown = function _hKeyDown(evt) {
    if ((0, _isKeyEnter["default"])(evt)) {
      evt.preventDefault();

      _hClick();
    }
  },
      _restStyle = isChecked ? _crRestStyle(DF_COLOR_IS) : _crRestStyle(COLOR_GREY, COLOR_BLANK);

  return (0, _jsxRuntime.jsx)("div", {
    role: "checkbox",
    tabIndex: "0",
    "aria-checked": isChecked,
    style: (0, _extends2["default"])({}, S_DIV, style),
    onClick: _hClick,
    onKeyDown: _hKeyDown,
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