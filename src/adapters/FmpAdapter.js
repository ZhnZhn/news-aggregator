import {
  crId,
  safeFormatMls
} from '../utils';
import {
  dateTimeToMls
} from '../utils/dt';

import crArticles from './crArticles';

const SOURCE_ID = 'fmp_news';

const _crArticle = ({
  title,
  text,
  symbol,
  site,
  publishedDate,
  url
}, nowMls) => {
  const publishedAt = dateTimeToMls(publishedDate);
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: text,
    related: symbol,
    author: site,
    publishedAt,
    timeAgo: safeFormatMls(publishedAt, nowMls),
    url
  };
}

const FmpAdapter = {
  toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: crArticles(json, _crArticle)
      //sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
}

export default FmpAdapter
