"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _theme = require("../styles/theme");
var _Comp = _interopRequireDefault(require("../Comp"));
var _RowCheckBox = _interopRequireDefault(require("../dialogs/RowCheckBox"));
var _jsxRuntime = require("preact/jsx-runtime");
var S_DIV = {
    paddingTop: 16
  },
  S_ROW_CHECKBOX_LS = {
    margin: '34px 0 34px 16px'
  },
  IS_ALLOW_USE_LS = (0, _theme.isAllowUseLs)();
var CardUiTheme = function CardUiTheme(_ref) {
  var style = _ref.style,
    buttonsStyle = _ref.buttonsStyle,
    TS = _ref.TS,
    onSetTheme = _ref.onSetTheme,
    onClose = _ref.onClose;
  return (0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_DIV, style),
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      styleConfig: TS.SELECT,
      caption: "UI Theme",
      initItem: _theme.THEME_OPTIONS.DF,
      options: _theme.THEME_OPTIONS,
      onSelect: onSetTheme
    }), (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      styleConfig: TS.SELECT,
      caption: "Font Size",
      initItem: _theme.FONT_SIZE_OPTIONS.DF,
      options: _theme.FONT_SIZE_OPTIONS,
      onSelect: _theme.selectFontSize
    }), (0, _jsxRuntime.jsx)(_RowCheckBox["default"], {
      style: S_ROW_CHECKBOX_LS,
      initialValue: IS_ALLOW_USE_LS,
      stroke: TS.R_DIALOG.backgroundColor,
      caption: "Allow to save to localStorage",
      onCheck: _theme.allowSaveToLs,
      onUnCheck: _theme.notAllowSaveToLs
    }), (0, _jsxRuntime.jsx)("div", {
      style: buttonsStyle,
      children: (0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
        style: TS.BT.RAISED,
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