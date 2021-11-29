
const WEBZ_ID = "webz";

const _toNews = (json) => {
  const { posts, requestsLeft='' } = json;
  const arr = [], _hm = {};
  posts.forEach(post => {
    const { title='' } = post
    , _title = title.trim();
    if (_title && !_hm[_title]) {
      post.articleId = post.uuid
      post.source = WEBZ_ID
      post.description = post.text
      post.publishedAt = post.published
      arr.push(post)
      _hm[_title] = true;
    }
  })

  return {
    source: WEBZ_ID,
    articles: arr,
    sortBy: requestsLeft
  };
};

const WebzAdapter = {
  toArticles: (posts=[], source) => {
    const arr = []
        , _hm = {};
    posts.forEach(post => {
      const { title='' } = post
           , _title = title.trim();
      if (_title && !_hm[_title] ){
        post.articleId = post.uuid
        post.source = WEBZ_ID
        post.description = post.text
        post.publishedAt = post.published
        arr.push(post)
        _hm[_title] = true;
      }
    })

    return arr;
  },

  toNews: (json, option) => {
    return _toNews(json, option);
  }
};

export default WebzAdapter
