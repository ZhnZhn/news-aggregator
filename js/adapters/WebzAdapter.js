"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//const WEBZ_ID = "webz";
var _hmSourceId = {
  W_WEBZ_QUERY: "webz",
  W_WEBZ_COUNTRY: "webz_country"
};

var _toNews = function _toNews(json, option) {
  var posts = json.posts,
      _json$requestsLeft = json.requestsLeft,
      requestsLeft = _json$requestsLeft === void 0 ? '' : _json$requestsLeft,
      arr = [],
      _hm = {},
      type = option.type,
      _sourceId = _hmSourceId[type];
  posts.forEach(function (post) {
    var _post$title = post.title,
        title = _post$title === void 0 ? '' : _post$title,
        _title = title.trim();

    if (_title && !_hm[_title]) {
      post.articleId = post.uuid;
      post.source = _sourceId;
      post.description = post.text;
      post.publishedAt = post.published;
      arr.push(post);
      _hm[_title] = true;
    }
  });
  return {
    source: _sourceId,
    articles: arr,
    sortBy: requestsLeft
  };
};

var WebzAdapter = {
  toArticles: function toArticles(posts, source) {
    if (posts === void 0) {
      posts = [];
    }

    var arr = [],
        _hm = {};
    posts.forEach(function (post) {
      var _post$title2 = post.title,
          title = _post$title2 === void 0 ? '' : _post$title2,
          _title = title.trim();

      if (_title && !_hm[_title]) {
        post.articleId = post.uuid; //post.source = WEBZ_ID

        post.description = post.text;
        post.publishedAt = post.published;
        arr.push(post);
        _hm[_title] = true;
      }
    });
    return arr;
  },
  toNews: function toNews(json, option) {
    return _toNews(json, option);
  }
};
var _default = WebzAdapter;
exports["default"] = _default;
//# sourceMappingURL=WebzAdapter.js.map