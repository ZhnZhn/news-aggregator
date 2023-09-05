"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _toFirstUpperCase = _interopRequireDefault(require("../utils/toFirstUpperCase"));
var _decodeHTMLEntities = _interopRequireDefault(require("../utils/decodeHTMLEntities"));
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'coinstats_news';
const _crRelated = coins => (coins || []).map(_ref => {
  let {
    coinKeyWords
  } = _ref;
  return coinKeyWords;
}).filter(Boolean).join('|');
const _crArticle = (_ref2, timeAgoOptions) => {
  let {
    title,
    description,
    coins,
    feedDate,
    source,
    link
  } = _ref2;
  return {
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title,
    description: (0, _decodeHTMLEntities.default)(description),
    related: _crRelated(coins),
    author: source,
    publishedAt: feedDate,
    timeAgo: (0, _utils.formatTimeAgo)(feedDate, timeAgoOptions),
    url: link
  };
};
const _toArticles = json => {
  const {
    news
  } = json || {};
  return (0, _crArticles.default)(news, _crArticle);
};
const CoinStatsAdapter = {
  toNews(json, option) {
    const {
      filter
    } = option;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy: (0, _toFirstUpperCase.default)(filter)
    };
  }
};
var _default = CoinStatsAdapter;
exports.default = _default;
//# sourceMappingURL=CoinStatsAdapter.js.map