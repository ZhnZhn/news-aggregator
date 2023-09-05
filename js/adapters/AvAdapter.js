"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _dt = require("../utils/dt");
var _crArticles = _interopRequireDefault(require("./crArticles"));
var _AvFn = require("./AvFn");
const _isArr = Array.isArray,
  _getObjectKeys = Object.keys,
  SOURCE_ID = 'av_sentiments';
const _crOverallSentiment = (overallSentimentLabel, overallSentimentScore) => (0, _utils.domSanitize)(overallSentimentLabel + " (" + (0, _AvFn.rounBy)(overallSentimentScore) + ")");
const _compareByRelevanceScore = (a, b) => b.relevance_score === a.relevance_score ? b.ticker_sentiment_score - a.ticker_sentiment_score : b.relevance_score - a.relevance_score;
const _addTickerSentimentTo = (str, item) => str + ((0, _AvFn.rounBy)(item.relevance_score) + " " + item.ticker + " " + item.ticker_sentiment_label + " (" + (0, _AvFn.rounBy)(item.ticker_sentiment_score) + ")\n");
const _crTickerSentiment = tickerSentiment => {
  if (!_isArr(tickerSentiment)) {
    return '';
  }
  return (0, _utils.domSanitize)(tickerSentiment.sort(_compareByRelevanceScore).reduce(_addTickerSentimentTo, ''));
};
const _crArticle = (_ref, timeAgoOptions) => {
  let {
    title,
    summary,
    source,
    time_published,
    url,
    overall_sentiment_label,
    overall_sentiment_score,
    ticker_sentiment
  } = _ref;
  const publishedAt = (0, _dt.toMls)(time_published);
  return {
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title,
    description: (0, _utils.crDescription)(summary) + "\n\n      " + _crOverallSentiment(overall_sentiment_label, overall_sentiment_score) + "\n\n      " + _crTickerSentiment(ticker_sentiment),
    author: source,
    timeAgo: (0, _utils.formatTimeAgo)(publishedAt, timeAgoOptions),
    publishedAt,
    url
  };
};
const _compareByNumberOfSentiment = (a, b) => b._n - a._n;
const _crTickersSummary = hmTickers => _getObjectKeys(hmTickers).reduce((arr, ticker) => {
  const _sentiments = hmTickers[ticker],
    description = (0, _AvFn.crTickerSentimentDescription)(_sentiments)[0],
    _numberOfSentiment = _sentiments.length;
  if ((0, _AvFn.filterTickerSentiment)(_numberOfSentiment, description)) {
    arr.push({
      _n: _numberOfSentiment,
      source: SOURCE_ID,
      articleId: (0, _utils.crId)(),
      title: (0, _AvFn.crSentimentSummaryTitle)(ticker),
      description
    });
  }
  return arr;
}, []).sort(_compareByNumberOfSentiment);
const _crSentimentSummary = feed => {
  const [description, hmTickers] = (0, _AvFn.crOverallSentimentDescription)(feed),
    _tickersSummary = _crTickersSummary(hmTickers);
  _tickersSummary.unshift({
    source: SOURCE_ID,
    articleId: (0, _utils.crId)(),
    title: (0, _AvFn.crSentimentSummaryTitle)('Overall'),
    description
  });
  return _tickersSummary;
};
const _crArticlesWithSentiment = feed => _crSentimentSummary(feed).concat((0, _crArticles.default)(feed, _crArticle));
const AvAdapter = {
  toNews(json, option) {
    const {
        feed
      } = json || {},
      {
        sortBy
      } = option;
    return {
      source: SOURCE_ID,
      articles: _crArticlesWithSentiment(feed),
      sortBy
    };
  }
};
var _default = AvAdapter;
exports.default = _default;
//# sourceMappingURL=AvAdapter.js.map