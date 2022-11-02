import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';
import toFirstUpperCase from '../utils/toFirstUpperCase';

import sanitizeArticle from './sanitizeArticle';

const SOURCE_ID = 'thenewsapi_top';

const _isArr = Array.isArray;

const _toArticles = ({
  data
}) => {
  const _timeAgoOptions = formatTimeAgo.crOptions();

  return _isArr(data)
    ? data.map(item => {
      const {
        title,
        description,
        source,
        published_at,
        url
      } = item
      return {
        source: SOURCE_ID,
        articleId: crId(),
        title,
        description,
        author: source,
        publishedAt: published_at,
        timeAgo: formatTimeAgo(published_at, _timeAgoOptions),
        url
      }
    })
    .map(sanitizeArticle) : [];
}

const _crCaption = ({
  category
}) => `TheNewsApi: ${toFirstUpperCase(category)}`

const TheNewsApiAdapter = {
  toNews: (
    json,
    option
  ) => ({
     source: SOURCE_ID,
     caption: _crCaption(option),
     articles: _toArticles(json)
  })
};

export default TheNewsApiAdapter
