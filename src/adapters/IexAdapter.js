import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';

const _isArr = Array.isArray;

const SOURCE_ID = 'iex_news'
, DF_SYMBOL = 'AAPL';

const _crAuthor = (hasPaywall, source) => hasPaywall
 ? `$ ${source}`
 : source;

const _toArticles = (json) => {
  const _timeAgoOptions = formatTimeAgo.crOptions();
  return _isArr(json) ? json.map(item => {
      const {
        headline,
        source,
        datetime,
        summary,
        related,
        url,
        hasPaywall
      } = item
      , _related = related
          ? related.split(',').join(', ')
          : void 0;
      return {
        source: SOURCE_ID,
        articleId: crId(),
        title: headline,
        description: summary,
        related: _related,
        author: _crAuthor(hasPaywall, source),
        publishedAt: datetime,
        timeAgo: formatTimeAgo(datetime, _timeAgoOptions),
        url
      };
  }) : [];
};

const IexAdapter = {
  toNews(json, option) {
    const {
      symbol=DF_SYMBOL,
      recent=''
    } = option
    , articles = _toArticles(json);
    return {
      source: SOURCE_ID,
      articles: articles,
      sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
};

export default IexAdapter
