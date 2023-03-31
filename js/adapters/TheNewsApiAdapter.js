"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _NewsActions = require("../flux/actions/NewsActions");
var _ProviderNames = require("../conf/ProviderNames");
var _crId = _interopRequireDefault(require("../utils/crId"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _formatNumber = _interopRequireDefault(require("../utils/formatNumber"));
var _toFirstUpperCase = _interopRequireDefault(require("../utils/toFirstUpperCase"));
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
var _isArr = Array.isArray;
var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};
var _isTopQuery = function _isTopQuery(option) {
  return option.loadId === 'TNT';
};
var _toArticles = function _toArticles(_ref, sourceId) {
  var data = _ref.data;
  var _timeAgoOptions = _formatTimeAgo["default"].crOptions();
  return _isArr(data) ? data.map(function (item) {
    var title = item.title,
      description = item.description,
      snippet = item.snippet,
      source = item.source,
      categories = item.categories,
      published_at = item.published_at,
      url = item.url;
    return (0, _sanitizeArticle["default"])({
      source: sourceId,
      articleId: (0, _crId["default"])(),
      title: title,
      description: description || snippet,
      author: source,
      related: categories,
      publishedAt: published_at,
      timeAgo: (0, _formatTimeAgo["default"])(published_at, _timeAgoOptions),
      url: url
    });
  }) : [];
};
var _crCaption = function _crCaption(option) {
  var _captionToken = _isTopQuery(option) ? (0, _toFirstUpperCase["default"])(option.category) : option.search;
  return _ProviderNames.THE_NEWS_API + ": " + _captionToken;
};
var _crNextPage = function _crNextPage(page, maxPage) {
  return _isNumber(page) ? _isNumber(maxPage) ? Math.min(page + 1, maxPage) : page + 1 : void 0;
};
var _crMaxPage = function _crMaxPage(found, limit) {
  return _isNumber(found) && _isNumber(limit) ? (0, _formatNumber["default"])(Math.ceil(found / limit)) : '';
};
var _crConfigPages = function _crConfigPages(meta) {
  var _ref2 = meta || {},
    page = _ref2.page,
    found = _ref2.found,
    limit = _ref2.limit,
    maxPage = _crMaxPage(found, limit);
  return [_crNextPage(page, maxPage), maxPage];
};
var _crNextPageCommonOption = function _crNextPageCommonOption(_ref3) {
  var type = _ref3.type,
    source = _ref3.source,
    itemConf = _ref3.itemConf,
    category = _ref3.category;
  return {
    type: type,
    source: source,
    itemConf: itemConf,
    category: category
  };
};
var _crNextPageOption = function _crNextPageOption(option) {
  return _isTopQuery(option) ? (0, _extends2["default"])({}, _crNextPageCommonOption(option), {
    loadId: 'TNT',
    locale: option.locale,
    domain: option.domain
  }) : (0, _extends2["default"])({}, _crNextPageCommonOption(option), {
    loadId: 'TNS',
    search: option.search,
    sortBy: option.sortBy
  });
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
      return _NewsActions.NewsActions.loadNews((0, _extends2["default"])({
        nextPage: nextPage
      }, _crNextPageOption(option)));
    }
  } : void 0;
};
var _getSourceId = function _getSourceId(option) {
  return option.itemConf.paneId;
};
var TheNewsApiAdapter = {
  toNews: function toNews(json, option) {
    var _sourceId = _getSourceId(option);
    return {
      source: _sourceId,
      caption: _crCaption(option),
      articles: _toArticles(json, _sourceId),
      page: _crPage(json, option)
    };
  }
};
var _default = TheNewsApiAdapter;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiAdapter.js.map