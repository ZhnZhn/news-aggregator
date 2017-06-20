'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  DIV_WRAPPER: {
    paddingLeft: '12px',
    paddingRight: '5px',
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
    marginTop: '3px'
  },
  BLACK: {
    color: 'black'
  },
  MARGIN_TOP: {
    marginTop: '8px'
  },
  PROVIDER: {
    color: '#009AE5'
  }
};

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(CSS_RULE) {
    return (0, _extends3.default)({
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      ROOT: (0, _extends3.default)({}, CSS_RULE.BG),
      BROWSER_CAPTION: (0, _extends3.default)({}, CSS_RULE.BG_HEADER)
    }, S);
  }
};

exports.default = styleConfig;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\about\About.Style.js.map