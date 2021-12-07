import formatTimeAgo from '../utils/formatTimeAgo';

const _assign = Object.assign
, _crHm = () => Object.create(null);

const _hmSourceId = {
  W_WEBZ_QUERY: "webz",
  W_WEBZ_COUNTRY: "webz_country"
};

const _toNews = (json, option) => {
  const { posts, requestsLeft='' } = json
  , articles = [],
  _hm = _crHm()
  , { type } = option
  , _sourceId = _hmSourceId[type]
  , _timeAgoOptions = formatTimeAgo.crOptions();

  posts.forEach(post => {
    const {
      title='',
      uuid,
      text,
      published
    } = post
    , _title = title.trim();
    if (_title && !_hm[_title]) {
      articles.push(_assign(post, {
        source: _sourceId,
        articleId: uuid,        
        description: text,
        publishedAt: published,
        timeAgo: formatTimeAgo(published, _timeAgoOptions)
      }))
      _hm[_title] = true;
    }
  })

  return {
    source: _sourceId,
    articles,
    sortBy: requestsLeft
  };
};

const WebzAdapter = {
  toArticles: (posts=[], source) => {
    const articles = []
    , _hm = _crHm()
    , _timeAgoOptions = formatTimeAgo.crOptions();

    posts.forEach(post => {
      const {
        title='',
        uuid,
        text,
        published
      } = post
      , _title = title.trim();
      if (_title && !_hm[_title]){
        articles.push(_assign(post, {
          articleId: uuid,
          description: text,
          publishedAt: published,
          timeAgo: formatTimeAgo(published, _timeAgoOptions)
        }))
        _hm[_title] = true;
      }
    })

    return articles;
  },

  toNews: (json, option) => {
    return _toNews(json, option);
  }
};

export default WebzAdapter
