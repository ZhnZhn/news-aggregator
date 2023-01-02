"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _crArticles = _interopRequireDefault(require("./crArticles"));
var SOURCE_ID = 'messari_news';
var _crRelated = function _crRelated(tags) {
  return (tags || []).filter(Boolean).map(function (item) {
    return "#" + item;
  }).join(' ');
};
var _crArticle = function _crArticle(_ref, timeAgoOptions) {
  var title = _ref.title,
    tags = _ref.tags,
    published_at = _ref.published_at,
    url = _ref.url,
    author = _ref.author;
  var _ref2 = author || {},
    name = _ref2.name;
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: title,
    author: name,
    related: _crRelated(tags),
    publishedAt: published_at,
    timeAgo: (0, _formatTimeAgo["default"])(published_at, timeAgoOptions),
    url: url
  };
};
var _toArticles = function _toArticles(json) {
  var _ref3 = json || {},
    data = _ref3.data;
  return (0, _crArticles["default"])(data, _crArticle);
};
var MessariAdapter = {
  toNews: function toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};
var _default = MessariAdapter;
exports["default"] = _default;
//# sourceMappingURL=MessariAdapter.js.map