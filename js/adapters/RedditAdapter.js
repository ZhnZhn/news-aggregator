"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _itemStore = require("../flux/itemStore");
var _isTypeFn = require("../utils/isTypeFn");
var _strFn = require("../utils/strFn");
var _joinBy = require("../utils/joinBy");
var _formatNumber = require("../utils/formatNumber");
var _domSanitize = require("../utils/domSanitize");
var _crId = require("../utils/crId");
var _bindTo = require("../utils/bindTo");
var _formatDate = require("../utils/formatDate");
var _RedditApi = require("../api/RedditApi");
var _adapterFn = require("./adapterFn");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const _rSourceId = {
  REDDIT: 'rd_topby',
  REDDIT_SEARCH: 'rd_searchby'
};
const _crSubredditUrl = subreddit => (0, _domSanitize.domSanitize)(`${_RedditApi.API_URL}/${subreddit}`);
const _crNoItemsTitle = _ref => {
  let {
    subreddit,
    t,
    q
  } = _ref;
  const tokenQuery = q ? ` for ${q} query ` : ' ';
  return (0, _domSanitize.domSanitize)(`No items were found in r/${subreddit}${tokenQuery}with ${t} period`);
};
const _isTitleStartWithTag = (strTitle, strTag) => {
  if (strTitle[0] === '[') {
    const _indexOfClosedBracket = strTitle.indexOf(']');
    return _indexOfClosedBracket !== -1 && strTitle.slice(1, _indexOfClosedBracket).trim() === strTag;
  }
};
const _crTitle = (title, tag) => {
  const _strTitle = (0, _strFn.trimStr)(title),
    _strTag = (0, _strFn.trimStr)(tag);
  return _strTitle && _strTag && !_isTitleStartWithTag(_strTitle, _strTag) ? `${_strTitle} (${_strTag})` : _strTitle;
};
const _crArticle = (sourceId, _ref2, nowMls) => {
  let {
    data
  } = _ref2;
  const {
      title,
      url,
      selftext,
      link_flair_text,
      domain,
      created_utc,
      author,
      score,
      upvote_ratio,
      permalink,
      num_comments
    } = data,
    publishedAt = (0, _adapterFn.toMls)(created_utc),
    _author = (0, _joinBy.joinByBlank)(score, upvote_ratio, author),
    _title = _crTitle(title, link_flair_text),
    _commentsUrl = `${_RedditApi.REDDIT_URL}${permalink}`;
  return {
    source: sourceId,
    articleId: (0, _crId.crId)(),
    title: (0, _adapterFn.crTitle)(_title),
    description: (0, _adapterFn.crDescription)(selftext),
    author: _author,
    related: domain,
    timeAgo: (0, _formatDate.safeFormatMls)(publishedAt, nowMls),
    publishedAt,
    url,
    commentsUrl: url === _commentsUrl ? void 0 : _commentsUrl,
    numOfComments: (0, _isTypeFn.isNumber)(num_comments) ? num_comments === 0 ? '' : '' + num_comments : ''
  };
};
const _fFilterItemBy = subreddit => item => {
  const {
    data
  } = item || {};
  return data && (0, _strFn.toLowerCase)(data.subreddit) === subreddit && !data.over_18 && !data.quarantine && !data.author_is_blocked;
};
const _crSubredditTitleUrl = (title, subreddit) => ({
  title: (0, _domSanitize.domSanitize)(title),
  url: _crSubredditUrl(subreddit)
});
const _crTitleAndUrl = data => {
  const {
      subreddit,
      subreddit_subscribers
    } = data,
    _subreddit = (0, _adapterFn.crTitle)((0, _domSanitize.domSanitize)(subreddit)),
    _subscribers = (0, _formatNumber.formatNumber)(subreddit_subscribers);
  return _crSubredditTitleUrl(`r/${_subreddit} ${_subscribers}`, _subreddit);
};
const _crArticleId = sourceId => ({
  source: sourceId,
  articleId: (0, _crId.crId)()
});
const _crSubredditItem = (arr, sourceId) => {
  const item = (0, _isTypeFn.isArr)(arr) ? arr[0] : void 0,
    {
      data
    } = item || {};
  return (0, _isTypeFn.isObj)(data) ? {
    ..._crTitleAndUrl(data),
    ..._crArticleId(sourceId)
  } : void 0;
};
const _toArticles = (json, option, sourceId) => {
  const items = (0, _RedditApi.getItems)(json),
    {
      subreddit
    } = option,
    _items = items.filter(_fFilterItemBy((0, _strFn.toLowerCase)(subreddit))),
    _articles = (0, _crArticles.default)(_items, (0, _bindTo.bindTo)(_crArticle, sourceId)),
    subbredditItem = _crSubredditItem(_items, sourceId);
  if (subbredditItem) {
    _articles.unshift(subbredditItem);
  }
  if (_articles.length === 0) {
    _articles.unshift({
      ..._crSubredditTitleUrl(_crNoItemsTitle(option), subreddit),
      ..._crArticleId(sourceId)
    });
  }
  return _articles;
};
const _getOptionAfter = (json, limit) => {
  const items = (0, _RedditApi.getItems)(json),
    itemsLength = items.length,
    itemData = (items[itemsLength - 1] || {}).data || {};
  return itemsLength === limit && parseInt(itemData.score) >= 1 ? itemData.name : void 0;
};
const _crPage = (json, option) => {
  const after = _getOptionAfter(json, parseInt(option.limit));
  if (!after) {
    return;
  }
  option.after = after;
  (0, _adapterFn.updateNextPage)(option);
  return {
    nextPage: option._nextPage,
    onPageLoad: () => (0, _itemStore.loadItem)(option)
  };
};
const RedditAdapter = {
  toNews(json, option) {
    const _sourceId = _rSourceId[option.type];
    return {
      source: _sourceId,
      articles: _toArticles(json, option, _sourceId),
      page: _crPage(json, option)
    };
  }
};
var _default = exports.default = RedditAdapter;
//# sourceMappingURL=RedditAdapter.js.map