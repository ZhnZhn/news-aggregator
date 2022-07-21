"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ut = _interopRequireDefault(require("../utils/ut"));

var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));

var crId = _ut["default"].crId,
    joinStrsBy = _ut["default"].joinStrsBy,
    toFirstUpperCase = _ut["default"].toFirstUpperCase;
var NEWS_SEARCH = 'newsapi_search';
var NEWS_TOP = 'newsapi_top';

var _fToArticle = function _fToArticle(source) {
  return function (article) {
    article.articleId = crId();
    article.source = source;
    return article;
  };
};

var _fToSearchArticle = function _fToSearchArticle(paneId) {
  return function (article) {
    article.articleId = crId();

    var _ref = article || {},
        source = _ref.source,
        author = _ref.author,
        _ref2 = source || {},
        name = _ref2.name;

    article.source = paneId;
    article.author = joinStrsBy([name, author]);
    return article;
  };
};

var NewsApiAdapter = {
  toArticles: function toArticles(articles, source) {
    if (articles === void 0) {
      articles = [];
    }

    var _toArticle = source === NEWS_SEARCH || source === NEWS_TOP ? _fToSearchArticle(source) : _fToArticle(source);

    return articles.map(function (item) {
      return (0, _sanitizeArticle["default"])(_toArticle(item));
    });
  },
  toNews: function toNews(json, option) {
    var source = option.source,
        articles = json.articles,
        sortBy = json.sortBy;
    return {
      source: source,
      articles: NewsApiAdapter.toArticles(articles, source),
      sortBy: toFirstUpperCase(sortBy)
    };
  }
};
var _default = NewsApiAdapter;
exports["default"] = _default;
//# sourceMappingURL=NewsApiAdapter.js.map