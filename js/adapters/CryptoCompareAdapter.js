'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crId = require('../utils/crId');

var _crId2 = _interopRequireDefault(_crId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = {
  SOURCE: 'cryptocompare_news'
};

var _toArticles = function _toArticles(json) {
  if (!json || !Array.isArray(json.Data)) {
    return [];
  }
  return json.Data.map(function (item) {
    var title = item.title,
        body = item.body,
        categories = item.categories,
        url = item.url,
        source = item.source,
        _item$source_info = item.source_info,
        source_info = _item$source_info === undefined ? {} : _item$source_info,
        published_on = item.published_on,
        _author = source_info.name || source,
        _publishedAt = new Date(published_on * 1000).toISOString();

    return {
      source: C.SOURCE,
      articleId: (0, _crId2.default)(),
      title: title,
      description: body,
      related: categories,
      author: _author,
      publishedAt: _publishedAt,
      url: url
    };
  });
};

var CryptoCompareAdapter = {
  toNews: function toNews(json, option) {
    var sortOrder = option.sortOrder,
        articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: sortOrder
    };
  }
};

exports.default = CryptoCompareAdapter;
//# sourceMappingURL=CryptoCompareAdapter.js.map