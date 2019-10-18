'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crId = require('../utils/crId');

var _crId2 = _interopRequireDefault(_crId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = {
  SOURCE: 'iex_news'
}; //import shortid from 'shortid'


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
        _related = related ? related.split(',').join(', ') : void 0;

    return {
      source: C.SOURCE,
      articleId: (0, _crId2.default)(),
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