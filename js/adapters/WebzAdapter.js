"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _splitByParagraph = require("../utils/splitByParagraph");
var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));
const _assign = Object.assign,
  _isArr = Array.isArray,
  _crHm = () => Object.create(null);
const _hmSourceId = {
  W_WEBZ_QUERY: "webz",
  W_WEBZ_COUNTRY: "webz_country"
};
const _crDescription = (text, lang) => text.indexOf('\n') === -1 ? !lang || lang === 'english' ? (0, _splitByParagraph.splitByParagraph)(text) : text : text.replace(/\n/g, '\n\n');
const _crRelated = tokenArr => (tokenArr || []).filter(str => (str || '').indexOf('_') === -1).map(_utils.toFirstUpperCase).join("|");
const _toArticles = (posts, sourceId, lang) => {
  const articles = [],
    _hm = _crHm(),
    _nowMls = Date.now();
  if (!_isArr(posts)) {
    return articles;
  }
  posts.forEach(post => {
    const {
        title = '',
        uuid,
        text,
        published,
        author,
        thread
      } = post,
      {
        site_full,
        site,
        site_categories
      } = thread || {},
      _title = title.trim();
    if (_title && !_hm[_title]) {
      articles.push(_assign(post, {
        source: sourceId,
        articleId: uuid,
        author: author || site_full || site,
        description: _crDescription(text, lang),
        related: _crRelated(site_categories),
        publishedAt: published,
        timeAgo: (0, _utils.safeFormatMls)(published, _nowMls)
      }));
      _hm[_title] = true;
    }
  });
  return articles.map(_sanitizeArticle.default);
};
const WebzAdapter = {
  toNews: (json, option) => {
    const {
        posts,
        requestsLeft
      } = json || {},
      {
        type,
        lang
      } = option || {},
      _sourceId = _hmSourceId[type];
    return {
      source: _sourceId,
      articles: _toArticles(posts, _sourceId, lang),
      sortBy: requestsLeft
    };
  }
};
var _default = exports.default = WebzAdapter;
//# sourceMappingURL=WebzAdapter.js.map