
import domSanitize from '../utils/domSanitize';

const _isArr = Array.isArray
, SENTIMENT_SCORE = 'sentiment_score'
, PN_OVERALL_SENTIMENT_SCORE = `overall_${SENTIMENT_SCORE}`
, PN_TICKER_SENTIMENT_SCORE = `ticker_${SENTIMENT_SCORE}`;

export const rounBy = (v) => Math.round(v*100)/100;

const _crScoreList = (arrScores) => {
  const _strScore = arrScores.join(', ');
  return _strScore === ''
    ? ''
    : ` (${_strScore})`;
}

const _crValueName = (
  value,
  name
) => value
  ? `${value} ${name}`
  : ''

  const _addTicketsSentimentToHp = (
    hm,
    item
  ) => {
    const _arr = item.ticker_sentiment;
    if (_isArr(_arr)) {
      _arr.forEach(tickerSentiment => {
        const ticker = tickerSentiment.ticker;
        if (hm[ticker]) {
          hm[ticker].push(tickerSentiment)
        } else {
          hm[ticker] = [tickerSentiment]
        }
      })
    }
  }

const _fCrSentimentDescription = (
  scorePropName
) => (feed) => {
  const _hmTickets = {}
  const _arrBullish = []
  , _arrBearish = [];
  let _bullish = 0
  , _somewhatBullish = 0
  , _neutral = 0
  , _somewhatBearish = 0
  , _bearish = 0;
  feed.forEach(item => {
    _addTicketsSentimentToHp(_hmTickets, item)
    const score = rounBy(item[scorePropName])
    if (score>=0.35) {
      _bullish++
      _arrBullish.push(score)
    } else if (score < 0.35 && score >= 0.15) {
      _somewhatBullish++
    } else if (score < 0.15 && score > -0.15) {
      _neutral++
    } else if (score <= -0.15 && score > -0.35) {
      _somewhatBearish++
    } else if (score <= -0.35 && score >= -1) {
      _bearish++
      _arrBearish.push(score)
    }
  })
  return [
    domSanitize([
     _crValueName(_bullish, `Bullish${_crScoreList(_arrBullish)}`),
     _crValueName(_somewhatBullish, 'Somewhat-Bullish'),
     _crValueName(_neutral, 'Neutral'),
     _crValueName(_somewhatBearish, 'Somewhat-Bearish'),
     _crValueName(_bearish, `Bearish${_crScoreList(_arrBearish)}`)
    ].filter(Boolean)
     .join('\n')),
   _hmTickets
 ];
}

export const crOverallSentimentDescription = _fCrSentimentDescription(PN_OVERALL_SENTIMENT_SCORE)
export const crTickerSentimentDescription = _fCrSentimentDescription(PN_TICKER_SENTIMENT_SCORE)

export const crSentimentSummaryTitle = (
  prefix
) => domSanitize(`${prefix} Sentiment Summary`);

const _fHasItemDescription = (
  token
) => (
  description
) => description.indexOf(token) !== -1
, _hasDescriptionBearish = _fHasItemDescription('Bearish (')
, _hasDescriptionBullish = _fHasItemDescription('Bullish (');

export const filterTickerSentiment = (
  numberOfSentiment,
  description
) => numberOfSentiment > 9
  || _hasDescriptionBearish(description)
  || _hasDescriptionBullish(description);
