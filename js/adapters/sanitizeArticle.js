"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../utils/isTypeFn");
var _utils = require("../utils");
const _assign = Object.assign;
const sanitizeArticle = article => {
  const {
      publishedAt
    } = article,
    _isPublishedAtNumber = (0, _isTypeFn.isNumber)(publishedAt);
  return _assign(article, {
    title: (0, _utils.domSanitize)(article.title),
    description: (0, _utils.domSanitize)(article.description),
    related: (0, _utils.domSanitize)(article.related),
    author: (0, _utils.domSanitize)(article.author),
    publishedAt: _isPublishedAtNumber ? publishedAt : (0, _utils.domSanitize)(publishedAt),
    timeAgo: _isPublishedAtNumber ? article.timeAgo : (0, _utils.domSanitize)(article.timeAgo)
  });
};
var _default = exports.default = sanitizeArticle;
//# sourceMappingURL=sanitizeArticle.js.map