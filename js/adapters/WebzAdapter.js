"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));

var _assign = Object.assign,
    _crHm = function _crHm() {
  return Object.create(null);
};

var _hmSourceId = {
  W_WEBZ_QUERY: "webz",
  W_WEBZ_COUNTRY: "webz_country"
};

var _toNews = function _toNews(json, option) {
  var posts = json.posts,
      _json$requestsLeft = json.requestsLeft,
      requestsLeft = _json$requestsLeft === void 0 ? '' : _json$requestsLeft,
      articles = [],
      _hm = _crHm(),
      type = option.type,
      _sourceId = _hmSourceId[type],
      _timeAgoOptions = _formatTimeAgo["default"].crOptions();

  posts.forEach(function (post) {
    var _post$title = post.title,
        title = _post$title === void 0 ? '' : _post$title,
        uuid = post.uuid,
        text = post.text,
        published = post.published,
        _title = title.trim();

    if (_title && !_hm[_title]) {
      articles.push(_assign(post, {
        source: _sourceId,
        articleId: uuid,
        description: text,
        publishedAt: published,
        timeAgo: (0, _formatTimeAgo["default"])(published, _timeAgoOptions)
      }));
      _hm[_title] = true;
    }
  });
  return {
    source: _sourceId,
    articles: articles,
    sortBy: requestsLeft
  };
};

var WebzAdapter = {
  toArticles: function toArticles(posts, source) {
    if (posts === void 0) {
      posts = [];
    }

    var articles = [],
        _hm = _crHm(),
        _timeAgoOptions = _formatTimeAgo["default"].crOptions();

    posts.forEach(function (post) {
      var _post$title2 = post.title,
          title = _post$title2 === void 0 ? '' : _post$title2,
          uuid = post.uuid,
          text = post.text,
          published = post.published,
          _title = title.trim();

      if (_title && !_hm[_title]) {
        articles.push(_assign(post, {
          articleId: uuid,
          description: text,
          publishedAt: published,
          timeAgo: (0, _formatTimeAgo["default"])(published, _timeAgoOptions)
        }));
        _hm[_title] = true;
      }
    });
    return articles;
  },
  toNews: function toNews(json, option) {
    return _toNews(json, option);
  }
};
var _default = WebzAdapter;
exports["default"] = _default;
//# sourceMappingURL=WebzAdapter.js.map