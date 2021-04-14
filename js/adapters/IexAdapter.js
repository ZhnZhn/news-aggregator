"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var _isArr = Array.isArray;
var C = {
  SOURCE: 'iex_news',
  DF_SYMBOL: 'AAPL'
};

var _crAuthor = function _crAuthor(hasPaywall, source) {
  return hasPaywall ? "$ " + source : source;
};

var _toArticles = function _toArticles(json) {
  if (!_isArr(json)) {
    return [];
  }

  var articles = json.map(function (item) {
    var headline = item.headline,
        source = item.source,
        datetime = item.datetime,
        summary = item.summary,
        related = item.related,
        url = item.url,
        hasPaywall = item.hasPaywall,
        _related = related ? related.split(',').join(', ') : void 0;

    return {
      source: C.SOURCE,
      articleId: (0, _crId["default"])(),
      title: headline,
      description: summary,
      related: _related,
      author: _crAuthor(hasPaywall, source),
      publishedAt: datetime,
      url: url
    };
  });
  return articles;
};

var IexAdapter = {
  toNews: function toNews(json, option) {
    var _option$symbol = option.symbol,
        symbol = _option$symbol === void 0 ? C.DF_SYMBOL : _option$symbol,
        _option$recent = option.recent,
        recent = _option$recent === void 0 ? '' : _option$recent,
        articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: symbol.toUpperCase() + " " + recent
    };
  }
};
var _default = IexAdapter;
exports["default"] = _default;
//# sourceMappingURL=IexAdapter.js.map