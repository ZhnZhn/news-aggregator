"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _itemStore = require("../flux/itemStore");
var _ProviderNames = require("../conf/ProviderNames");
var _isTypeFn = require("../utils/isTypeFn");
var _dt = require("../utils/dt");
var _utils = require("../utils");
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const _isTopQuery = option => option.loadId === 'TNT';
const _toArticles = (_ref, sourceId) => {
  let {
    data
  } = _ref;
  const _nowMls = Date.now();
  return (0, _isTypeFn.isArr)(data) ? data.map(item => {
    const {
      title,
      description,
      snippet,
      source,
      categories,
      published_at,
      url
    } = item;
    return (0, _sanitizeArticle.default)({
      source: sourceId,
      articleId: (0, _utils.crId)(),
      title,
      description: description || snippet,
      author: source,
      related: categories,
      publishedAt: published_at,
      timeAgo: (0, _utils.safeFormatMls)((0, _dt.dateTimeToMls)(published_at), _nowMls),
      url
    });
  }) : [];
};
const _crCaption = option => {
  const _captionToken = _isTopQuery(option) ? (0, _utils.toFirstUpperCase)(option.category) : option.search;
  return `${_ProviderNames.THE_NEWS_API}: ${_captionToken}`;
};
const _crNextPage = (page, maxPage) => (0, _isTypeFn.isNumber)(page) ? (0, _isTypeFn.isNumber)(maxPage) ? Math.min(page + 1, maxPage) : page + 1 : void 0;
const _crMaxPage = (found, limit) => (0, _isTypeFn.isNumber)(found) && (0, _isTypeFn.isNumber)(limit) ? (0, _utils.formatNumber)(Math.ceil(found / limit)) : '';
const _crConfigPages = meta => {
  const {
      page,
      found,
      limit
    } = meta || {},
    maxPage = _crMaxPage(found, limit);
  return [_crNextPage(page, maxPage), maxPage];
};
const _crNextPageCommonOption = _ref2 => {
  let {
    type,
    source,
    itemConf,
    category
  } = _ref2;
  return {
    type,
    source,
    itemConf,
    category
  };
};
const _crNextPageOption = option => _isTopQuery(option) ? {
  ..._crNextPageCommonOption(option),
  loadId: 'TNT',
  locale: option.locale,
  domain: option.domain
} : {
  ..._crNextPageCommonOption(option),
  loadId: 'TNS',
  search: option.search,
  sortBy: option.sortBy
};
const _crPage = (json, option) => {
  const {
      meta
    } = json || {},
    [nextPage, maxPage] = _crConfigPages(meta);
  return nextPage ? {
    nextPage,
    maxPage,
    onPageLoad: () => (0, _itemStore.loadItem)({
      nextPage,
      ..._crNextPageOption(option)
    })
  } : void 0;
};
const _getSourceId = option => option.itemConf.paneId;
const TheNewsApiAdapter = {
  toNews: (json, option) => {
    const _sourceId = _getSourceId(option);
    return {
      source: _sourceId,
      caption: _crCaption(option),
      articles: _toArticles(json, _sourceId),
      page: _crPage(json, option)
    };
  }
};
var _default = exports.default = TheNewsApiAdapter;
//# sourceMappingURL=TheNewsApiAdapter.js.map