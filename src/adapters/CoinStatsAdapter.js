import ut from '../utils/ut';
import {
  crTimeAgoOptins,
  formatTimeAgo
} from '../utils/formatTimeAgo';

const {
  crId,
  toFirstUpperCase
} = ut;

const SOURCE_ID = 'coinstats_news';

const _isArr = Array.isArray
, _crRelated = coins => (coins || [])
    .map(({ coinKeyWords }) => coinKeyWords)
    .filter(Boolean)
    .join('|');

const _toArticles = json => {
  const { news } = json || {}
  , _timeAgoOptions = crTimeAgoOptins();
  return _isArr(news) ? news.map(({
    title, description,
    coins,
    feedDate, source,
    link
  }) => ({
     source: SOURCE_ID,
     articleId: crId(),
     title, description,
     related: _crRelated(coins),
     author: source,
     publishedAt: feedDate,
     timeAgo: formatTimeAgo(feedDate, _timeAgoOptions),
     url: link
  })) : [];
};

const CoinStatsAdapter = {
  toNews(json, option){
    const articles = _toArticles(json)
    , { filter } = option;
    return {
      source: SOURCE_ID,
      articles: articles,
      sortBy: toFirstUpperCase(filter)
    };
  }
};

export default CoinStatsAdapter
