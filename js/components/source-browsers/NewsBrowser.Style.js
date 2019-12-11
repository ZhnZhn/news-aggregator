"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

//color: #009ae5 - header_browser
var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE, themeName) {
    var _itemColor = themeName === 'WHITE' ? {
      color: '#5f5f5f'
    } : undefined;

    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      CL_ROW: CSS_RULE.CL_ROW_NEWS_SOURCE,
      BROWSER: (0, _extends2["default"])({}, CSS_RULE.BG),
      OPEN_CLOSE: (0, _extends2["default"])({}, CSS_RULE.BG),
      BROWSER_CAPTION: (0, _extends2["default"])({}, CSS_RULE.BG_HEADER),
      ITEM: (0, _extends2["default"])({}, _itemColor),
      BADGE: (0, _extends2["default"])({}, CSS_RULE.BG_HEADER)
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=NewsBrowser.Style.js.map