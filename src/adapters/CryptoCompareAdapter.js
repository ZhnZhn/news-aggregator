import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';
import crDescription from '../utils/crDescription';

import { toMls } from './adapterFn';
import crArticles from './crArticles';

const SOURCE_ID = 'cryptocompare_news';

const _crArticle = ({
  title,
  body,
  categories,
  url,
  source,
  source_info,
  published_on
}, timeAgoOptions) => {
  const { name } = source_info || {}
  , _publishedOn = toMls(published_on);
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: crDescription(body),
    related: categories,
    author: name || source,
    timeAgo: _publishedOn && formatTimeAgo(_publishedOn, timeAgoOptions),
    publishedAt: _publishedOn,
    url
  };
}

const _toArticles = json => {
  const { Data } = json || {};
  return crArticles(Data, _crArticle);
};

const CryptoCompareAdapter = {
  toNews(json, option){
    const { sortOrder } = option;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy: sortOrder
    };
  }
};

export default CryptoCompareAdapter
