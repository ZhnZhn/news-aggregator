"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _NewsActions = require("../actions/NewsActions");

var _ComponentActions = _interopRequireDefault(require("../actions/ComponentActions"));

var _LoadingProgressActions = require("../actions/LoadingProgressActions");

var Logic = {
  loadNewsCompleted: function loadNewsCompleted(slice, news) {
    var source = news.source,
        _news$articles = news.articles,
        articles = _news$articles === void 0 ? [] : _news$articles,
        sortBy = news.sortBy;
    slice[source] = slice[source] ? articles.concat(slice[source]) : articles;
    return {
      id: source,
      data: slice[source],
      sortBy: sortBy
    };
  },
  removeAllNews: function removeAllNews(slice, paneId) {
    slice[paneId] = [];
    return {
      id: paneId,
      data: slice[paneId],
      sortBy: ''
    };
  },
  removeNews: function removeNews(slice, item) {
    var id = item.id,
        source = item.source;
    slice[source] = slice[source].filter(function (article) {
      return article.articleId !== id;
    });
  },
  removeUnderNews: function removeUnderNews(slice, item) {
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
  }
};
var NewsSlice = {
  news: {},
  onLoadNews: function onLoadNews(option) {
    if (option === void 0) {
      option = {};
    }

    _ComponentActions["default"].showNewsPane(option.itemConf);

    this.triggerLoadingProgress(_LoadingProgressActions.LPAT_LOADING);
  },
  onLoadNewsCompleted: function onLoadNewsCompleted(_ref) {
    var news = _ref.news,
        itemConf = _ref.itemConf;

    if (news) {
      var r = Logic.loadNewsCompleted(this.news, news);
      this.trigger(_NewsActions.TYPES.LOAD_NEWS_COMPLETED, r);
    }

    this.triggerLoadingProgress(_LoadingProgressActions.LPAT_LOADING_COMPLETE);
  },
  onLoadNewsFailed: function onLoadNewsFailed(option) {
    _ComponentActions["default"].showModalDialog('ALERT_DIALOG', option);

    this.triggerLoadingProgress(_LoadingProgressActions.LPAT_LOADING_FAILED);
  },
  onRemoveNews: function onRemoveNews(item) {
    Logic.removeNews(this.news, item);
  },
  onRemoveAllNews: function onRemoveAllNews(paneId) {
    var r = Logic.removeAllNews(this.news, paneId);
    this.trigger(_NewsActions.TYPES.LOAD_NEWS_COMPLETED, r);
  },
  onRemoveUnderNews: function onRemoveUnderNews(item) {
    var r = Logic.removeUnderNews(this.news, item);
    this.trigger(_NewsActions.TYPES.LOAD_NEWS_COMPLETED, r);
  }
};
var _default = NewsSlice;
exports["default"] = _default;
//# sourceMappingURL=NewsSlice.js.map