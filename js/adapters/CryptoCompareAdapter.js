"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _crDescription = _interopRequireDefault(require("../utils/crDescription"));

var _crArticles = _interopRequireDefault(require("./crArticles"));

var SOURCE_ID = 'cryptocompare_news',
    _toMls = function _toMls(sec) {
  return typeof sec === 'number' ? sec * 1000 : void 0;
};

var _crArticle = function _crArticle(_ref, timeAgoOptions) {
  var title = _ref.title,
      body = _ref.body,
      categories = _ref.categories,
      url = _ref.url,
      source = _ref.source,
      source_info = _ref.source_info,
      published_on = _ref.published_on;

  var _ref2 = source_info || {},
      name = _ref2.name,
      _publishedOn = _toMls(published_on);

  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: title,
    description: (0, _crDescription["default"])(body),
    related: categories,
    author: name || source,
    timeAgo: _publishedOn && (0, _formatTimeAgo["default"])(_publishedOn, timeAgoOptions),
    publishedAt: _publishedOn,
    url: url
  };
};

var _toArticles = function _toArticles(json) {
  var _ref3 = json || {},
      Data = _ref3.Data;

  return (0, _crArticles["default"])(Data, _crArticle);
};

var CryptoCompareAdapter = {
  toNews: function toNews(json, option) {
    var sortOrder = option.sortOrder;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy: sortOrder
    };
  }
};
var _default = CryptoCompareAdapter;
exports["default"] = _default;
//# sourceMappingURL=CryptoCompareAdapter.js.map