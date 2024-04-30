"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'coinstats_news';
const _crRelated = coins => (coins || []).map(_ref => {
  let {
    coinKeyWords
  } = _ref;
  return coinKeyWords;
}).filter(Boolean).join('|');
const _crArticle = (_ref2, nowMls) => {
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
    description: (0, _utils.decodeHTMLEntities)(description),
    related: _crRelated(coins),
    author: source,
    publishedAt: feedDate,
    timeAgo: (0, _utils.safeFormatMls)(feedDate, nowMls),
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
      sortBy: (0, _utils.toFirstUpperCase)(filter)
    };
  }
};
var _default = exports.default = CoinStatsAdapter;
//# sourceMappingURL=CoinStatsAdapter.js.map