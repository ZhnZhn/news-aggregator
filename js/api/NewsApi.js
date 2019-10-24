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
  TOP: 'top',
  TOPIC_TOP: 'top-headlines',
  TOPIC_EVERYTHING: 'everything'
}; //const ROOT_V1 = 'https://newsapi.org/v1/articles';
//const DF_SOURCE = 'bbc-sport';
//const DF_SORT_BY = 'top';
// `${ROOT_V1}?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`;

var _crUrl2 = function _crUrl2(_ref) {
  var source = _ref.source,
      sortBy = _ref.sortBy;

  var _topic = sortBy === C.TOP ? C.TOPIC_TOP + '?' : C.TOPIC_EVERYTHING + '?sortBy=' + sortBy + '&language=en&';
  return '' + C.ROOT_V2 + _topic + 'sources=' + source;
};

var NewsApi = (0, _extends3.default)({
  getRequestUrl: function getRequestUrl(option) {
    return _crUrl2(option);
  }
}, _NewsApiFns2.default);

exports.default = NewsApi;
//# sourceMappingURL=NewsApi.js.map