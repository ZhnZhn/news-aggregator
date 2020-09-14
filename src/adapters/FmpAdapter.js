import crId from '../utils/crId'

const C = {
  SOURCE: 'fmp_news'
};


const _toDate = strDate => {
  const _arrDateTime = (strDate || '').split(' ')
  , _arrDate = (_arrDateTime[0] || '').split('-')
  , _strDate = _arrDate.reverse().join('-')
  return (_arrDateTime[1] || '') + ' ' + _strDate;
}

const _toArticles = json => {
  if (!Array.isArray(json)) {
    return [];
  }

  const articles = json.map(item => {
      const {
        title, text, symbol,
        site, publishedDate,
        url
      } = item;

      return {
        source: C.SOURCE,
        articleId: crId(),
        title: title,
        description: text,
        related: symbol,
        author: site,
        publishedDate: _toDate(publishedDate),
        url: url
      };
  });
  return articles;
}


const FmpAdapter = {
  toNews(json, option) {
    const articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles,
      //sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
}

export default FmpAdapter
