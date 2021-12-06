"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ut = _interopRequireDefault(require("../utils/ut"));

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var crId = _ut["default"].crId;
var _isArr = Array.isArray;
var SOURCE_ID = 'messari_news';

var _crRelated = function _crRelated(tags) {
  return (tags || []).filter(Boolean).map(function (item) {
    return "#" + item;
  }).join(' ');
};

var _toArticles = function _toArticles(json) {
  var _ref = json || {},
      data = _ref.data,
      _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  return _isArr(data) ? data.map(function (item) {
    var title = item.title,
        tags = item.tags,
        published_at = item.published_at,
        url = item.url,
        author = item.author,
        _ref2 = author || {},
        name = _ref2.name;

    return {
      source: SOURCE_ID,
      articleId: crId(),
      title: title,
      url: url,
      author: name,
      related: _crRelated(tags),
      publishedAt: published_at,
      timeAgo: (0, _formatTimeAgo["default"])(published_at, _timeAgoOptions)
    };
  }) : [];
};

var MessariAdapter = {
  toNews: function toNews(json, option) {
    var articles = _toArticles(json);

    return {
      source: SOURCE_ID,
      articles: articles
    };
  }
};
var _default = MessariAdapter;
exports["default"] = _default;
//# sourceMappingURL=MessariAdapter.js.map