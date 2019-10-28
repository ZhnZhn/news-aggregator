'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ut = require('../utils/ut');

var _ut2 = _interopRequireDefault(_ut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crId = _ut2.default.crId,
    joinStrsBy = _ut2.default.joinStrsBy,
    toFirstUpperCase = _ut2.default.toFirstUpperCase;


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
  toArticles: function toArticles() {
    var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var source = arguments[1];

    var _toArticle = source === NEWS_SEARCH || source === NEWS_TOP ? _fToSearchArticle(source) : _fToArticle(source);
    return articles.map(_toArticle);
  },

  toNews: function toNews(json, option) {
    var source = option.source,
        articles = json.articles,
        sortBy = json.sortBy,
        _sortBy = toFirstUpperCase(sortBy),
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