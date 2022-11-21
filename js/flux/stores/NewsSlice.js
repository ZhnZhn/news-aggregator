"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _NewsActions = require("../actions/NewsActions");
var _ComponentActions = require("../actions/ComponentActions");
var _LoadingProgressActions = require("../actions/LoadingProgressActions");
var _NewsSliceFn = require("./NewsSliceFn");
var NewsSlice = {
  news: {},
  onLoadNews: function onLoadNews(option) {
    if (option === void 0) {
      option = {};
    }
    _ComponentActions.ComponentActions.showNewsPane(option.itemConf);
    this.triggerLoadingProgress(_LoadingProgressActions.LPAT_LOADING);
  },
  onLoadNewsCompleted: function onLoadNewsCompleted(_ref) {
    var news = _ref.news,
      itemConf = _ref.itemConf;
    if (news) {
      var r = (0, _NewsSliceFn.loadNewsCompleted)(this.news, news);
      this.trigger(_NewsActions.NAT_LOAD_NEWS_COMPLETED, r);
    }
    this.triggerLoadingProgress(_LoadingProgressActions.LPAT_LOADING_COMPLETE);
  },
  onLoadNewsFailed: function onLoadNewsFailed(option) {
    _ComponentActions.ComponentActions.showModalDialog('ALERT_DIALOG', option);
    this.triggerLoadingProgress(_LoadingProgressActions.LPAT_LOADING_FAILED);
  },
  onRemoveNews: function onRemoveNews(item) {
    (0, _NewsSliceFn.removeNews)(this.news, item);
  },
  onRemoveAllNews: function onRemoveAllNews(paneId) {
    var r = (0, _NewsSliceFn.removeAllNews)(this.news, paneId);
    this.trigger(_NewsActions.NAT_UPDATE_NEWS, r);
  },
  onRemoveUnderNews: function onRemoveUnderNews(item) {
    var r = (0, _NewsSliceFn.removeUnderNews)(this.news, item);
    this.trigger(_NewsActions.NAT_UPDATE_NEWS, r);
  }
};
var _default = NewsSlice;
exports["default"] = _default;
//# sourceMappingURL=NewsSlice.js.map