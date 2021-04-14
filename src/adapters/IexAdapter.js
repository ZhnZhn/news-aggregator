import crId from '../utils/crId';

const _isArr = Array.isArray;

const C = {
  SOURCE: 'iex_news',
  DF_SYMBOL: 'AAPL'
};

const _crAuthor = (hasPaywall, source) => hasPaywall
 ? `$ ${source}`
 : source;

const _toArticles = (json) => {
  if (!_isArr(json)) {
    return [];
  }

  const articles = json.map(item => {
      const {
        headline, source,
        datetime,
        summary, related,
        url, hasPaywall
      } = item
      , _related = related
          ? related.split(',').join(', ')
          : void 0;
      return {
        source: C.SOURCE,
        articleId: crId(),
        title: headline,
        description: summary,
        related: _related,
        author: _crAuthor(hasPaywall, source),
        publishedAt: datetime,
        url: url
      };
  });
  return articles;
}

const IexAdapter = {
  toNews(json, option) {
    const { symbol=C.DF_SYMBOL, recent='' } = option
    , articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
};

export default IexAdapter
