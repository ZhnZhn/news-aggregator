"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _adapterFn = require("./adapterFn");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'cryptocompare_news';
const _crArticle = (_ref, timeAgoOptions) => {
  let {
    title,
    body,
    categories,
    url,
    source,
    source_info,
    published_on
  } = _ref;
  const {
      name
    } = source_info || {},
    _publishedOn = (0, _adapterFn.toMls)(published_on);
  return {
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title,
    description: (0, _utils.crDescription)(body),
    related: categories,
    author: name || source,
    timeAgo: _publishedOn && (0, _utils.formatTimeAgo)(_publishedOn, timeAgoOptions),
    publishedAt: _publishedOn,
    url
  };
};
const _toArticles = json => {
  const {
    Data
  } = json || {};
  return (0, _crArticles.default)(Data, _crArticle);
};
const CryptoCompareAdapter = {
  toNews(json, option) {
    const {
      sortOrder
    } = option;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy: sortOrder
    };
  }
};
var _default = CryptoCompareAdapter;
exports.default = _default;
//# sourceMappingURL=CryptoCompareAdapter.js.map