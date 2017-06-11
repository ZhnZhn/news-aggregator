
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
    //console.log(json)
    const { posts, requestsLeft='' } = json
        , _articles = WebhoseAdapter.toArticles(posts);
    return {
      source: "webhose",
      articles: _articles,
      sortBy: requestsLeft
    };
  }
}

export default WebhoseAdapter
