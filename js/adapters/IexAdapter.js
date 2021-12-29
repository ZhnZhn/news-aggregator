"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _crDescription = _interopRequireDefault(require("../utils/crDescription"));

var _isArr = Array.isArray;
var SOURCE_ID = 'iex_news',
    DF_SYMBOL = 'AAPL';

var _crAuthor = function _crAuthor(hasPaywall, source) {
  return hasPaywall ? "$ " + source : source;
};

var _toArticles = function _toArticles(json) {
  var _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  return _isArr(json) ? json.map(function (item) {
    var headline = item.headline,
        source = item.source,
        datetime = item.datetime,
        summary = item.summary,
        related = item.related,
        url = item.url,
        hasPaywall = item.hasPaywall,
        _related = related ? related.split(',').join(', ') : void 0;

    return {
      source: SOURCE_ID,
      articleId: (0, _crId["default"])(),
      title: headline,
      description: (0, _crDescription["default"])(summary),
      related: _related,
      author: _crAuthor(hasPaywall, source),
      publishedAt: datetime,
      timeAgo: (0, _formatTimeAgo["default"])(datetime, _timeAgoOptions),
      url: url
    };
  }) : [];
};

var IexAdapter = {
  toNews: function toNews(json, option) {
    var _option$symbol = option.symbol,
        symbol = _option$symbol === void 0 ? DF_SYMBOL : _option$symbol,
        _option$recent = option.recent,
        recent = _option$recent === void 0 ? '' : _option$recent,
        articles = _toArticles(json);

    return {
      source: SOURCE_ID,
      articles: articles,
      sortBy: symbol.toUpperCase() + " " + recent
    };
  }
};
var _default = IexAdapter;
exports["default"] = _default;
//# sourceMappingURL=IexAdapter.js.map