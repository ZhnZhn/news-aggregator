"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _crDescription = _interopRequireDefault(require("../utils/crDescription"));
var _adapterFn = require("./adapterFn");
var _crArticles = _interopRequireDefault(require("./crArticles"));
var SOURCE_ID = 'rd_topby';
var _isStr = function _isStr(v) {
  return typeof v === 'string';
};
var _isTitleStartWithTag = function _isTitleStartWithTag(strTitle, strTag) {
  if (strTitle[0] === '[') {
    var _indexOfClosedBracket = strTitle.indexOf(']');
    return _indexOfClosedBracket !== -1 && strTitle.slice(1, _indexOfClosedBracket).trim() === strTag;
  }
};
var _trimStr = function _trimStr(v) {
  return _isStr(v) ? v.trim() : '';
};
var _crTitle = function _crTitle(title, tag) {
  var _strTitle = _trimStr(title),
    _strTag = _trimStr(tag);
  return _strTitle && _strTag && !_isTitleStartWithTag(_strTitle, _strTag) ? _strTitle + " (" + _strTag + ")" : _strTitle;
};
var _crArticle = function _crArticle(_ref, timeAgoOptions) {
  var data = _ref.data;
  var title = data.title,
    url = data.url,
    selftext = data.selftext,
    link_flair_text = data.link_flair_text,
    domain = data.domain,
    created_utc = data.created_utc,
    author = data.author,
    score = data.score,
    upvote_ratio = data.upvote_ratio,
    publishedAt = (0, _adapterFn.toMls)(created_utc),
    _author = (0, _adapterFn.joinByBlank)(score, upvote_ratio, author),
    _title = _crTitle(title, link_flair_text);
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: _title,
    description: (0, _crDescription["default"])(selftext),
    author: _author,
    related: domain,
    timeAgo: (0, _formatTimeAgo["default"])(publishedAt, timeAgoOptions),
    publishedAt: publishedAt,
    url: url
  };
};
var _filterItemBy = function _filterItemBy(item) {
  var _ref2 = item || {},
    data = _ref2.data;
  return data && !data.over_18 && !data.quarantine && !data.author_is_blocked;
};
var _toArticles = function _toArticles(json) {
  var _ref3 = json || {},
    data = _ref3.data,
    _ref4 = data || {},
    children = _ref4.children;
  return (0, _crArticles["default"])(children.filter(_filterItemBy), _crArticle);
};
var RedditAdapter = {
  toNews: function toNews(json, option) {
    return {
      source: SOURCE_ID,
      articles: _toArticles(json)
    };
  }
};
var _default = RedditAdapter;
exports["default"] = _default;
//# sourceMappingURL=RedditAdapter.js.map