"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ut = _interopRequireDefault(require("../utils/ut"));

var crId = _ut["default"].crId;
var C = {
  SOURCE: 'messari_news'
};
/* Match only links that are fully qualified with https */
//const fullLinkOnlyRegex = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/

var _crRelated = function _crRelated(tags) {
  return (tags || []).filter(Boolean).map(function (item) {
    return "#" + item;
  }).join(' ');
};

var _toArticles = function _toArticles(json) {
  if (!json || !Array.isArray(json.data)) {
    return [];
  }

  return json.data.map(function (item) {
    var title = item.title,
        tags = item.tags,
        published_at = item.published_at,
        url = item.url,
        author = item.author,
        name = author.name;
    return {
      source: C.SOURCE,
      articleId: crId(),
      title: title,
      //description: '',
      related: _crRelated(tags),
      author: name,
      publishedAt: published_at,
      url: url
    };
  });
};

var MessariAdapter = {
  toNews: function toNews(json, option) {
    var articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles
    };
  }
};
var _default = MessariAdapter;
exports["default"] = _default;
//# sourceMappingURL=MessariAdapter.js.map