"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _RedditApi = require("../api/RedditApi");
var _adapterFn = require("./adapterFn");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const _rSourceId = {
  REDDIT: 'rd_topby',
  REDDIT_SEARCH: 'rd_searchby'
};
const NO_ITEMS_TITLE = "No items were found for this query",
  _isArr = Array.isArray,
  _isStr = v => typeof v === 'string',
  _isObj = v => v && typeof v === 'object';
const _isTitleStartWithTag = (strTitle, strTag) => {
  if (strTitle[0] === '[') {
    const _indexOfClosedBracket = strTitle.indexOf(']');
    return _indexOfClosedBracket !== -1 && strTitle.slice(1, _indexOfClosedBracket).trim() === strTag;
  }
};
const _trimStr = v => _isStr(v) ? v.trim() : '';
const _crTitle = (title, tag) => {
  const _strTitle = _trimStr(title),
    _strTag = _trimStr(tag);
  return _strTitle && _strTag && !_isTitleStartWithTag(_strTitle, _strTag) ? `${_strTitle} (${_strTag})` : _strTitle;
};
const _crArticle = (sourceId, _ref, timeAgoOptions) => {
  let {
    data
  } = _ref;
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
    } = data,
    publishedAt = (0, _adapterFn.toMls)(created_utc),
    _author = (0, _adapterFn.joinByBlank)(score, upvote_ratio, author),
    _title = _crTitle(title, link_flair_text);
  return {
    source: sourceId,
    articleId: (0, _utils.crId)(),
    title: (0, _utils.decodeHTMLEntities)(_title),
    description: (0, _utils.crDescription)(selftext),
    author: _author,
    related: domain,
    timeAgo: (0, _utils.formatTimeAgo)(publishedAt, timeAgoOptions),
    publishedAt,
    url
  };
};
const _fFilterItemBy = subreddit => item => {
  const {
    data
  } = item || {};
  return data && data.subreddit === subreddit && !data.over_18 && !data.quarantine && !data.author_is_blocked;
};
const _crTitleAndUrl = data => {
  const {
      subreddit,
      subreddit_subscribers
    } = data,
    _subreddit = (0, _utils.decodeHTMLEntities)((0, _utils.domSanitize)(subreddit)),
    _subscribers = (0, _utils.formatNumber)(subreddit_subscribers);
  return {
    title: `r/${_subreddit} ${_subscribers}`,
    url: `${_RedditApi.API_URL}/${_subreddit}`
  };
};
const _crArticleId = sourceId => ({
  source: sourceId,
  articleId: (0, _utils.crId)()
});
const _crSubredditItem = (arr, sourceId) => {
  const item = _isArr(arr) ? arr[0] : void 0,
    {
      data
    } = item || {};
  return _isObj(data) ? {
    ..._crTitleAndUrl(data),
    ..._crArticleId(sourceId)
  } : void 0;
};
const _toArticles = (json, sourceId, subreddit) => {
  const {
      data
    } = json || {},
    {
      children
    } = data || {},
    _items = children.filter(_fFilterItemBy(subreddit)),
    _articles = (0, _crArticles.default)(_items, (0, _utils.bindTo)(_crArticle, sourceId)),
    subbredditItem = _crSubredditItem(_items, sourceId);
  if (subbredditItem) {
    _articles.unshift(subbredditItem);
  }
  if (_articles.length === 0) {
    _articles.unshift({
      title: NO_ITEMS_TITLE,
      ..._crArticleId(sourceId)
    });
  }
  return _articles;
};
const RedditAdapter = {
  toNews(json, option) {
    const {
        type,
        subreddit
      } = option,
      _sourceId = _rSourceId[type];
    return {
      source: _sourceId,
      articles: _toArticles(json, _sourceId, subreddit)
    };
  }
};
var _default = exports.default = RedditAdapter;
//# sourceMappingURL=RedditAdapter.js.map