"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _crDescription = _interopRequireDefault(require("../utils/crDescription"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _domSanitize = _interopRequireDefault(require("../utils/domSanitize"));
var _dt = require("../utils/dt");
var _crArticles = _interopRequireDefault(require("./crArticles"));
var _AvFn = require("./AvFn");
var _isArr = Array.isArray,
  _getObjectKeys = Object.keys,
  SOURCE_ID = 'av_sentiments';
var _crOverallSentiment = function _crOverallSentiment(overallSentimentLabel, overallSentimentScore) {
  return (0, _domSanitize["default"])(overallSentimentLabel + " (" + (0, _AvFn.rounBy)(overallSentimentScore) + ")");
};
var _compareByRelevanceScore = function _compareByRelevanceScore(a, b) {
  return b.relevance_score === a.relevance_score ? b.ticker_sentiment_score - a.ticker_sentiment_score : b.relevance_score - a.relevance_score;
};
var _addTickerSentimentTo = function _addTickerSentimentTo(str, item) {
  return str + ((0, _AvFn.rounBy)(item.relevance_score) + " " + item.ticker + " " + item.ticker_sentiment_label + " (" + (0, _AvFn.rounBy)(item.ticker_sentiment_score) + ")\n");
};
var _crTickerSentiment = function _crTickerSentiment(tickerSentiment) {
  if (!_isArr(tickerSentiment)) {
    return '';
  }
  return (0, _domSanitize["default"])(tickerSentiment.sort(_compareByRelevanceScore).reduce(_addTickerSentimentTo, ''));
};
var _crArticle = function _crArticle(_ref, timeAgoOptions) {
  var title = _ref.title,
    summary = _ref.summary,
    source = _ref.source,
    time_published = _ref.time_published,
    url = _ref.url,
    overall_sentiment_label = _ref.overall_sentiment_label,
    overall_sentiment_score = _ref.overall_sentiment_score,
    ticker_sentiment = _ref.ticker_sentiment;
  var publishedAt = (0, _dt.toMls)(time_published);
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: title,
    description: (0, _crDescription["default"])(summary) + "\n\n      " + _crOverallSentiment(overall_sentiment_label, overall_sentiment_score) + "\n\n      " + _crTickerSentiment(ticker_sentiment),
    author: source,
    timeAgo: (0, _formatTimeAgo["default"])(publishedAt, timeAgoOptions),
    publishedAt: publishedAt,
    url: url
  };
};
var _compareByNumberOfSentiment = function _compareByNumberOfSentiment(a, b) {
  return b._n - a._n;
};
var _crTickersSummary = function _crTickersSummary(hmTickers) {
  return _getObjectKeys(hmTickers).reduce(function (arr, ticker) {
    var _sentiments = hmTickers[ticker],
      description = (0, _AvFn.crTickerSentimentDescription)(_sentiments)[0],
      _numberOfSentiment = _sentiments.length;
    if ((0, _AvFn.filterTickerSentiment)(_numberOfSentiment, description)) {
      arr.push({
        _n: _numberOfSentiment,
        source: SOURCE_ID,
        articleId: (0, _crId["default"])(),
        title: (0, _AvFn.crSentimentSummaryTitle)(ticker),
        description: description
      });
    }
    return arr;
  }, []).sort(_compareByNumberOfSentiment);
};
var _crSentimentSummary = function _crSentimentSummary(feed) {
  var _crOverallSentimentDe = (0, _AvFn.crOverallSentimentDescription)(feed),
    description = _crOverallSentimentDe[0],
    hmTickers = _crOverallSentimentDe[1],
    _tickersSummary = _crTickersSummary(hmTickers);
  _tickersSummary.unshift({
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: (0, _AvFn.crSentimentSummaryTitle)('Overall'),
    description: description
  });
  return _tickersSummary;
};
var _crArticlesWithSentiment = function _crArticlesWithSentiment(feed) {
  return _crSentimentSummary(feed).concat((0, _crArticles["default"])(feed, _crArticle));
};
var AvAdapter = {
  toNews: function toNews(json, option) {
    var _ref2 = json || {},
      feed = _ref2.feed,
      sortBy = option.sortBy;
    return {
      source: SOURCE_ID,
      articles: _crArticlesWithSentiment(feed),
      sortBy: sortBy
    };
  }
};
var _default = AvAdapter;
exports["default"] = _default;
//# sourceMappingURL=AvAdapter.js.map