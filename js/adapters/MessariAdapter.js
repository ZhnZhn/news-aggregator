"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'messari_news';
const _crRelated = tags => (tags || []).filter(Boolean).map(item => "#" + item).join(' ');
const _crArticle = (_ref, nowMls) => {
  let {
    title,
    tags,
    published_at,
    url,
    author
  } = _ref;
  const {
    name
  } = author || {};
  return {
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title,
    author: name,
    related: _crRelated(tags),
    publishedAt: published_at,
    timeAgo: (0, _utils.safeFormatMls)(published_at, nowMls),
    url
  };
};
const _toArticles = json => {
  const {
    data
  } = json || {};
  return (0, _crArticles.default)(data, _crArticle);
};
const MessariAdapter = {
  toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};
var _default = exports.default = MessariAdapter;
//# sourceMappingURL=MessariAdapter.js.map