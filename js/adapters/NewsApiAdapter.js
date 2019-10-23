'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crId = require('../utils/crId');

var _crId2 = _interopRequireDefault(_crId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NEWS_SEARCH = 'newsapi_search';

var _toFirstUpper = function _toFirstUpper(str) {
  return typeof str !== 'string' ? '' : str.charAt(0).toUpperCase() + str.slice(1);
};

var _fToArticle = function _fToArticle(source) {
  return function (article) {
    article.articleId = (0, _crId2.default)();
    article.source = source;
    return article;
  };
};
var _toSearchArticle = function _toSearchArticle(article) {
  article.articleId = (0, _crId2.default)();

  var _ref = article || {},
      source = _ref.source,
      _ref2 = source || {},
      name = _ref2.name,
      _source = name ? name + ', ' : '';

  article.source = NEWS_SEARCH;
  article.author = '' + _source + article.author;
  return article;
};

var NewsApiAdapter = {
  toArticles: function toArticles() {
    var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var source = arguments[1];

    var _toArticle = source === NEWS_SEARCH ? _toSearchArticle : _fToArticle(source);
    return articles.map(_toArticle);
  },

  toNews: function toNews(json, option) {
    var source = option.source,
        _json$articles = json.articles,
        articles = _json$articles === undefined ? [] : _json$articles,
        _json$sortBy = json.sortBy,
        sortBy = _json$sortBy === undefined ? '' : _json$sortBy,
        _sortBy = _toFirstUpper(sortBy),
        _articles = NewsApiAdapter.toArticles(articles, source);

    return {
      source: source,
      articles: _articles,
      sortBy: _sortBy
    };
  }
};

exports.default = NewsApiAdapter;
//# sourceMappingURL=NewsApiAdapter.js.map