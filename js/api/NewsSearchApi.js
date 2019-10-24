'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _NewsApiFns = require('./NewsApiFns');

var _NewsApiFns2 = _interopRequireDefault(_NewsApiFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT = 'https://newsapi.org/v2/everything';

var NewsApi = (0, _extends3.default)({
  getRequestUrl: function getRequestUrl(_ref) {
    var _ref$symbol = _ref.symbol,
        symbol = _ref$symbol === undefined ? 'Weather' : _ref$symbol,
        _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === undefined ? 'relevancy' : _ref$sortBy;
    return ROOT + '?q=' + symbol + '&sortBy=' + sortBy;
  }
}, _NewsApiFns2.default);

exports.default = NewsApi;
//# sourceMappingURL=NewsSearchApi.js.map