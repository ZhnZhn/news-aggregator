import {
  crId,
  crDescription,
  bindTo,
  domSanitize,
  decodeHTMLEntities,
  formatTimeAgo,
  formatNumber,
} from '../utils';

import { API_URL } from '../api/RedditApi';

import {
  toMls,
  joinByBlank
} from './adapterFn';
import crArticles from './crArticles';

const _rSourceId = {
  REDDIT: 'rd_topby',
  REDDIT_SEARCH: 'rd_searchby'
}
const _isArr = Array.isArray;
const _isStr = v => typeof v === 'string';
const _isObj = v => v && typeof v === 'object';

const _isTitleStartWithTag = (
  strTitle,
  strTag
) => {
  if (strTitle[0] === '[') {
    const _indexOfClosedBracket = strTitle.indexOf(']');
    return _indexOfClosedBracket !== -1
      && strTitle.slice(1, _indexOfClosedBracket).trim() === strTag;
  }
};

const _trimStr = v => _isStr(v) ? v.trim() : '';

const _crTitle = (
  title,
  tag
) => {
  const _strTitle = _trimStr(title)
  , _strTag = _trimStr(tag);
  return _strTitle && _strTag && !_isTitleStartWithTag(_strTitle, _strTag)
    ? `${_strTitle} (${_strTag})`
    : _strTitle;
};

const _crArticle = (
  sourceId,
  { data },
  timeAgoOptions
) => {
  const {
    title,
    url,
    selftext,
    link_flair_text,
    domain,
    created_utc,
    author,
    score,
    upvote_ratio
  } = data
  , publishedAt = toMls(created_utc)
  , _author = joinByBlank(score, upvote_ratio, author)
  , _title = _crTitle(title, link_flair_text);

  return {
    source: sourceId,
    articleId: crId(),
    title: decodeHTMLEntities(_title),
    description: crDescription(selftext),
    author: _author,
    related: domain,
    timeAgo: formatTimeAgo(publishedAt, timeAgoOptions),
    publishedAt,
    url
  };
}

const _filterItemBy = (
  item
) => {
  const { data } = item || {};
  return data
    && !data.over_18
    && !data.quarantine
    && !data.author_is_blocked;
}

const _crTitleAndUrl = (
  data
) => {
  const {
    subreddit,
    subreddit_subscribers
  } = data
  , _subreddit = decodeHTMLEntities(
    domSanitize(subreddit)
  )
  , _subscribers = formatNumber(
     subreddit_subscribers
  );
  return {
    title: `r/${_subreddit} ${_subscribers}`,
    url: `${API_URL}/${_subreddit}`
  };
};

const _crSubredditItem = (
  arr,
  sourceId
) => {
  const item = _isArr(arr)
    ? arr[0]
    : void 0
  , { data } = item || {};
  return _isObj(data)
    ? {
      ..._crTitleAndUrl(data),
      source: sourceId,
      articleId: crId()
     }
    : void 0;
};

const _toArticles = (
  json,
  sourceId
) => {
  const { data } = json || {}
  , { children } = data || {}
  , _articles = crArticles(
    children.filter(_filterItemBy),
    bindTo(_crArticle, sourceId)
  )
  , subbredditItem = _crSubredditItem(
     children,
     sourceId
   );

  if (subbredditItem) {
    _articles.unshift(subbredditItem)
  }

  return _articles;
};

const RedditAdapter = {
  toNews(json, option){
    const { type } = option
    , _sourceId = _rSourceId[type];
    return {
      source: _sourceId,
      articles: _toArticles(json, _sourceId),
    };
  }
};

export default RedditAdapter
