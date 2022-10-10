"use strict";

exports.__esModule = true;
exports.selectFontSize = exports.notAllowSaveToLs = exports.isAllowUseLs = exports.initialTheme = exports.allowSaveToLs = exports.THEME_OPTIONS = exports.FONT_SIZE_OPTIONS = void 0;

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

var DF_BG = '#4d4d4d';
var DF_BT_H = 'rgba(255, 255, 255, 0.1)';
var DF_MSI_C = 'white';
var DF_MSI_FH = 'rgba(48, 48, 48, 0.4)';
var DF_SBT_BG = '#3f5178';
var BT_H_LIGHT = 'rgba(48, 48, 48, 0.3)';
var MSI_C_LIGHT = '#303030';
var MSI_FH_LIGHT = 'rgba(255, 255, 255, 0.4)';
var SBT_BG_LIGHT = '#0096c8';
var P_GREY = {
  BG_BODY: '#5f5f5f',
  BG: DF_BG,
  BT_H: DF_BT_H,
  BG_OPTIONS: '#404040',
  MSI_C: DF_MSI_C,
  MSI_FH: DF_MSI_FH,
  SBT_BG: DF_SBT_BG,
  BG_HEADER: '#3a6799',
  C_HEADER: '#8a8a8a'
};
var P_WHITE = {
  BG_BODY: 'darkgrey',
  BG: '#eaeaea',
  BT_H: BT_H_LIGHT,
  BG_OPTIONS: '#dfe4e7',
  MSI_C: MSI_C_LIGHT,
  MSI_FH: MSI_FH_LIGHT,
  SBT_BG: SBT_BG_LIGHT,
  BG_HEADER: '#0096c8',
  C_HEADER: '#4d4d4d'
};
var P_SAND = {
  BG_BODY: 'darkgrey',
  BG: '#e8e0cb',
  BT_H: BT_H_LIGHT,
  BG_OPTIONS: '#c6bda5',
  MSI_C: MSI_C_LIGHT,
  MSI_FH: MSI_FH_LIGHT,
  SBT_BG: SBT_BG_LIGHT,
  BG_HEADER: '#0096c8',
  C_HEADER: '#4d4d4d'
};
var CSS_RULE = {
  BG: {},
  BG_OPTIONS: {},
  BG_HEADER: {},
  R_DIALOG: {}
};
var _assign = Object.assign;

var _setBodyBg = function _setBodyBg(conf, P) {
  var _style = document.body.style;
  _style.backgroundColor = P.BG_BODY;

  _style.setProperty("--bg-c", P.BG || DF_BG);

  _style.setProperty("--bt-h", P.BT_H || DF_BT_H);

  _style.setProperty("--msi-c", P.MSI_C || DF_MSI_C);

  _style.setProperty("--msi-fh", P.MSI_FH || DF_MSI_FH);

  _style.setProperty("--sbt-bg", P.SBT_BG || DF_SBT_BG);
};

var _crBg = function _crBg(conf, P) {
  _assign(conf.BG, {
    backgroundColor: P.BG
  });
};

var _crBgOption = function _crBgOption(conf, P) {
  _assign(conf.BG_OPTIONS, {
    backgroundColor: P.BG_OPTIONS
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

var _FN_STYLES = [_setBodyBg, _crBg, _crBgOption, _crBgHeader, _crRDialog];

var _setStyleTo = function _setStyleTo(conf, pallete) {
  _FN_STYLES.forEach(function (fn) {
    return fn(conf, pallete);
  });
};

var THEME_CONFIG = (_THEME_CONFIG = {}, _THEME_CONFIG[_propertyThemeName.THEME_NAME.GREY] = P_GREY, _THEME_CONFIG[_propertyThemeName.THEME_NAME.WHITE] = P_WHITE, _THEME_CONFIG[_propertyThemeName.THEME_NAME.SAND] = P_SAND, _THEME_CONFIG);

var _setTheme = function _setTheme(themeName) {
  _setStyleTo(CSS_RULE, THEME_CONFIG[themeName]);

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