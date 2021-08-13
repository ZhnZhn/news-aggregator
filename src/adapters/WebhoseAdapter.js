
const C = {
  W: 'webhose'
};

const _toNews = (json) => {
  const { posts, requestsLeft='' } = json;
  const arr = [], _hm = {};
  posts.forEach(post => {
    const { title='' } = post
    , _title = title.trim();
    if (_title && !_hm[_title]) {
      post.articleId = post.uuid
      post.source = C.W
      post.description = post.text
      post.publishedAt = post.published
      arr.push(post)
      _hm[_title] = true;
    }
  })

  return {
    source: C.W,
    articles: arr,
    sortBy: requestsLeft
  };
};

const WebhoseAdapter = {
  toArticles: (posts=[], source) => {
    const arr = []
        , _hm = {};
    posts.forEach(post => {
      const { title='' } = post
           , _title = title.trim();
      if (_title && !_hm[_title] ){
        post.articleId = post.uuid
        post.source = "webhose"
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

export default WebhoseAdapter
