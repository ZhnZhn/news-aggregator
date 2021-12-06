import ut from '../utils/ut';
import formatTimeAgo from '../utils/formatTimeAgo';

const { crId } = ut;
const _isArr = Array.isArray;

const SOURCE_ID = 'messari_news';

const _crRelated = tags => (tags || [])
 .filter(Boolean)
 .map(item => `#${item}`)
 .join(' ');

const _toArticles = (json) => {
  const { data } = json || {}
  , _timeAgoOptions = formatTimeAgo.crOptions();
  return _isArr(data) ? data.map(item => {
    const {
      title,
      tags,
      published_at, url,
      author
    } = item
    , { name } = author || {};
    return {
      source: SOURCE_ID,
      articleId: crId(),
      title, url,
      author: name,
      related: _crRelated(tags),
      publishedAt: published_at,
      timeAgo: formatTimeAgo(published_at, _timeAgoOptions),
    };
  }) : [];
};

const MessariAdapter = {
  toNews(json, option){
    const articles = _toArticles(json);
    return {
      source: SOURCE_ID,
      articles: articles
    };
  }
};

export default MessariAdapter
