import { loadItem } from '../flux/itemStore';
import { THE_NEWS_API } from '../conf/ProviderNames';

import { isArr, isNumber } from '../utils/isTypeFn';
import { dateTimeToMls } from '../utils/dt';

import {
  crId,
  safeFormatMls,
  formatNumber,
  toFirstUpperCase
} from '../utils';

import sanitizeArticle from './sanitizeArticle';

const _isTopQuery = (
  option
) => option.loadId === 'TNT';

const _toArticles = (
  { data },
  sourceId
) => {
  const _nowMls = Date.now();
  return isArr(data)
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
           timeAgo: safeFormatMls(dateTimeToMls(published_at), _nowMls),
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
) => isNumber(page)
  ? isNumber(maxPage)
     ? Math.min(page + 1, maxPage)
     : page + 1
  : void 0;

const _crMaxPage = (
  found,
  limit
) => isNumber(found) && isNumber(limit)
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
    onPageLoad: () => loadItem({
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
