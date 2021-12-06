"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ut = _interopRequireDefault(require("../utils/ut"));

var _formatTimeAgo = require("../utils/formatTimeAgo");

var crId = _ut["default"].crId,
    replaceDecCodes = _ut["default"].replaceDecCodes;
var _isArr = Array.isArray;
var SOURCE_ID = 'cryptocompare_news';

var _toMls = function _toMls(sec) {
  return typeof sec === 'number' ? sec * 1000 : void 0;
};

var _toArticles = function _toArticles(json) {
  var _ref = json || {},
      Data = _ref.Data;

  if (!_isArr(Data)) {
    return [];
  }

  var _timeAgoOptions = (0, _formatTimeAgo.crTimeAgoOptins)();

  return Data.map(function (item) {
    var title = item.title,
        body = item.body,
        categories = item.categories,
        url = item.url,
        source = item.source,
        source_info = item.source_info,
        published_on = item.published_on,
        _ref2 = source_info || {},
        name = _ref2.name,
        _publishedOn = _toMls(published_on);

    return {
      source: SOURCE_ID,
      articleId: crId(),
      title: title,
      url: url,
      description: replaceDecCodes(body),
      related: categories,
      author: name || source,
      timeAgo: _publishedOn && (0, _formatTimeAgo.formatTimeAgo)(_publishedOn, _timeAgoOptions),
      publishedAt: _publishedOn && new Date(_publishedOn).toISOString()
    };
  });
};

var CryptoCompareAdapter = {
  toNews: function toNews(json, option) {
    var sortOrder = option.sortOrder,
        articles = _toArticles(json);

    return {
      source: SOURCE_ID,
      articles: articles,
      sortBy: sortOrder
    };
  }
};
var _default = CryptoCompareAdapter;
exports["default"] = _default;
//# sourceMappingURL=CryptoCompareAdapter.js.map