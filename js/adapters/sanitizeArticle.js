"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../utils/isTypeFn");
var _domSanitize = require("../utils/domSanitize");
const _assign = Object.assign;
const sanitizeArticle = article => {
  const {
      publishedAt
    } = article,
    _isPublishedAtNumber = (0, _isTypeFn.isNumber)(publishedAt);
  return _assign(article, {
    title: (0, _domSanitize.domSanitize)(article.title),
    description: (0, _domSanitize.domSanitize)(article.description),
    related: (0, _domSanitize.domSanitize)(article.related),
    author: (0, _domSanitize.domSanitize)(article.author),
    publishedAt: _isPublishedAtNumber ? publishedAt : (0, _domSanitize.domSanitize)(publishedAt),
    timeAgo: _isPublishedAtNumber ? article.timeAgo : (0, _domSanitize.domSanitize)(article.timeAgo)
  });
};
var _default = exports.default = sanitizeArticle;
//# sourceMappingURL=sanitizeArticle.js.map