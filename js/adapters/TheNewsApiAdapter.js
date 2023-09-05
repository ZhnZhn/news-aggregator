"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _itemStore = require("../flux/itemStore");
var _ProviderNames = require("../conf/ProviderNames");
var _utils = require("../utils");
var _formatNumber = _interopRequireDefault(require("../utils/formatNumber"));
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const _isArr = Array.isArray;
const _isNumber = n => typeof n === 'number' && n - n === 0;
const _isTopQuery = option => option.loadId === 'TNT';
const _toArticles = (_ref, sourceId) => {
  let {
    data
  } = _ref;
  const _timeAgoOptions = _utils.formatTimeAgo.crOptions();
  return _isArr(data) ? data.map(item => {
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
      timeAgo: (0, _utils.formatTimeAgo)(published_at, _timeAgoOptions),
      url
    });
  }) : [];
};
const _crCaption = option => {
  const _captionToken = _isTopQuery(option) ? (0, _utils.toFirstUpperCase)(option.category) : option.search;
  return _ProviderNames.THE_NEWS_API + ": " + _captionToken;
};
const _crNextPage = (page, maxPage) => _isNumber(page) ? _isNumber(maxPage) ? Math.min(page + 1, maxPage) : page + 1 : void 0;
const _crMaxPage = (found, limit) => _isNumber(found) && _isNumber(limit) ? (0, _formatNumber.default)(Math.ceil(found / limit)) : '';
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
var _default = TheNewsApiAdapter;
exports.default = _default;
//# sourceMappingURL=TheNewsApiAdapter.js.map