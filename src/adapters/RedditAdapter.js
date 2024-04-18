import {
  crId,
  crDescription,
  bindTo,
  domSanitize,
  decodeHTMLEntities,
  toLowerCase,
  trimStr,
  formatTimeAgo,
  formatNumber,
} from '../utils';
import {
  isArr,
  isObj
} from '../utils/isTypeFn';

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

const _crSubredditUrl = (
  subreddit
) => domSanitize(`${API_URL}/${subreddit}`);

const _crNoItemsTitle = ({
  subreddit,
  t,
  q
}) => {
  const tokenQuery = q
    ? ` for ${q} query `
    : ' ';
  return domSanitize(`No items were found in r/${subreddit}${tokenQuery}with ${t} period`);
}

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

const _crTitle = (
  title,
  tag
) => {
  const _strTitle = trimStr(title)
  , _strTag = trimStr(tag);
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

const _fFilterItemBy = (
  subreddit
) => (
  item
) => {
  const { data } = item || {};
  return data
    && toLowerCase(data.subreddit) === subreddit
    && !data.over_18
    && !data.quarantine
    && !data.author_is_blocked;
};

const _crSubredditTitleUrl = (
  title,
  subreddit
) => ({
  title: domSanitize(title),
  url: _crSubredditUrl(subreddit)
})

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
  return _crSubredditTitleUrl(
    `r/${_subreddit} ${_subscribers}`,
    _subreddit
  );
};

const _crArticleId = (
  sourceId
) => ({
  source: sourceId,
  articleId: crId()
});

const _crSubredditItem = (
  arr,
  sourceId
) => {
  const item = isArr(arr)
    ? arr[0]
    : void 0
  , { data } = item || {};
  return isObj(data)
    ? {
      ..._crTitleAndUrl(data),
      ..._crArticleId(sourceId)
     }
    : void 0;
};

const _toArticles = (
  json,
  option,
  sourceId
) => {
  const { data } = json || {}
  , { children } = data || {}
  , { subreddit } = option
  , _items = children.filter(
      _fFilterItemBy(toLowerCase(subreddit))
    )
  , _articles = crArticles(
     _items,
     bindTo(_crArticle, sourceId)
  )
  , subbredditItem = _crSubredditItem(
     _items,
     sourceId
   );

  if (subbredditItem) {
    _articles.unshift(subbredditItem)
  }
  if (_articles.length === 0){
    _articles.unshift({
      ..._crSubredditTitleUrl(
        _crNoItemsTitle(option),
        subreddit
      ),
      ..._crArticleId(sourceId),
    })
  }

  return _articles;
};

const RedditAdapter = {
  toNews(json, option){
    const _sourceId = _rSourceId[option.type];
    return {
      source: _sourceId,
      articles: _toArticles(
        json,
        option,
        _sourceId
      )
    };
  }
};

export default RedditAdapter
