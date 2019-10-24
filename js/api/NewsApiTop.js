'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _NewsApiFns = require('./NewsApiFns');

var _NewsApiFns2 = _interopRequireDefault(_NewsApiFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = {
  ROOT_V2: 'https://newsapi.org/v2/',
  TOPIC_TOP: 'top-headlines'
};

var NewsApiTop = (0, _extends3.default)({
  getRequestUrl: function getRequestUrl(option) {
    var category = option.category,
        country = option.country;

    return '' + C.ROOT_V2 + C.TOPIC_TOP + '?category=' + category + '&country=' + country;
  }
}, _NewsApiFns2.default);

exports.default = NewsApiTop;
//# sourceMappingURL=NewsApiTop.js.map