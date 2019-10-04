'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crId = require('../utils/crId');

var _crId2 = _interopRequireDefault(_crId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _toFirstUpper = function _toFirstUpper(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var NewsApiAdapter = {
  toArticles: function toArticles() {
    var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var source = arguments[1];

    return articles.map(function (article) {
      article.articleId = (0, _crId2.default)();
      article.source = source;
      return article;
    });
  },

  toNews: function toNews(json, option) {
    var source = option.source,
        _json$articles = json.articles,
        articles = _json$articles === undefined ? [] : _json$articles,
        _json$sortBy = json.sortBy,
        sortBy = _json$sortBy === undefined ? '' : _json$sortBy;


    var _sortBy = _toFirstUpper(sortBy),
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