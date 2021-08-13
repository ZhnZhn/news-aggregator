"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  W: 'webhose'
};

var _toNews = function _toNews(json) {
  var posts = json.posts,
      _json$requestsLeft = json.requestsLeft,
      requestsLeft = _json$requestsLeft === void 0 ? '' : _json$requestsLeft;
  var arr = [],
      _hm = {};
  posts.forEach(function (post) {
    var _post$title = post.title,
        title = _post$title === void 0 ? '' : _post$title,
        _title = title.trim();

    if (_title && !_hm[_title]) {
      post.articleId = post.uuid;
      post.source = C.W;
      post.description = post.text;
      post.publishedAt = post.published;
      arr.push(post);
      _hm[_title] = true;
    }
  });
  return {
    source: C.W,
    articles: arr,
    sortBy: requestsLeft
  };
};

var WebhoseAdapter = {
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
        post.articleId = post.uuid;
        post.source = "webhose";
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
var _default = WebhoseAdapter;
exports["default"] = _default;
//# sourceMappingURL=WebhoseAdapter.js.map