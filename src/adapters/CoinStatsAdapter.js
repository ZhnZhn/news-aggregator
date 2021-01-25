import ut from '../utils/ut'

const {
  crId,
  toFirstUpperCase
} = ut;

const C = {
  SOURCE: 'coinstats_news'
};

const _isArr = Array.isArray
, _crRelated = coins => (coins || [])
    .map(({ coinKeyWords }) => coinKeyWords)
    .filter(Boolean)
    .join('|');

const _toArticles = json => {
  const { news } = json || {};
  return !_isArr(news) ? [] : news.map(({
    title, description,
    coins,
    feedDate, source,
    link
  }) => ({
     source: C.SOURCE,
     articleId: crId(),
     title, description,
     related: _crRelated(coins),
     author: source,
     publishedAt: feedDate,
     url: link
  }));
};

const CoinStatsAdapter = {
  toNews(json, option){
    const articles = _toArticles(json)
    , { filter } = option;    
    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: toFirstUpperCase(filter)
    };
  }
};

export default CoinStatsAdapter
