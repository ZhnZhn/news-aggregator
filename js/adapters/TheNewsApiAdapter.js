"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _NewsActions = require("../flux/actions/NewsActions");
var _ProviderNames = require("../conf/ProviderNames");
var _crId = _interopRequireDefault(require("../utils/crId"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _toFirstUpperCase = _interopRequireDefault(require("../utils/toFirstUpperCase"));
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
var SOURCE_ID = 'thenewsapi_top';
var MAX_ARTICLES_PER_PAGES = 20000;
var _isArr = Array.isArray;
var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};
var _toArticles = function _toArticles(_ref) {
  var data = _ref.data;
  var _timeAgoOptions = _formatTimeAgo["default"].crOptions();
  return _isArr(data) ? data.map(function (item) {
    var title = item.title,
      description = item.description,
      source = item.source,
      published_at = item.published_at,
      url = item.url;
    return {
      source: SOURCE_ID,
      articleId: (0, _crId["default"])(),
      title: title,
      description: description,
      author: source,
      publishedAt: published_at,
      timeAgo: (0, _formatTimeAgo["default"])(published_at, _timeAgoOptions),
      url: url
    };
  }).map(_sanitizeArticle["default"]) : [];
};
var _crCaption = function _crCaption(_ref2) {
  var category = _ref2.category;
  return _ProviderNames.THE_NEWS_API + ": " + (0, _toFirstUpperCase["default"])(category);
};
var _crNextPage = function _crNextPage(page, maxPage) {
  return _isNumber(page) ? _isNumber(maxPage) ? Math.min(page + 1, maxPage) : page + 1 : void 0;
};
var _crMaxPage = function _crMaxPage(found, limit) {
  return _isNumber(found) && _isNumber(limit) ? Math.min(Math.floor(found / limit), MAX_ARTICLES_PER_PAGES / limit) : '';
};
var _crConfigPages = function _crConfigPages(meta) {
  var _ref3 = meta || {},
    page = _ref3.page,
    found = _ref3.found,
    limit = _ref3.limit,
    maxPage = _crMaxPage(found, limit);
  return [_crNextPage(page, maxPage), maxPage];
};
var _crPage = function _crPage(json, option) {
  var _ref4 = json || {},
    meta = _ref4.meta,
    _crConfigPages2 = _crConfigPages(meta),
    nextPage = _crConfigPages2[0],
    maxPage = _crConfigPages2[1];
  return nextPage ? {
    nextPage: nextPage,
    maxPage: maxPage,
    onPageLoad: function onPageLoad() {
      return _NewsActions.NewsActions.loadNews({
        nextPage: nextPage,
        loadId: 'TNT',
        type: option.type,
        source: option.source,
        itemConf: option.itemConf,
        category: option.category,
        locale: option.locale,
        domain: option.domain
      });
    }
  } : void 0;
};
var TheNewsApiAdapter = {
  toNews: function toNews(json, option) {
    return {
      source: SOURCE_ID,
      caption: _crCaption(option),
      articles: _toArticles(json),
      page: _crPage(json, option)
    };
  }
};
var _default = TheNewsApiAdapter;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiAdapter.js.map