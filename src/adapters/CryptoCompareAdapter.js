import ut from '../utils/ut';
import formatTimeAgo from '../utils/formatTimeAgo';
import splitByParagraph from '../utils/splitByParagraph';

const {
  crId,
  decodeHTMLEntities
} = ut;


const _isArr = Array.isArray;
const SOURCE_ID = 'cryptocompare_news';

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
    , description = splitByParagraph(decodeHTMLEntities(body));
    return {
      source: SOURCE_ID,
      articleId: crId(),
      title, url,
      description,
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
