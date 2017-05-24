'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewsApi = require('../../api/NewsApi');

var _NewsApi2 = _interopRequireDefault(_NewsApi);

var _fn = require('../../utils/fn');

var _fn2 = _interopRequireDefault(_fn);

var _NewsApiAdapter = require('../../adapters/NewsApiAdapter');

var _NewsApiAdapter2 = _interopRequireDefault(_NewsApiAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnCatch = function _fnCatch(_ref) {
  var error = _ref.error,
      onFailed = _ref.onFailed;

  onFailed(error);
};

var _fnFetch = function _fnFetch(_ref2) {
  var json = _ref2.json,
      option = _ref2.option,
      onCompleted = _ref2.onCompleted;

  var news = _NewsApiAdapter2.default.toNews(json, option);
  var itemConf = option.itemConf;
  onCompleted({ news: news, itemConf: itemConf });
};

var loadNews = function loadNews(option, onCompleted, onFailed) {
  (0, _fn2.default)({
    uri: _NewsApi2.default.getRequestUrl(option),
    option: option,
    onCheckResponse: _NewsApi2.default.checkResponse,
    onFetch: _fnFetch,
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  });
};

exports.default = loadNews;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\logic\loadNews.js.map