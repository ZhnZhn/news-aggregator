
//const WEBZ_ID = "webz";

const _hmSourceId = {
  W_WEBZ_QUERY: "webz",
  W_WEBZ_COUNTRY: "webz_country"
};

const _toNews = (json, option) => {
  const { posts, requestsLeft='' } = json
  , arr = [], _hm = {}
  , { type } = option
  , _sourceId = _hmSourceId[type];
  
  posts.forEach(post => {
    const { title='' } = post
    , _title = title.trim();
    if (_title && !_hm[_title]) {
      post.articleId = post.uuid
      post.source = _sourceId
      post.description = post.text
      post.publishedAt = post.published
      arr.push(post)
      _hm[_title] = true;
    }
  })

  return {
    source: _sourceId,
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
        //post.source = WEBZ_ID
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
