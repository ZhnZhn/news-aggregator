import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';
import crDescription from '../utils/crDescription';

import crArticles from './crArticles';

const SOURCE_ID = 'cryptocompare_news'
, _toMls = sec => typeof sec === 'number'
   ? sec*1000
   : void 0;

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
  , _publishedOn = _toMls(published_on);
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
