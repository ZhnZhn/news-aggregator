"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiTheme = require("../styles/uiTheme");
var _Comp = _interopRequireDefault(require("../Comp"));
var _RowCheckBox = _interopRequireDefault(require("../dialogs/RowCheckBox"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROW_CHECKBOX_LS = {
    margin: '12px 0 34px 16px'
  },
  IS_ALLOW_USE_LS = (0, _uiTheme.isAllowUseLs)();
const CardUiTheme = _ref => {
  let {
    style,
    selectStyle,
    buttonsStyle,
    btStyle,
    onClose,
    isVisible,
    setRefLast
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_Comp.default.InputSelect, {
      style: selectStyle,
      caption: "UI Theme",
      initItem: _uiTheme.THEME_OPTIONS.DF,
      options: _uiTheme.THEME_OPTIONS,
      onSelect: _uiTheme.setUiTheme
    }), (0, _jsxRuntime.jsx)(_Comp.default.InputSelect, {
      style: selectStyle,
      caption: "Font Size",
      initItem: _uiTheme.FONT_SIZE_OPTIONS.DF,
      options: _uiTheme.FONT_SIZE_OPTIONS,
      onSelect: _uiTheme.selectFontSize
    }), (0, _jsxRuntime.jsx)(_RowCheckBox.default, {
      style: S_ROW_CHECKBOX_LS,
      initialValue: IS_ALLOW_USE_LS,
      caption: "Allow use localStorage",
      onCheck: _uiTheme.allowSaveToLs,
      onUnCheck: _uiTheme.notAllowSaveToLs
    }), (0, _jsxRuntime.jsx)("div", {
      style: buttonsStyle,
      children: (0, _jsxRuntime.jsx)(_Comp.default.RaisedButton, {
        refBt: isVisible ? setRefLast : void 0,
        style: btStyle,
        isPrimary: true,
        caption: "Close",
        onClick: onClose
      })
    })]
  });
};
var _default = exports.default = CardUiTheme;
//# sourceMappingURL=CardUiTheme.js.map