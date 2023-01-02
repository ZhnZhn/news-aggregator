"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _toFirstUpperCase = _interopRequireDefault(require("../utils/toFirstUpperCase"));
var _decodeHTMLEntities = _interopRequireDefault(require("../utils/decodeHTMLEntities"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _crArticles = _interopRequireDefault(require("./crArticles"));
var SOURCE_ID = 'coinstats_news';
var _crRelated = function _crRelated(coins) {
  return (coins || []).map(function (_ref) {
    var coinKeyWords = _ref.coinKeyWords;
    return coinKeyWords;
  }).filter(Boolean).join('|');
};
var _crArticle = function _crArticle(_ref2, timeAgoOptions) {
  var title = _ref2.title,
    description = _ref2.description,
    coins = _ref2.coins,
    feedDate = _ref2.feedDate,
    source = _ref2.source,
    link = _ref2.link;
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: title,
    description: (0, _decodeHTMLEntities["default"])(description),
    related: _crRelated(coins),
    author: source,
    publishedAt: feedDate,
    timeAgo: (0, _formatTimeAgo["default"])(feedDate, timeAgoOptions),
    url: link
  };
};
var _toArticles = function _toArticles(json) {
  var _ref3 = json || {},
    news = _ref3.news;
  return (0, _crArticles["default"])(news, _crArticle);
};
var CoinStatsAdapter = {
  toNews: function toNews(json, option) {
    var filter = option.filter;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy: (0, _toFirstUpperCase["default"])(filter)
    };
  }
};
var _default = CoinStatsAdapter;
exports["default"] = _default;
//# sourceMappingURL=CoinStatsAdapter.js.map