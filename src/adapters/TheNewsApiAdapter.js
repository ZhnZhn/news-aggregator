import { NewsActions } from '../flux/actions/NewsActions';
import { THE_NEWS_API } from '../conf/ProviderNames';

import crId from '../utils/crId';
import formatTimeAgo from '../utils/formatTimeAgo';
import formatNumber from '../utils/formatNumber';
import toFirstUpperCase from '../utils/toFirstUpperCase';

import sanitizeArticle from './sanitizeArticle';

const _isArr = Array.isArray;
const _isNumber = n => typeof n === 'number'
  && n-n === 0;

const _isTopQuery = (
  option
) => option.loadId === 'TNT';

const _toArticles = (
  { data },
  sourceId
) => {
  const _timeAgoOptions = formatTimeAgo.crOptions();

  return _isArr(data)
    ? data.map(item => {
      const {
        title,
        description,
        snippet,
        source,
        categories,
        published_at,
        url
      } = item;
      return sanitizeArticle({
           source: sourceId,
           articleId: crId(),
           title,
           description: description || snippet,
           author: source,
           related: categories,
           publishedAt: published_at,
           timeAgo: formatTimeAgo(published_at, _timeAgoOptions),
           url
        })
      })
    : [];
}

const _crCaption = (
  option
) => {
  const _captionToken = _isTopQuery(option)
    ? toFirstUpperCase(option.category)
    : option.search;
  return `${THE_NEWS_API}: ${_captionToken}`;
};

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
  ? formatNumber(Math.ceil(found/limit))
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

const _crNextPageCommonOption = ({
  type,
  source,
  itemConf,
  category
}) => ({
  type,
  source,
  itemConf,
  category
});

const _crNextPageOption = (
  option
) => _isTopQuery(option)
  ? {
     ..._crNextPageCommonOption(option),
     loadId: 'TNT',
     locale: option.locale,
     domain: option.domain
    }
  : {
     ..._crNextPageCommonOption(option),
     loadId: 'TNS',
     search: option.search,
     sortBy: option.sortBy
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
      ..._crNextPageOption(option)
    })
  } : void 0;
};

const _getSourceId = (
  option
) => option.itemConf.paneId;

const TheNewsApiAdapter = {
  toNews: (
    json,
    option
  ) => {
    const _sourceId = _getSourceId(option);
    return {
       source: _sourceId,
       caption: _crCaption(option),
       articles: _toArticles(json, _sourceId),
       page: _crPage(json, option)
    };
  }
};

export default TheNewsApiAdapter
