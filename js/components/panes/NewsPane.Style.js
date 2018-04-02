'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(CSS_RULE, themeName) {
    var _paneRoot = void 0;
    switch (themeName) {
      case 'WHITE':
        _paneRoot = { backgroundColor: 'rgb(235, 241, 245)' };
        break;
      case 'SAND':
        _paneRoot = { backgroundColor: '#e8e0cb' };
        break;
      default:
    }
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      PANE_CAPTION: (0, _extends3.default)({}, CSS_RULE.BG_HEADER),
      PANE_ROOT: (0, _extends3.default)({}, _paneRoot)
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=NewsPane.Style.js.map