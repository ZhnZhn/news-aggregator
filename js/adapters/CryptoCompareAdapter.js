"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ut = _interopRequireDefault(require("../utils/ut"));

var crId = _ut["default"].crId,
    replaceDecCodes = _ut["default"].replaceDecCodes;
var C = {
  SOURCE: 'cryptocompare_news'
};

var _toArticles = function _toArticles(json) {
  if (!json || !Array.isArray(json.Data)) {
    return [];
  }

  return json.Data.map(function (item) {
    var title = item.title,
        body = item.body,
        categories = item.categories,
        url = item.url,
        source = item.source,
        _item$source_info = item.source_info,
        source_info = _item$source_info === void 0 ? {} : _item$source_info,
        published_on = item.published_on,
        _author = source_info.name || source,
        _publishedAt = new Date(published_on * 1000).toISOString(),
        _body = replaceDecCodes(body);

    return {
      source: C.SOURCE,
      articleId: crId(),
      title: title,
      description: _body,
      related: categories,
      author: _author,
      publishedAt: _publishedAt,
      url: url
    };
  });
};

var CryptoCompareAdapter = {
  toNews: function toNews(json, option) {
    var sortOrder = option.sortOrder,
        articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: sortOrder
    };
  }
};
var _default = CryptoCompareAdapter;
exports["default"] = _default;
//# sourceMappingURL=CryptoCompareAdapter.js.map