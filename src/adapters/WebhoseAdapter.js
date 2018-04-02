
const C = {
  ROOT_URL: 'https://webhose.io',
  W: 'webhose',
  W_B: 'webhose_brodcast'
};

const _toNews = (json) => {
  const { posts, requestsLeft='' } = json;
  const arr = []
      , _hm = {};
  posts.forEach(post => {
    const { title='' } = post
         , _title = title.trim();
    if (_title && !_hm[_title] ){
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
}

const _toBroadcast = (json, option) => {
  const { items, requestsLeft } = json
      , articles = [];
  //console.log(json)
  items.forEach(post => {
    post.articleId = post.uuid
    post.source = C.W_B
    post.title = post.text
    post.description = post.text
    post.publishedAt = post.broadcast_at
    post.author = post.show
          ? post.show.name
          : undefined
    post.url = C.ROOT_URL + post.full_show
    articles.push(post)
  })
  return {
    source: C.W_B,
    articles: articles,
    sortBy: requestsLeft
  };
}

const _rToArticles = {
   NEWS: _toNews,
   BRODCAST: _toBroadcast
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
    const { requestType } = option
        , toArticles = _rToArticles[requestType];

    return toArticles(json, option);
  }
}

export default WebhoseAdapter
