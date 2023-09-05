"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _joinStrsBy = _interopRequireDefault(require("../utils/joinStrsBy"));
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const NEWS_SEARCH = 'newsapi_search';
const NEWS_TOP = 'newsapi_top';
const _fToArticle = source => article => {
  article.articleId = (0, _utils.crId)();
  article.source = source;
  return article;
};
const _fToSearchArticle = paneId => article => {
  article.articleId = (0, _utils.crId)();
  const {
      source,
      author
    } = article || {},
    {
      name
    } = source || {};
  article.source = paneId;
  article.author = (0, _joinStrsBy.default)([name, author]);
  return article;
};
const NewsApiAdapter = {
  toArticles: function (articles, source) {
    if (articles === void 0) {
      articles = [];
    }
    const _toArticle = source === NEWS_SEARCH || source === NEWS_TOP ? _fToSearchArticle(source) : _fToArticle(source);
    return articles.map(item => (0, _sanitizeArticle.default)(_toArticle(item)));
  },
  toNews: (json, option) => {
    const {
        source
      } = option,
      {
        articles,
        sortBy
      } = json;
    return {
      source,
      articles: NewsApiAdapter.toArticles(articles, source),
      sortBy: (0, _utils.toFirstUpperCase)(sortBy)
    };
  }
};
var _default = NewsApiAdapter;
exports.default = _default;
//# sourceMappingURL=NewsApiAdapter.js.map