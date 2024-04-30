import {
  crId,
  safeFormatMls,
  decodeHTMLEntities,
  toFirstUpperCase,
} from '../utils';

import crArticles from './crArticles';

const SOURCE_ID = 'coinstats_news';

const _crRelated = coins => (coins || [])
  .map(({ coinKeyWords }) => coinKeyWords)
  .filter(Boolean)
  .join('|');

const _crArticle = ({
  title,
  description,
  coins,
  feedDate,
  source,
  link
}, nowMls) => ({
  source: SOURCE_ID,
  articleId: crId(),
  title,
  description: decodeHTMLEntities(description),
  related: _crRelated(coins),
  author: source,
  publishedAt: feedDate,
  timeAgo: safeFormatMls(feedDate, nowMls),
  url: link
})

const _toArticles = json => {
  const { news } = json || {};
  return crArticles(news, _crArticle);
};

const CoinStatsAdapter = {
  toNews(json, option){
    const { filter } = option;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy: toFirstUpperCase(filter)
    };
  }
};

export default CoinStatsAdapter
