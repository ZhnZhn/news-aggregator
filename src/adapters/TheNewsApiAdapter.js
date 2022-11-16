import {
  NewsActions
} from '../flux/actions/NewsActions';

import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';
import toFirstUpperCase from '../utils/toFirstUpperCase';

import sanitizeArticle from './sanitizeArticle';

const SOURCE_ID = 'thenewsapi_top';

const _isArr = Array.isArray;
const _isNumber = n => typeof n === 'number'
  && n-n === 0;

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

const _crNextPage = (
  page,
  maxPage
) => _isNumber(page)
  ? _isNumber(maxPage)
     ? Math.min(page + 1, maxPage)
     : page + 1
  : void 0;

const _crMaxPage = (
  found,
  limit
) => _isNumber(found) && _isNumber(limit)
  ? Math.min(Math.round(found/limit), 20000/limit)
  : '';

const _crConfigPages = meta => {
  const {
    page,
    found,
    limit,
  } = meta || {}
  , maxPage = _crMaxPage(found, limit);
  return [
    _crNextPage(page, maxPage),
    maxPage
  ];
};

const _crPage = (
  json,
  option
) => {
  const { meta } = json || {}
  , [
    nextPage,
    maxPage
  ] = _crConfigPages(meta);
  return nextPage ? {
    nextPage,
    maxPage,
    onPageLoad: () => NewsActions.loadNews({
      nextPage,
      loadId: 'TNT',
      type: option.type,
      source: option.source,
      itemConf: option.itemConf,
      category: option.category,
      locale: option.locale,
      domain: option.domain
    })
  } : void 0;
};

const TheNewsApiAdapter = {
  toNews: (
    json,
    option
  ) => ({
     source: SOURCE_ID,
     caption: _crCaption(option),
     articles: _toArticles(json),
     page: _crPage(json, option)
  })
};

export default TheNewsApiAdapter
