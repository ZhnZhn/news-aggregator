"use strict";

exports.__esModule = true;
exports.rounBy = exports.filterTickerSentiment = exports.crTickerSentimentDescription = exports.crSentimentSummaryTitle = exports.crOverallSentimentDescription = void 0;
var _utils = require("../utils");
const _isArr = Array.isArray,
  SENTIMENT_SCORE = 'sentiment_score',
  PN_OVERALL_SENTIMENT_SCORE = "overall_" + SENTIMENT_SCORE,
  PN_TICKER_SENTIMENT_SCORE = "ticker_" + SENTIMENT_SCORE;
const rounBy = v => Math.round(v * 100) / 100;
exports.rounBy = rounBy;
const _crScoreList = arrScores => {
  const _strScore = arrScores.join(', ');
  return _strScore === '' ? '' : " (" + _strScore + ")";
};
const _crValueName = (value, name) => value ? value + " " + name : '';
const _addTicketsSentimentToHp = (hm, item) => {
  const _arr = item.ticker_sentiment;
  if (_isArr(_arr)) {
    _arr.forEach(tickerSentiment => {
      const ticker = tickerSentiment.ticker;
      if (hm[ticker]) {
        hm[ticker].push(tickerSentiment);
      } else {
        hm[ticker] = [tickerSentiment];
      }
    });
  }
};
const _fCrSentimentDescription = scorePropName => feed => {
  const _hmTickets = {};
  const _arrBullish = [],
    _arrBearish = [];
  let _bullish = 0,
    _somewhatBullish = 0,
    _neutral = 0,
    _somewhatBearish = 0,
    _bearish = 0;
  feed.forEach(item => {
    _addTicketsSentimentToHp(_hmTickets, item);
    const score = rounBy(item[scorePropName]);
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
  return [(0, _utils.domSanitize)([_crValueName(_bullish, "Bullish" + _crScoreList(_arrBullish)), _crValueName(_somewhatBullish, 'Somewhat-Bullish'), _crValueName(_neutral, 'Neutral'), _crValueName(_somewhatBearish, 'Somewhat-Bearish'), _crValueName(_bearish, "Bearish" + _crScoreList(_arrBearish))].filter(Boolean).join('\n')), _hmTickets];
};
const crOverallSentimentDescription = _fCrSentimentDescription(PN_OVERALL_SENTIMENT_SCORE);
exports.crOverallSentimentDescription = crOverallSentimentDescription;
const crTickerSentimentDescription = _fCrSentimentDescription(PN_TICKER_SENTIMENT_SCORE);
exports.crTickerSentimentDescription = crTickerSentimentDescription;
const crSentimentSummaryTitle = prefix => (0, _utils.domSanitize)(prefix + " Sentiment Summary");
exports.crSentimentSummaryTitle = crSentimentSummaryTitle;
const _fHasItemDescription = token => description => description.indexOf(token) !== -1,
  _hasDescriptionBearish = _fHasItemDescription('Bearish ('),
  _hasDescriptionBullish = _fHasItemDescription('Bullish (');
const filterTickerSentiment = (numberOfSentiment, description) => numberOfSentiment > 9 || _hasDescriptionBearish(description) || _hasDescriptionBullish(description);
exports.filterTickerSentiment = filterTickerSentiment;
//# sourceMappingURL=AvFn.js.map