"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crId = _interopRequireDefault(require("../utils/crId"));

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _toFirstUpperCase = _interopRequireDefault(require("../utils/toFirstUpperCase"));

var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));

var SOURCE_ID = 'thenewsapi_top';
var _isArr = Array.isArray;

var _toArticles = function _toArticles(_ref) {
  var data = _ref.data;

  var _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  return _isArr(data) ? data.map(function (item) {
    var title = item.title,
        description = item.description,
        source = item.source,
        published_at = item.published_at,
        url = item.url;
    return {
      source: SOURCE_ID,
      articleId: (0, _crId["default"])(),
      title: title,
      description: description,
      author: source,
      publishedAt: published_at,
      timeAgo: (0, _formatTimeAgo["default"])(published_at, _timeAgoOptions),
      url: url
    };
  }).map(_sanitizeArticle["default"]) : [];
};

var _crCaption = function _crCaption(_ref2) {
  var category = _ref2.category;
  return "TheNewsApi: " + (0, _toFirstUpperCase["default"])(category);
};

var TheNewsApiAdapter = {
  toNews: function toNews(json, option) {
    return {
      source: SOURCE_ID,
      caption: _crCaption(option),
      articles: _toArticles(json)
    };
  }
};
var _default = TheNewsApiAdapter;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiAdapter.js.map