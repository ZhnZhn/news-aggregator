'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//color: #009ae5 - header_browser

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE, themeName) {
    var _itemColor = themeName === 'WHITE' ? { color: '#5f5f5f' } : undefined;
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      CL_ROW: CSS_RULE.CL_ROW_NEWS_SOURCE,

      BROWSER: (0, _extends3.default)({}, CSS_RULE.BG),
      OPEN_CLOSE: (0, _extends3.default)({}, CSS_RULE.BG),
      BROWSER_CAPTION: (0, _extends3.default)({}, CSS_RULE.BG_HEADER),
      ITEM: (0, _extends3.default)({}, _itemColor),
      BADGE: (0, _extends3.default)({}, CSS_RULE.BG_HEADER)
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=NewsBrowser.Style.js.map