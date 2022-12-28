"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.rounBy = exports.filterTickerSentiment = exports.crTickerSentimentDescription = exports.crSentimentSummaryTitle = exports.crOverallSentimentDescription = void 0;
var _domSanitize = _interopRequireDefault(require("../utils/domSanitize"));
var _isArr = Array.isArray,
  SENTIMENT_SCORE = 'sentiment_score',
  PN_OVERALL_SENTIMENT_SCORE = "overall_" + SENTIMENT_SCORE,
  PN_TICKER_SENTIMENT_SCORE = "ticker_" + SENTIMENT_SCORE;
var rounBy = function rounBy(v) {
  return Math.round(v * 100) / 100;
};
exports.rounBy = rounBy;
var _crScoreList = function _crScoreList(arrScores) {
  var _strScore = arrScores.join(', ');
  return _strScore === '' ? '' : " (" + _strScore + ")";
};
var _crValueName = function _crValueName(value, name) {
  return value ? value + " " + name : '';
};
var _addTicketsSentimentToHp = function _addTicketsSentimentToHp(hm, item) {
  var _arr = item.ticker_sentiment;
  if (_isArr(_arr)) {
    _arr.forEach(function (tickerSentiment) {
      var ticker = tickerSentiment.ticker;
      if (hm[ticker]) {
        hm[ticker].push(tickerSentiment);
      } else {
        hm[ticker] = [tickerSentiment];
      }
    });
  }
};
var _fCrSentimentDescription = function _fCrSentimentDescription(scorePropName) {
  return function (feed) {
    var _hmTickets = {};
    var _arrBullish = [],
      _arrBearish = [];
    var _bullish = 0,
      _somewhatBullish = 0,
      _neutral = 0,
      _somewhatBearish = 0,
      _bearish = 0;
    feed.forEach(function (item) {
      _addTicketsSentimentToHp(_hmTickets, item);
      var score = rounBy(item[scorePropName]);
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
    return [(0, _domSanitize["default"])([_crValueName(_bullish, "Bullish" + _crScoreList(_arrBullish)), _crValueName(_somewhatBullish, 'Somewhat-Bullish'), _crValueName(_neutral, 'Neutral'), _crValueName(_somewhatBearish, 'Somewhat-Bearish'), _crValueName(_bearish, "Bearish" + _crScoreList(_arrBearish))].filter(Boolean).join('\n')), _hmTickets];
  };
};
var crOverallSentimentDescription = _fCrSentimentDescription(PN_OVERALL_SENTIMENT_SCORE);
exports.crOverallSentimentDescription = crOverallSentimentDescription;
var crTickerSentimentDescription = _fCrSentimentDescription(PN_TICKER_SENTIMENT_SCORE);
exports.crTickerSentimentDescription = crTickerSentimentDescription;
var crSentimentSummaryTitle = function crSentimentSummaryTitle(prefix) {
  return (0, _domSanitize["default"])(prefix + " Sentiment Summary");
};
exports.crSentimentSummaryTitle = crSentimentSummaryTitle;
var _fHasItemDescription = function _fHasItemDescription(token) {
    return function (description) {
      return description.indexOf(token) !== -1;
    };
  },
  _hasDescriptionBearish = _fHasItemDescription('Bearish ('),
  _hasDescriptionBullish = _fHasItemDescription('Bullish (');
var filterTickerSentiment = function filterTickerSentiment(numberOfSentiment, description) {
  return numberOfSentiment > 9 || _hasDescriptionBearish(description) || _hasDescriptionBullish(description);
};
exports.filterTickerSentiment = filterTickerSentiment;
//# sourceMappingURL=AvFn.js.map