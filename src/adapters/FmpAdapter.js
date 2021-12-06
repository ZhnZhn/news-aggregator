import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';

const SOURCE_ID = 'fmp_news';

const _isArr = Array.isArray;

const _toDate = strDate => {
  const _arrDateTime = (strDate || '').split(' ')
  , _arrDate = (_arrDateTime[0] || '').split('-')
  , _strDate = _arrDate.reverse().join('-')
  return (_arrDateTime[1] || '') + ' ' + _strDate;
};

const _toArticles = json => {
  const _timeAgoOptions = formatTimeAgo.crOptions()
  return _isArr(json) ? json.map(item => {
      const {
        title, text, symbol,
        site, publishedDate,
        url
      } = item;

      return {
        source: SOURCE_ID,
        articleId: crId(),
        title, url,
        description: text,
        related: symbol,
        author: site,
        publishedDate: _toDate(publishedDate),
        timeAgo: formatTimeAgo(publishedDate, _timeAgoOptions)
      };
  }) : [];
};


const FmpAdapter = {
  toNews(json, option) {
    const articles = _toArticles(json);

    return {
      source: SOURCE_ID,
      articles: articles,
      //sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
}

export default FmpAdapter
