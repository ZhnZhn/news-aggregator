"use strict";

exports.__esModule = true;
exports.default = void 0;
var _NewsActions = require("../actions/NewsActions");
var _ComponentActions = require("../actions/ComponentActions");
var _compStore = require("../compStore");
var _storeAtoms = require("../storeAtoms");
var _NewsSliceFn = require("./NewsSliceFn");
const NewsSlice = {
  news: {},
  onLoadNews(option) {
    if (option === void 0) {
      option = {};
    }
    _ComponentActions.ComponentActions.showNewsPane(option.itemConf);
    (0, _storeAtoms.setLoading)();
  },
  onLoadNewsCompleted(_ref) {
    let {
      news,
      itemConf
    } = _ref;
    if (news) {
      const r = (0, _NewsSliceFn.loadNewsCompleted)(this.news, news);
      this.trigger(_NewsActions.NAT_LOAD_NEWS_COMPLETED, r);
    }
    (0, _storeAtoms.setLoadingComplete)();
  },
  onLoadNewsFailed(option) {
    (0, _compStore.showAlertDialog)(option);
    (0, _storeAtoms.setLoadingFailed)();
  },
  onRemoveNews(item) {
    (0, _NewsSliceFn.removeNews)(this.news, item);
  },
  onRemoveAllNews(paneId) {
    const r = (0, _NewsSliceFn.removeAllNews)(this.news, paneId);
    this.trigger(_NewsActions.NAT_UPDATE_NEWS, r);
  },
  onRemoveUnderNews(item) {
    const r = (0, _NewsSliceFn.removeUnderNews)(this.news, item);
    this.trigger(_NewsActions.NAT_UPDATE_NEWS, r);
  }
};
var _default = NewsSlice;
exports.default = _default;
//# sourceMappingURL=NewsSlice.js.map