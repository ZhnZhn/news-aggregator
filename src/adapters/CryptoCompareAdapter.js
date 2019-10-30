import crId from '../utils/crId'

const C = {
  SOURCE: 'cryptocompare_news'
}

const _toArticles = json => {
  if (!json || !Array.isArray(json.Data)) {
    return [];
  }
  return json.Data.map(item => {
    const {
      title, body, categories,
      url, source, source_info={}, published_on
    } = item
    , _author = source_info.name || source
    , _publishedAt = (new Date(published_on*1000)).toISOString()
    return {
      source: C.SOURCE,
      articleId: crId(),
      title: title,
      description: body,
      related: categories,
      author: _author,
      publishedAt: _publishedAt,
      url: url
    };
  })
};

const CryptoCompareAdapter = {
  toNews(json, option){
    const { sortOrder } = option
    , articles = _toArticles(json);
    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: sortOrder
    };
  }
};

export default CryptoCompareAdapter
