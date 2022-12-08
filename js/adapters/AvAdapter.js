"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _crDescription = _interopRequireDefault(require("../utils/crDescription"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _crArticles = _interopRequireDefault(require("./crArticles"));
var SOURCE_ID = 'av_sentiments';

//YYYYMMDDTHHMMSS
var _toMls = function _toMls(strDate) {
  return (strDate || '').length > 12 ? Date.UTC(strDate.slice(0, 4), parseInt(strDate.slice(4, 6), 10) - 1, strDate.slice(6, 8), strDate.slice(9, 11), strDate.slice(11, 13)) : void 0;
};
var _rounBy = function _rounBy(v) {
  return Math.round(v * 100) / 100;
};
var _crRelated = function _crRelated(overall_sentiment_label, overall_sentiment_score) {
  return [overall_sentiment_label + " (" + _rounBy(overall_sentiment_score) + ")"];
};
var _crArticle = function _crArticle(_ref, timeAgoOptions) {
  var title = _ref.title,
    summary = _ref.summary,
    source = _ref.source,
    time_published = _ref.time_published,
    url = _ref.url,
    overall_sentiment_label = _ref.overall_sentiment_label,
    overall_sentiment_score = _ref.overall_sentiment_score;
  var publishedAt = _toMls(time_published);
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: title,
    description: (0, _crDescription["default"])(summary),
    author: source,
    timeAgo: (0, _formatTimeAgo["default"])(publishedAt, timeAgoOptions),
    related: _crRelated(overall_sentiment_label, overall_sentiment_score),
    publishedAt: publishedAt,
    url: url
  };
};
var _toArticles = function _toArticles(json) {
  var _ref2 = json || {},
    feed = _ref2.feed;
  return (0, _crArticles["default"])(feed, _crArticle);
};
var AvAdapter = {
  toNews: function toNews(json, option) {
    var sortBy = option.sortBy;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy: sortBy
    };
  }
};
var _default = AvAdapter;
exports["default"] = _default;
//# sourceMappingURL=AvAdapter.js.map