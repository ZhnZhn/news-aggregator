"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _domSanitize = _interopRequireDefault(require("../utils/domSanitize"));
var _crId = _interopRequireDefault(require("../utils/crId"));
var _formatNumber = _interopRequireDefault(require("../utils/formatNumber"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _crDescription = _interopRequireDefault(require("../utils/crDescription"));
var _decodeHTMLEntities = _interopRequireDefault(require("../utils/decodeHTMLEntities"));
var _RedditApi = require("../api/RedditApi");
var _adapterFn = require("./adapterFn");
var _crArticles = _interopRequireDefault(require("./crArticles"));
const SOURCE_ID = 'rd_topby';
const _isArr = Array.isArray;
const _isStr = v => typeof v === 'string';
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
  return _strTitle && _strTag && !_isTitleStartWithTag(_strTitle, _strTag) ? _strTitle + " (" + _strTag + ")" : _strTitle;
};
const _crArticle = (_ref, timeAgoOptions) => {
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
    source: SOURCE_ID,
    articleId: (0, _crId.default)(),
    title: (0, _decodeHTMLEntities.default)(_title),
    description: (0, _crDescription.default)(selftext),
    author: _author,
    related: domain,
    timeAgo: (0, _formatTimeAgo.default)(publishedAt, timeAgoOptions),
    publishedAt,
    url
  };
};
const _filterItemBy = item => {
  const {
    data
  } = item || {};
  return data && !data.over_18 && !data.quarantine && !data.author_is_blocked;
};
const _crSubredditItem = arr => {
  const item = _isArr(arr) ? arr[0] : void 0,
    {
      data
    } = item || {},
    subreddit = (0, _domSanitize.default)(data.subreddit),
    subscribers = (0, _formatNumber.default)(data.subreddit_subscribers);
  return data ? {
    source: SOURCE_ID,
    articleId: (0, _crId.default)(),
    title: "r/" + subreddit + " " + subscribers,
    url: _RedditApi.API_URL + "/" + subreddit
  } : void 0;
};
const _toArticles = json => {
  const {
      data
    } = json || {},
    {
      children
    } = data || {},
    _articles = (0, _crArticles.default)(children.filter(_filterItemBy), _crArticle),
    subbredditItem = _crSubredditItem(children);
  if (subbredditItem) {
    _articles.unshift(subbredditItem);
  }
  return _articles;
};
const RedditAdapter = {
  toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};
var _default = RedditAdapter;
exports.default = _default;
//# sourceMappingURL=RedditAdapter.js.map