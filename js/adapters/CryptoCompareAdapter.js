"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _crDescription = _interopRequireDefault(require("../utils/crDescription"));

var _isArr = Array.isArray,
    SOURCE_ID = 'cryptocompare_news';

var _toMls = function _toMls(sec) {
  return typeof sec === 'number' ? sec * 1000 : void 0;
};

var _toArticles = function _toArticles(json) {
  var _ref = json || {},
      Data = _ref.Data,
      _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  return _isArr(Data) ? Data.map(function (item) {
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
      articleId: (0, _crId["default"])(),
      title: title,
      url: url,
      description: (0, _crDescription["default"])(body),
      related: categories,
      author: name || source,
      timeAgo: _publishedOn && (0, _formatTimeAgo["default"])(_publishedOn, _timeAgoOptions),
      publishedAt: _publishedOn
    };
  }) : [];
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