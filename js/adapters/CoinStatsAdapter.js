"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ut = _interopRequireDefault(require("../utils/ut"));

var crId = _ut["default"].crId,
    toFirstUpperCase = _ut["default"].toFirstUpperCase;
var C = {
  SOURCE: 'coinstats_news'
};

var _isArr = Array.isArray,
    _crRelated = function _crRelated(coins) {
  return (coins || []).map(function (_ref) {
    var coinKeyWords = _ref.coinKeyWords;
    return coinKeyWords;
  }).filter(Boolean).join('|');
};

var _toArticles = function _toArticles(json) {
  var _ref2 = json || {},
      news = _ref2.news;

  return !_isArr(news) ? [] : news.map(function (_ref3) {
    var title = _ref3.title,
        description = _ref3.description,
        coins = _ref3.coins,
        feedDate = _ref3.feedDate,
        source = _ref3.source,
        link = _ref3.link;
    return {
      source: C.SOURCE,
      articleId: crId(),
      title: title,
      description: description,
      related: _crRelated(coins),
      author: source,
      publishedAt: feedDate,
      url: link
    };
  });
};

var CoinStatsAdapter = {
  toNews: function toNews(json, option) {
    var articles = _toArticles(json),
        filter = option.filter;

    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: toFirstUpperCase(filter)
    };
  }
};
var _default = CoinStatsAdapter;
exports["default"] = _default;
//# sourceMappingURL=CoinStatsAdapter.js.map