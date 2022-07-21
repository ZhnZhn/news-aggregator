import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';

import crArticles from './crArticles';


const SOURCE_ID = 'fmp_news';

const _toDate = strDate => {
  const _arrDateTime = (strDate || '').split(' ')
  , _arrDate = (_arrDateTime[0] || '').split('-')
  , _strDate = _arrDate.reverse().join('-');
  return (_arrDateTime[1] || '') + ' ' + _strDate;
};

const _crArticle = ({
  title,
  text,
  symbol,
  site,
  publishedDate,
  url
}, timeAgoOptions) => ({
  source: SOURCE_ID,
  articleId: crId(),
  title,
  description: text,
  related: symbol,
  author: site,
  publishedDate: _toDate(publishedDate),
  timeAgo: formatTimeAgo(publishedDate, timeAgoOptions),
  url
})

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
