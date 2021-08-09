"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var S = {
  SCROLL_DIV: {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  },
  DIV_WRAPPER: {
    color: 'gray',
    paddingLeft: 12,
    paddingRight: 5,
    lineHeight: 1.4,
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
  BLACK: {
    color: 'black'
  },
  MT_8: {
    marginTop: 8
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