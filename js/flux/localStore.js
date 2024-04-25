"use strict";

exports.__esModule = true;
exports.notAllowSaveToLs = exports.isAllowUseLs = exports.allowSaveToLs = void 0;
var _localStorageFn = require("../utils/localStorageFn");
exports.isAllowUseLs = _localStorageFn.isAllowUseLs;
var _uiTheme = require("../components/styles/uiTheme");
var _uiStore = require("./uiStore");
var _LS = require("./LS");
const allowSaveToLs = () => {
  (0, _localStorageFn.allowUseLs)();
  (0, _localStorageFn.writeToLs)(_LS.LS_IS, true);
  (0, _localStorageFn.writeToLs)(_LS.LS_UI_THEME_KEY, (0, _uiTheme.getThemeName)());
  (0, _localStorageFn.writeToLs)(_LS.LS_FONT_SIZE_KEY, (0, _uiTheme.getFontSize)());
  (0, _localStorageFn.writeToLs)(_LS.LS_IS_ADVANCED_INPUT_OPTIONS, (0, _uiStore.isAdvancedInputOptions)());
};
exports.allowSaveToLs = allowSaveToLs;
const notAllowSaveToLs = exports.notAllowSaveToLs = _localStorageFn.notAllowUseLs;
//# sourceMappingURL=localStore.js.map