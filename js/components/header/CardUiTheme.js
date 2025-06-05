"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiTheme = require("../styles/uiTheme");
var _localStore = require("../../flux/localStore");
var _uiStore = require("../../flux/uiStore");
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _RowCheckBox = _interopRequireDefault(require("../dialogs/RowCheckBox"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROW_CHECKBOX_LS = {
    margin: '12px 0 12px 16px'
  },
  S_VERTICAL_GAP_22 = {
    height: 22
  },
  IS_ALLOW_USE_LS = (0, _localStore.isAllowUseLs)(),
  IS_ADVANCED_INPUT_OPTIONS = (0, _uiStore.isAdvancedInputOptions)();
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
    children: [(0, _jsxRuntime.jsx)(_InputSelect.default, {
      style: selectStyle,
      caption: "UI Theme",
      initItem: _uiTheme.THEME_OPTIONS.DF,
      options: _uiTheme.THEME_OPTIONS,
      onSelect: _uiTheme.setUiTheme
    }), (0, _jsxRuntime.jsx)(_InputSelect.default, {
      style: selectStyle,
      caption: "Font Size",
      initItem: _uiTheme.FONT_SIZE_OPTIONS.DF,
      options: _uiTheme.FONT_SIZE_OPTIONS,
      onSelect: _uiTheme.selectFontSize
    }), (0, _jsxRuntime.jsx)(_RowCheckBox.default, {
      style: S_ROW_CHECKBOX_LS,
      initialValue: IS_ALLOW_USE_LS,
      caption: "Allow use localStorage",
      onCheck: _localStore.allowSaveToLs,
      onUnCheck: _localStore.notAllowSaveToLs
    }), (0, _jsxRuntime.jsx)(_RowCheckBox.default, {
      style: S_ROW_CHECKBOX_LS,
      initialValue: IS_ADVANCED_INPUT_OPTIONS,
      caption: "Advanced input options",
      onCheck: _uiStore.enableAdvancedInputOptions,
      onUnCheck: _uiStore.disableAndvancedInputOptions
    }), (0, _jsxRuntime.jsx)("div", {
      style: S_VERTICAL_GAP_22
    }), (0, _jsxRuntime.jsx)("div", {
      style: buttonsStyle,
      children: (0, _jsxRuntime.jsx)(_RaisedButton.default, {
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