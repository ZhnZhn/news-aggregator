'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//230, 236, 240

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(CSS_RULE, themeName) {
    var _header = void 0,
        _descr = void 0;
    switch (themeName) {
      case 'WHITE':
        _header = {
          backgroundColor: 'rgb(230, 236, 240)'
        };
        _descr = {
          backgroundColor: 'white'
        };
        break;
      default:
        _header = {
          backgroundColor: '#404040'
        };
    }
    return {
      HEADER: (0, _extends3.default)({}, _header),
      DESCR: (0, _extends3.default)({}, _descr)
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\items\Article.Style.js.map