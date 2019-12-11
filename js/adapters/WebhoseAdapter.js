"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  ROOT_URL: 'https://webhose.io',
  W: 'webhose',
  W_B: 'webhose_brodcast'
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

var _toBroadcast = function _toBroadcast(json, option) {
  var items = json.items,
      requestsLeft = json.requestsLeft,
      articles = [];
  items.forEach(function (post) {
    post.articleId = post.uuid;
    post.source = C.W_B;
    post.title = post.text;
    post.description = post.text;
    post.publishedAt = post.broadcast_at;
    post.author = post.show ? post.show.name : undefined;
    post.url = C.ROOT_URL + post.full_show;
    articles.push(post);
  });
  return {
    source: C.W_B,
    articles: articles,
    sortBy: requestsLeft
  };
};

var _rToArticles = {
  NEWS: _toNews,
  BRODCAST: _toBroadcast
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
    var requestType = option.requestType,
        toArticles = _rToArticles[requestType];
    return toArticles(json, option);
  }
};
var _default = WebhoseAdapter;
exports["default"] = _default;
//# sourceMappingURL=WebhoseAdapter.js.map