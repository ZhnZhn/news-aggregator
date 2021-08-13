"use strict";

exports.__esModule = true;
exports["default"] = exports.THEME_NAME = void 0;

var _THEME_CONFIG;

var P_GREY = {
  BG_BODY: '#5f5f5f',
  BG: '#4d4d4d',
  BG_OPTIONS: '#404040',
  BG_HEADER: '#3a6799',
  C_HEADER: '#8a8a8a'
};
var P_WHITE = {
  BG_BODY: 'darkgrey',
  BG: '#ebf1f5',
  BG_OPTIONS: '#dfe4e7',
  BG_HEADER: '#0096c8',
  C_HEADER: '#4d4d4d'
};
var P_SAND = {
  BG_BODY: 'darkgrey',
  BG: '#e8e0cb',
  BG_OPTIONS: '#c6bda5',
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
  document.body.style.backgroundColor = P.BG_BODY;
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

var THEME_NAME = {
  DEFAULT: 'GREY',
  GREY: 'GREY',
  WHITE: 'WHITE',
  SAND: 'SAND'
};
exports.THEME_NAME = THEME_NAME;
var THEME_CONFIG = (_THEME_CONFIG = {}, _THEME_CONFIG[THEME_NAME.GREY] = {
  pallete: P_GREY,
  clSuffix: ''
}, _THEME_CONFIG[THEME_NAME.WHITE] = {
  pallete: P_WHITE,
  clSuffix: '--white'
}, _THEME_CONFIG[THEME_NAME.SAND] = {
  pallete: P_SAND,
  clSuffix: '--sand'
}, _THEME_CONFIG);
var CL_PROPS = {
  CL_SCROLL_PANE: 'with-scroll',
  //CL_QUERY_ITEM: 'row__topic',
  CL_BT_RAISED_DIV: 'bt-raise__div',
  CL_BT_FLAT_DIV: 'bt-flat__div',
  CL_SELECT_ITEM: 'm-select__item',
  CL_ROW_NEWS_SOURCE: 'row__news-source'
};

var _setClassNameTo = function _setClassNameTo(suffix) {
  if (suffix === void 0) {
    suffix = '';
  }

  Object.keys(CL_PROPS).forEach(function (key) {
    CSS_RULE[key] = CL_PROPS[key] + suffix;
  });
};

var _setTheme = function _setTheme(themeName) {
  var config = THEME_CONFIG[themeName];
  var clSuffix = config.clSuffix,
      pallete = config.pallete;

  _setClassNameTo(clSuffix);

  _setStyleTo(CSS_RULE, pallete);
};

var theme = {
  themeName: THEME_NAME.DEFAULT,
  _init: function _init() {
    this.setThemeName(THEME_NAME.DEFAULT);
  },
  getThemeName: function getThemeName() {
    return this.themeName;
  },
  setThemeName: function setThemeName(themeName) {
    this.themeName = THEME_NAME[themeName] || THEME_NAME.DEFAULT;

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

var _default = theme;
exports["default"] = _default;
//# sourceMappingURL=theme.js.map