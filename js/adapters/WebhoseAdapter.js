'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WebhoseAdapter = {
  toArticles: function toArticles() {
    var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var source = arguments[1];

    var arr = [],
        _hm = {};
    posts.forEach(function (post) {
      var _post$title = post.title,
          title = _post$title === undefined ? '' : _post$title,
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
    //console.log(json)
    var posts = json.posts,
        _json$requestsLeft = json.requestsLeft,
        requestsLeft = _json$requestsLeft === undefined ? '' : _json$requestsLeft,
        _articles = WebhoseAdapter.toArticles(posts);

    return {
      source: "webhose",
      articles: _articles,
      sortBy: requestsLeft
    };
  }
};

exports.default = WebhoseAdapter;
//# sourceMappingURL=D:\_Dev\_React\_News\js\adapters\WebhoseAdapter.js.map