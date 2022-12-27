"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crId = _interopRequireDefault(require("../utils/crId"));
var _crDescription = _interopRequireDefault(require("../utils/crDescription"));
var _formatTimeAgo = _interopRequireDefault(require("../utils/formatTimeAgo"));
var _domSanitize = _interopRequireDefault(require("../utils/domSanitize"));
var _crArticles = _interopRequireDefault(require("./crArticles"));
var _isArr = Array.isArray;
var SOURCE_ID = 'av_sentiments';

//YYYYMMDDTHHMMSS
var _toMls = function _toMls(strDate) {
  return (strDate || '').length > 12 ? Date.UTC(strDate.slice(0, 4), parseInt(strDate.slice(4, 6), 10) - 1, strDate.slice(6, 8), strDate.slice(9, 11), strDate.slice(11, 13)) : void 0;
};
var _rounBy = function _rounBy(v) {
  return Math.round(v * 100) / 100;
};
var _crOverallSentiment = function _crOverallSentiment(overall_sentiment_label, overall_sentiment_score) {
  return (0, _domSanitize["default"])(overall_sentiment_label + " (" + _rounBy(overall_sentiment_score) + ")");
};
var _compareByRelevanceScore = function _compareByRelevanceScore(a, b) {
  return b.relevance_score === a.relevance_score ? b.ticker_sentiment_score - a.ticker_sentiment_score : b.relevance_score - a.relevance_score;
};
var _addTickerSentimentTo = function _addTickerSentimentTo(str, item) {
  return str + (_rounBy(item.relevance_score) + " " + item.ticker + " " + item.ticker_sentiment_label + " (" + _rounBy(item.ticker_sentiment_score) + ")\n");
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
  var publishedAt = _toMls(time_published);
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
var _crScoreList = function _crScoreList(arrScores) {
  var _strScore = arrScores.join(', ');
  return _strScore === '' ? '' : " (" + _strScore + ")";
};
var _crValueName = function _crValueName(value, name) {
  return value ? value + " " + name : '';
};
var _crSentimentDescription = function _crSentimentDescription(feed) {
  var _arrBullish = [],
    _arrBearish = [];
  var _bullish = 0,
    _somewhatBullish = 0,
    _neutral = 0,
    _somewhatBearish = 0,
    _bearish = 0;
  feed.forEach(function (item) {
    var score = _rounBy(item.overall_sentiment_score);
    if (score >= 0.35) {
      _bullish++;
      _arrBullish.push(score);
    } else if (score < 0.35 && score >= 0.15) {
      _somewhatBullish++;
    } else if (score < 0.15 && score > -0.15) {
      _neutral++;
    } else if (score <= -0.15 && score > -0.35) {
      _somewhatBearish++;
    } else if (score <= -0.35 && score >= -1) {
      _bearish++;
      _arrBearish.push(score);
    }
  });
  return [_crValueName(_bullish, "Bullish" + _crScoreList(_arrBullish)), _crValueName(_somewhatBullish, 'Somewhat-Bullish'), _crValueName(_neutral, 'Neutral'), _crValueName(_somewhatBearish, 'Somewhat-Bearish'), _crValueName(_bearish, "Bearish" + _crScoreList(_arrBearish))].filter(Boolean).join('\n');
};
var _crSentimentSummary = function _crSentimentSummary(feed) {
  return {
    source: SOURCE_ID,
    articleId: (0, _crId["default"])(),
    title: 'Overall Sentiment Summary',
    description: _crSentimentDescription(feed)
  };
};
var AvAdapter = {
  toNews: function toNews(json, option) {
    var _ref2 = json || {},
      feed = _ref2.feed,
      sortBy = option.sortBy,
      articles = (0, _crArticles["default"])(feed, _crArticle);
    articles.unshift(_crSentimentSummary(feed));
    return {
      source: SOURCE_ID,
      articles: articles,
      sortBy: sortBy
    };
  }
};
var _default = AvAdapter;
exports["default"] = _default;
//# sourceMappingURL=AvAdapter.js.map