"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _toFirstUpperCase = _interopRequireDefault(require("../utils/toFirstUpperCase"));

var _splitByParagraph = _interopRequireDefault(require("../utils/splitByParagraph"));

var _sanitizeArticle = _interopRequireDefault(require("./sanitizeArticle"));

var _assign = Object.assign,
    _isArr = Array.isArray,
    _crHm = function _crHm() {
  return Object.create(null);
};

var _hmSourceId = {
  W_WEBZ_QUERY: "webz",
  W_WEBZ_COUNTRY: "webz_country"
};

var _crDescription = function _crDescription(text, lang) {
  return text.indexOf('\n') === -1 ? !lang || lang === 'english' ? (0, _splitByParagraph["default"])(text) : text : text.replace(/\n/g, '\n\n');
};

var _crRelated = function _crRelated(tokenArr) {
  return (tokenArr || []).filter(function (str) {
    return (str || '').indexOf('_') === -1;
  }).map(_toFirstUpperCase["default"]).join("|");
};

var _toArticles = function _toArticles(posts, sourceId, lang) {
  var articles = [],
      _hm = _crHm(),
      _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  if (!_isArr(posts)) {
    return articles;
  }

  posts.forEach(function (post) {
    var _post$title = post.title,
        title = _post$title === void 0 ? '' : _post$title,
        uuid = post.uuid,
        text = post.text,
        published = post.published,
        author = post.author,
        thread = post.thread,
        _ref = thread || {},
        site_full = _ref.site_full,
        site = _ref.site,
        site_categories = _ref.site_categories,
        _title = title.trim();

    if (_title && !_hm[_title]) {
      articles.push(_assign(post, {
        source: sourceId,
        articleId: uuid,
        author: author || site_full || site,
        description: _crDescription(text, lang),
        related: _crRelated(site_categories),
        publishedAt: published,
        timeAgo: (0, _formatTimeAgo["default"])(published, _timeAgoOptions)
      }));
      _hm[_title] = true;
    }
  });
  return articles.map(_sanitizeArticle["default"]);
};

var WebzAdapter = {
  toNews: function toNews(json, option) {
    var _ref2 = json || {},
        posts = _ref2.posts,
        requestsLeft = _ref2.requestsLeft,
        _ref3 = option || {},
        type = _ref3.type,
        lang = _ref3.lang,
        _sourceId = _hmSourceId[type];

    return {
      source: _sourceId,
      articles: _toArticles(posts, _sourceId, lang),
      sortBy: requestsLeft
    };
  }
};
var _default = WebzAdapter;
exports["default"] = _default;
//# sourceMappingURL=WebzAdapter.js.map