import ut from '../utils/ut';
import {
  crTimeAgoOptins,
  formatTimeAgo
} from '../utils/formatTimeAgo';

const {
  crId,
  replaceDecCodes
} = ut;

const _isArr = Array.isArray;
const SOURCE_ID = 'cryptocompare_news';

const _toMls = sec => typeof sec === 'number'
 ? sec*1000
 : void 0;

const _toArticles = json => {
  const { Data } = json || {};
  if (!_isArr(Data)) {
    return [];
  }
  const _timeAgoOptions = crTimeAgoOptins();
  return Data.map(item => {
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
    , _publishedOn = _toMls(published_on);
    return {
      source: SOURCE_ID,
      articleId: crId(),
      title, url,
      description: replaceDecCodes(body),
      related: categories,
      author: name || source,
      timeAgo: _publishedOn && formatTimeAgo(_publishedOn, _timeAgoOptions),
      publishedAt: _publishedOn && (new Date(_publishedOn)).toISOString()
    };
  })
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
