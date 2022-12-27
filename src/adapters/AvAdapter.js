import crId from '../utils/crId';
import crDescription from '../utils/crDescription';
import formatTimeAgo from '../utils/formatTimeAgo';
import domSanitize from '../utils/domSanitize';
import crArticles from './crArticles';

const _isArr = Array.isArray;
const SOURCE_ID = 'av_sentiments';

//YYYYMMDDTHHMMSS
const _toMls = (
  strDate
) => (strDate || '').length > 12
  ? Date.UTC(
      strDate.slice(0,4),
      parseInt(strDate.slice(4,6), 10) - 1,
      strDate.slice(6,8),
      strDate.slice(9,11),
      strDate.slice(11,13)
    )
  : void 0;

const _rounBy = (v) => Math.round(v*100)/100;

const _crOverallSentiment = (
  overall_sentiment_label,
  overall_sentiment_score
) => domSanitize(`${overall_sentiment_label} (${_rounBy(overall_sentiment_score)})`);

const _compareByRelevanceScore = (
  a,
  b
) => b.relevance_score === a.relevance_score
  ? b.ticker_sentiment_score - a.ticker_sentiment_score
  : b.relevance_score - a.relevance_score;

const _addTickerSentimentTo = (
  str,
  item
) => str + `${_rounBy(item.relevance_score)} ${item.ticker} ${item.ticker_sentiment_label} (${_rounBy(item.ticker_sentiment_score)})\n`

const _crTickerSentiment = (
  tickerSentiment
) => {
  if (!_isArr(tickerSentiment)) {
    return '';
  }
  return domSanitize(tickerSentiment
    .sort(_compareByRelevanceScore)
    .reduce(_addTickerSentimentTo, '')
  );
}

const _crArticle = ({
  title,
  summary,
  source,
  time_published,
  url,
  overall_sentiment_label,
  overall_sentiment_score,
  ticker_sentiment
}, timeAgoOptions) => {
  const publishedAt = _toMls(time_published);
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: `${crDescription(summary)}\n
      ${_crOverallSentiment(overall_sentiment_label, overall_sentiment_score)}\n
      ${_crTickerSentiment(ticker_sentiment)}`,
    author: source,
    timeAgo: formatTimeAgo(publishedAt, timeAgoOptions),
    publishedAt,
    url
  };
};

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

const _crSentimentDescription = (
  feed
) => {
  const _arrBullish = []
  , _arrBearish = [];
  let _bullish = 0
  , _somewhatBullish = 0
  , _neutral = 0
  , _somewhatBearish = 0
  , _bearish = 0;
  feed.forEach(item => {
    const score = _rounBy(item.overall_sentiment_score)
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
    _crValueName(_bullish, `Bullish${_crScoreList(_arrBullish)}`),
    _crValueName(_somewhatBullish, 'Somewhat-Bullish'),
    _crValueName(_neutral, 'Neutral'),
    _crValueName(_somewhatBearish, 'Somewhat-Bearish'),
    _crValueName(_bearish, `Bearish${_crScoreList(_arrBearish)}`)
  ].filter(Boolean)
   .join('\n');
}

const _crSentimentSummary = (
  feed
) => ({
  source: SOURCE_ID,
  articleId: crId(),
  title: 'Overall Sentiment Summary',
  description: _crSentimentDescription(feed)
});

const AvAdapter = {
  toNews(json, option){
    const { feed } = json || {}
    , { sortBy } = option
    , articles = crArticles(feed, _crArticle);
    articles.unshift(_crSentimentSummary(feed))
    return {
      source: SOURCE_ID,
      articles,
      sortBy
    };
  }
};

export default AvAdapter
