"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S = {
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  DIV_WRAPPER: {
    paddingLeft: 12,
    paddingRight: 5,
    lineHeight: 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  DIV_TEXT: {
    lineHeight: 1.8
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  APP_TITLE: {
    color: '#80c040'
  },
  STEP: {
    marginTop: 3
  },
  BLACK: {
    color: 'black'
  },
  MARGIN_TOP: {
    marginTop: 8
  },
  PROVIDER: {
    color: '#009ae5'
  }
};
var styleConfig = {
  //themeName : void 0,
  //style : void 0,
  createStyle: function createStyle(CSS_RULE) {
    return (0, _extends2["default"])({
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      ROOT: (0, _extends2["default"])({}, CSS_RULE.BG),
      BROWSER_CAPTION: (0, _extends2["default"])({}, CSS_RULE.BG_HEADER)
    }, S);
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=About.Style.js.map