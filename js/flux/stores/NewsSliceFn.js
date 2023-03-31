"use strict";

exports.__esModule = true;
exports.removeUnderNews = exports.removeNews = exports.removeAllNews = exports.loadNewsCompleted = void 0;
var loadNewsCompleted = function loadNewsCompleted(hmNews, news) {
  var source = news.source,
    _news$articles = news.articles,
    articles = _news$articles === void 0 ? [] : _news$articles,
    sortBy = news.sortBy,
    caption = news.caption,
    page = news.page,
    isRelatedBars = news.isRelatedBars;
  hmNews[source] = hmNews[source] ? articles.concat(hmNews[source]) : articles;
  return {
    id: source,
    data: hmNews[source],
    sortBy: sortBy,
    caption: caption,
    page: page,
    isRelatedBars: isRelatedBars
  };
};
exports.loadNewsCompleted = loadNewsCompleted;
var removeAllNews = function removeAllNews(hmNews, paneId) {
  hmNews[paneId] = [];
  return {
    id: paneId,
    data: hmNews[paneId],
    sortBy: ''
  };
};
exports.removeAllNews = removeAllNews;
var removeNews = function removeNews(hmNews, item) {
  var articleId = item.articleId,
    source = item.source;
  hmNews[source] = hmNews[source].filter(function (article) {
    return article.articleId !== articleId;
  });
};
exports.removeNews = removeNews;
var removeUnderNews = function removeUnderNews(hmNews, item) {
  var articleId = item.articleId,
    source = item.source;
  var _underIndex = hmNews[source].findIndex(function (article) {
    return article.articleId === articleId;
  });
  hmNews[source] = hmNews[source].slice(_underIndex + 1);
  return {
    id: source,
    data: hmNews[source]
  };
};
exports.removeUnderNews = removeUnderNews;
//# sourceMappingURL=NewsSliceFn.js.map