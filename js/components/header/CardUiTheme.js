"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  ROOT_DIV: {
    paddingTop: 16
  }
};
var THEME_OPTIONS = [{
  caption: 'Grey',
  value: 'GREY'
}, {
  caption: 'White',
  value: 'WHITE'
}, {
  caption: 'Sand',
  value: 'SAND'
}],
    DF_THEME = THEME_OPTIONS[0];
var FONT_SIZE_OPTIONS = [{
  caption: 'Small (15px)',
  value: 15
}, {
  caption: 'Medium (16px)',
  value: 16
}, {
  caption: 'Large (17px)',
  value: 17
}, {
  caption: 'Extra Large (18px)',
  value: 18
}],
    DF_FONT_SIZE = FONT_SIZE_OPTIONS[1];

var CardUiTheme = function CardUiTheme(_ref) {
  var style = _ref.style,
      buttonsStyle = _ref.buttonsStyle,
      TS = _ref.TS,
      onSetTheme = _ref.onSetTheme,
      onSetFontSize = _ref.onSetFontSize,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S.ROOT_DIV, style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      styleConfig: TS.SELECT,
      caption: "UI Theme",
      initItem: DF_THEME,
      options: THEME_OPTIONS,
      onSelect: onSetTheme
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      styleConfig: TS.SELECT,
      caption: "Font Size",
      initItem: DF_FONT_SIZE,
      options: FONT_SIZE_OPTIONS,
      onSelect: onSetFontSize
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: buttonsStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        rootStyle: TS.BT.RAISED_ROOT,
        clDiv: TS.BT.CL_RAISED_DIV,
        isPrimary: true,
        caption: "Close",
        onClick: onClose
      })
    })]
  });
};

var _default = CardUiTheme;
exports["default"] = _default;
//# sourceMappingURL=CardUiTheme.js.map