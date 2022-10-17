"use strict";

exports.__esModule = true;
exports.removeUnderNews = exports.removeNews = exports.removeAllNews = exports.loadNewsCompleted = void 0;

var loadNewsCompleted = function loadNewsCompleted(slice, news) {
  var source = news.source,
      _news$articles = news.articles,
      articles = _news$articles === void 0 ? [] : _news$articles,
      sortBy = news.sortBy,
      caption = news.caption;
  slice[source] = slice[source] ? articles.concat(slice[source]) : articles;
  return {
    id: source,
    data: slice[source],
    sortBy: sortBy,
    caption: caption
  };
};

exports.loadNewsCompleted = loadNewsCompleted;

var removeAllNews = function removeAllNews(slice, paneId) {
  slice[paneId] = [];
  return {
    id: paneId,
    data: slice[paneId],
    sortBy: ''
  };
};

exports.removeAllNews = removeAllNews;

var removeNews = function removeNews(slice, item) {
  var id = item.id,
      source = item.source;
  slice[source] = slice[source].filter(function (article) {
    return article.articleId !== id;
  });
};

exports.removeNews = removeNews;

var removeUnderNews = function removeUnderNews(slice, item) {
  var articleId = item.articleId,
      source = item.source;

  var _underIndex = slice[source].findIndex(function (article) {
    return article.articleId === articleId;
  });

  slice[source] = slice[source].slice(_underIndex + 1);
  return {
    id: source,
    data: slice[source]
  };
};

exports.removeUnderNews = removeUnderNews;
//# sourceMappingURL=NewsSliceFn.js.map