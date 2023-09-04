import domSanitize from '../utils/domSanitize';
import crId from '../utils/crId';
import formatNumber from '../utils/formatNumber';
import formatTimeAgo from '../utils/formatTimeAgo';
import crDescription from '../utils/crDescription';
import decodeHTMLEntities from '../utils/decodeHTMLEntities';

import { API_URL } from '../api/RedditApi';

import {
  toMls,
  joinByBlank
} from './adapterFn';
import crArticles from './crArticles';

const SOURCE_ID = 'rd_topby';
const _isArr = Array.isArray;
const _isStr = v => typeof v === 'string';

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

const _crArticle = ({
  data
}, timeAgoOptions) => {
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
    source: SOURCE_ID,
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

const _crSubredditItem = (arr) => {
  const item = _isArr(arr)
    ? arr[0]
    : void 0
  , { data } = item || {}
  , subreddit = domSanitize(data.subreddit)
  , subscribers = formatNumber(
     data.subreddit_subscribers
  );
  return data
    ? {
      source: SOURCE_ID,
      articleId: crId(),
      title: `r/${subreddit} ${subscribers}`,
      url: `${API_URL}/${subreddit}`
     }
    : void 0;
};

const _toArticles = json => {
  const { data } = json || {}
  , { children } = data || {}
  , _articles = crArticles(
    children.filter(_filterItemBy),
    _crArticle
  )
  , subbredditItem = _crSubredditItem(children);

  if (subbredditItem) {
    _articles.unshift(subbredditItem)
  }

  return _articles;
};

const RedditAdapter = {
  toNews(json, option){
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
    };
  }
};

export default RedditAdapter
