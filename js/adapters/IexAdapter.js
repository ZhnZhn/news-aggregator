'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = {
  SOURCE: 'iex_news'
};

var _toArticles = function _toArticles(json) {
  if (!Array.isArray(json)) {
    return [];
  }

  var articles = json.map(function (item) {
    var headline = item.headline,
        source = item.source,
        datetime = item.datetime,
        summary = item.summary,
        related = item.related,
        url = item.url,
        _related = related ? related.split(',').join(', ') : undefined;

    return {
      source: C.SOURCE,
      articleId: _shortid2.default.generate(),
      title: headline,
      description: summary,
      related: _related,
      author: source,
      publishedAt: datetime,
      url: url
    };
  });
  return articles;
};

var IexAdapter = {
  toNews: function toNews(json, option) {
    var symbol = option.symbol,
        _option$recent = option.recent,
        recent = _option$recent === undefined ? '' : _option$recent,
        articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: symbol.toUpperCase() + ' ' + recent
    };
  }
};

exports.default = IexAdapter;
//# sourceMappingURL=IexAdapter.js.map