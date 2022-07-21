"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _domSanitize = _interopRequireDefault(require("../utils/domSanitize"));

var _assign = Object.assign,
    _isNumber = function _isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};

var sanitizeArticle = function sanitizeArticle(article) {
  var publishedAt = article.publishedAt,
      _isPublishedAtNumber = _isNumber(publishedAt);

  return _assign(article, {
    title: (0, _domSanitize["default"])(article.title),
    description: (0, _domSanitize["default"])(article.description),
    related: (0, _domSanitize["default"])(article.related),
    author: (0, _domSanitize["default"])(article.author),
    publishedAt: _isPublishedAtNumber ? publishedAt : (0, _domSanitize["default"])(publishedAt),
    timeAgo: _isPublishedAtNumber ? article.timeAgo : (0, _domSanitize["default"])(article.timeAgo)
  });
};

var _default = sanitizeArticle;
exports["default"] = _default;
//# sourceMappingURL=sanitizeArticle.js.map