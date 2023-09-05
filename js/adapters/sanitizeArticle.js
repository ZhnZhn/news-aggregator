"use strict";

exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
const _assign = Object.assign,
  _isNumber = n => typeof n === 'number' && n - n === 0;
const sanitizeArticle = article => {
  const {
      publishedAt
    } = article,
    _isPublishedAtNumber = _isNumber(publishedAt);
  return _assign(article, {
    title: (0, _utils.domSanitize)(article.title),
    description: (0, _utils.domSanitize)(article.description),
    related: (0, _utils.domSanitize)(article.related),
    author: (0, _utils.domSanitize)(article.author),
    publishedAt: _isPublishedAtNumber ? publishedAt : (0, _utils.domSanitize)(publishedAt),
    timeAgo: _isPublishedAtNumber ? article.timeAgo : (0, _utils.domSanitize)(article.timeAgo)
  });
};
var _default = sanitizeArticle;
exports.default = _default;
//# sourceMappingURL=sanitizeArticle.js.map