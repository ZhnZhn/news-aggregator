"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.styleConfig = exports.S_SCROLL_DIV = exports.S_NONE = exports.S_MT_8 = exports.S_LH_18 = exports.S_LH_14 = exports.S_DIV_WRAPPER = exports.S_BROWSER_CAPTION = exports.S_BLOCK = exports.S_BLACK = exports.S_APP_TITLE = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S_BROWSER_CAPTION = {
  paddingTop: 5,
  paddingLeft: 10
};
exports.S_BROWSER_CAPTION = S_BROWSER_CAPTION;
var S_SCROLL_DIV = {
  height: '92%',
  paddingTop: 8,
  paddingRight: 10,
  overflowY: 'auto'
};
exports.S_SCROLL_DIV = S_SCROLL_DIV;
var S_DIV_WRAPPER = {
  color: 'gray',
  paddingLeft: 12,
  paddingRight: 5,
  lineHeight: 1.4,
  fontWeight: 'bold'
};
exports.S_DIV_WRAPPER = S_DIV_WRAPPER;
var S_LH_14 = {
  lineHeight: 1.4
};
exports.S_LH_14 = S_LH_14;
var S_LH_18 = {
  lineHeight: 1.8
};
exports.S_LH_18 = S_LH_18;
var S_BLOCK = {
  display: 'block'
};
exports.S_BLOCK = S_BLOCK;
var S_NONE = {
  display: 'none'
};
exports.S_NONE = S_NONE;
var S_APP_TITLE = {
  color: '#80c040'
};
exports.S_APP_TITLE = S_APP_TITLE;
var S_BLACK = {
  color: 'black'
};
exports.S_BLACK = S_BLACK;
var S_MT_8 = {
  marginTop: 8
};
exports.S_MT_8 = S_MT_8;
var styleConfig = {
  //themeName : void 0,
  //style : void 0,
  createStyle: function createStyle(CSS_RULE) {
    return {
      ROOT: (0, _extends2["default"])({}, CSS_RULE.BG),
      BROWSER_CAPTION: (0, _extends2["default"])({}, CSS_RULE.BG_HEADER)
    };
  }
};
exports.styleConfig = styleConfig;
//# sourceMappingURL=About.Style.js.map