"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.selectFontSize = exports.notAllowSaveToLs = exports.isAllowUseLs = exports.initialTheme = exports.allowSaveToLs = exports.THEME_OPTIONS = exports.FONT_SIZE_OPTIONS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _localStorageFn = require("../../utils/localStorageFn");

exports.isAllowUseLs = _localStorageFn.isAllowUseLs;

var _propertyFontSize = require("./propertyFontSize");

exports.FONT_SIZE_OPTIONS = _propertyFontSize.FONT_SIZE_OPTIONS;
exports.selectFontSize = _propertyFontSize.selectFontSize;

var _propertyThemeName = require("./propertyThemeName");

exports.THEME_NAME = _propertyThemeName.THEME_NAME;
exports.THEME_OPTIONS = _propertyThemeName.THEME_OPTIONS;

var _LS = require("./LS");

var _THEME_CONFIG;

var _crRgba = function _crRgba(v, a) {
  return "rgba(" + v + ", " + v + ", " + v + ", " + a + ")";
};

var GREY_BG_HEADER = '#3a6799';
var GREY_C_HEADER = '#a9a9a9';
var P_GREY = {
  BG_BODY: '#5f5f5f',
  BG: '#4d4d4d',
  BT_H: _crRgba(255, 0.1),
  BT_FC: '#6ca1dc',
  BT_RC: GREY_C_HEADER,
  BG_OPTIONS: '#404040',
  MSI_C: '#f8f8ff',
  MSI_FH: _crRgba(48, 0.4),
  SBT_BG: GREY_BG_HEADER,
  BG_HEADER: GREY_BG_HEADER,
  C_HEADER: GREY_C_HEADER
};
var BG_HEADER_LIGHT = '#0096c8';
var _P_LIGHT = {
  BT_H: _crRgba(48, 0.3),
  MSI_C: '#303030',
  MSI_FH: _crRgba(255, 0.4),
  SBT_BG: '#0096c8',
  BG_HEADER: BG_HEADER_LIGHT,
  BT_FC: BG_HEADER_LIGHT,
  C_HEADER: '#4d4d4d'
};
var WHITE_BG = '#eaeaea';
var P_WHITE = (0, _extends2["default"])({}, _P_LIGHT, {
  BG_BODY: 'darkgrey',
  BG: WHITE_BG,
  BG_OPTIONS: '#dfe4e7',
  BT_RC: WHITE_BG
});
var SAND_BG = '#e8e0cb';
var P_SAND = (0, _extends2["default"])({}, _P_LIGHT, {
  BG_BODY: 'darkgrey',
  BG: SAND_BG,
  BG_OPTIONS: '#c6bda5',
  BT_RC: SAND_BG
});
var CSS_RULE = {
  BG: {},
  BG_HEADER: {},
  R_DIALOG: {}
};
var THEME_CONFIG = (_THEME_CONFIG = {}, _THEME_CONFIG[_propertyThemeName.THEME_NAME.GREY] = P_GREY, _THEME_CONFIG[_propertyThemeName.THEME_NAME.WHITE] = P_WHITE, _THEME_CONFIG[_propertyThemeName.THEME_NAME.SAND] = P_SAND, _THEME_CONFIG);
var _assign = Object.assign;

var _setBodyBg = function _setBodyBg(conf, P) {
  var _style = document.body.style;
  _style.backgroundColor = P.BG_BODY;

  _style.setProperty("--bg-c", P.BG);

  _style.setProperty("--bt-h", P.BT_H);

  _style.setProperty("--bt-fc", P.BT_FC);

  _style.setProperty("--bt-rc", P.BT_RC);

  _style.setProperty("--h-c", P.C_HEADER);

  _style.setProperty("--mso-bg", P.BG_OPTIONS);

  _style.setProperty("--msi-c", P.MSI_C);

  _style.setProperty("--msi-fh", P.MSI_FH);

  _style.setProperty("--sbt-bg", P.SBT_BG);
};

var _crBg = function _crBg(conf, P) {
  _assign(conf.BG, {
    backgroundColor: P.BG
  });
};

var _crBgHeader = function _crBgHeader(conf, P) {
  _assign(conf.BG_HEADER, {
    color: P.C_HEADER,
    backgroundColor: P.BG_HEADER
  });
};

var _crRDialog = function _crRDialog(conf, P) {
  _assign(conf.R_DIALOG, {
    backgroundColor: P.BG,
    border: "solid 2px " + P.BG_HEADER
  });
};

var _FN_STYLES = [_setBodyBg, _crBg, _crBgHeader, _crRDialog];

var _setStyleTo = function _setStyleTo(conf, themeName) {
  var _pallete = THEME_CONFIG[themeName];

  _FN_STYLES.forEach(function (fn) {
    return fn(conf, _pallete);
  });
};

var _setTheme = function _setTheme(themeName) {
  _setStyleTo(CSS_RULE, themeName);

  (0, _localStorageFn.writeToLs)(_LS.LS_UI_THEME_KEY, themeName);
};

var theme = {
  themeName: _propertyThemeName.THEME_NAME.DF,
  _init: function _init() {
    this.setThemeName((0, _propertyThemeName.crInitialThemeName)());
    (0, _propertyFontSize.initFontSize)();
    (0, _localStorageFn.initAllowUseLs)(!!(0, _localStorageFn.readFromLs)(_LS.LS_IS)[0]);
  },
  getThemeName: function getThemeName() {
    return this.themeName;
  },
  setThemeName: function setThemeName(themeName) {
    this.themeName = _propertyThemeName.THEME_NAME[themeName] || _propertyThemeName.THEME_NAME.DF;

    _setTheme(this.themeName);
  },
  createStyle: function createStyle(config) {
    if (this.themeName !== config.themeName) {
      config.style = config.createStyle(CSS_RULE, this.themeName);
      config.themeName = this.themeName;
    }

    return config.style;
  }
};

theme._init();

var allowSaveToLs = function allowSaveToLs() {
  (0, _localStorageFn.allowUseLs)();
  (0, _localStorageFn.writeToLs)(_LS.LS_IS, "1");
  (0, _localStorageFn.writeToLs)(_LS.LS_UI_THEME_KEY, theme.themeName);
  (0, _localStorageFn.writeToLs)(_LS.LS_FONT_SIZE_KEY, (0, _propertyFontSize.getFontSize)());
};

exports.allowSaveToLs = allowSaveToLs;

var notAllowSaveToLs = function notAllowSaveToLs() {
  (0, _localStorageFn.notAllowUseLs)();
  (0, _localStorageFn.clearLs)();
};

exports.notAllowSaveToLs = notAllowSaveToLs;
var initialTheme = theme;
exports.initialTheme = initialTheme;
//# sourceMappingURL=theme.js.map