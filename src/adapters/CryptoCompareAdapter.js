import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';
import crDescription from '../utils/crDescription';

const _isArr = Array.isArray
, SOURCE_ID = 'cryptocompare_news';

const _toMls = sec => typeof sec === 'number'
 ? sec*1000
 : void 0;

const _toArticles = json => {
  const { Data } = json || {}
  , _timeAgoOptions = formatTimeAgo.crOptions();
  return _isArr(Data) ? Data.map(item => {
    const {
      title,
      body,
      categories,
      url,
      source,
      source_info,
      published_on
    } = item
    , { name } = source_info || {}
    , _publishedOn = _toMls(published_on)
    return {
      source: SOURCE_ID,
      articleId: crId(),
      title, url,
      description: crDescription(body),
      related: categories,
      author: name || source,
      timeAgo: _publishedOn && formatTimeAgo(_publishedOn, _timeAgoOptions),
      publishedAt: _publishedOn
    };
  }) : []
};

const CryptoCompareAdapter = {
  toNews(json, option){
    const { sortOrder } = option
    , articles = _toArticles(json);
    return {
      source: SOURCE_ID,
      articles: articles,
      sortBy: sortOrder
    };
  }
};

export default CryptoCompareAdapter
