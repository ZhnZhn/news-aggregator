import { safeFormatMls} from '../utils/formatDate';
import { crId } from '../utils/crId';
import { domSanitize } from '../utils/domSanitize';

import { toMls } from '../utils/dt';

import { crDescription } from './adapterFn';
import crArticles from './crArticles';
import {
  rounBy,
  crSentimentSummaryTitle,
  crOverallSentimentDescription,
  crTickerSentimentDescription,
  filterTickerSentiment
} from './AvFn';

const _isArr = Array.isArray
, _getObjectKeys = Object.keys
, SOURCE_ID = 'av_sentiments';

const _crOverallSentiment = (
  overallSentimentLabel,
  overallSentimentScore
) => domSanitize(`${overallSentimentLabel} (${rounBy(overallSentimentScore)})`);

const _compareByRelevanceScore = (
  a,
  b
) => b.relevance_score === a.relevance_score
  ? b.ticker_sentiment_score - a.ticker_sentiment_score
  : b.relevance_score - a.relevance_score;

const _addTickerSentimentTo = (
  str,
  item
) => str + `${rounBy(item.relevance_score)} ${item.ticker} ${item.ticker_sentiment_label} (${rounBy(item.ticker_sentiment_score)})\n`

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
}, nowMls) => {
  const publishedAt = toMls(time_published);
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: `${crDescription(summary)}\n
      ${_crOverallSentiment(overall_sentiment_label, overall_sentiment_score)}\n
      ${_crTickerSentiment(ticker_sentiment)}`,
    author: source,
    timeAgo: safeFormatMls(publishedAt, nowMls),
    publishedAt,
    url
  };
};

const _compareByNumberOfSentiment = (
  a,
  b
) => b._n - a._n;

const _crTickersSummary = (
  hmTickers
) => _getObjectKeys(hmTickers)
 .reduce((arr, ticker) => {
    const _sentiments = hmTickers[ticker]
    , description = crTickerSentimentDescription(_sentiments)[0]
    , _numberOfSentiment = _sentiments.length;
    if (filterTickerSentiment(_numberOfSentiment, description)) {
      arr.push({
        _n: _numberOfSentiment,
        source: SOURCE_ID,
        articleId: crId(),
        title: crSentimentSummaryTitle(ticker),
        description
      })
    }
    return arr;
 }, [])
 .sort(_compareByNumberOfSentiment);

const _crSentimentSummary = (
  feed
) => {
  const [
    description,
    hmTickers
  ] = crOverallSentimentDescription(feed)
  , _tickersSummary = _crTickersSummary(hmTickers);
  _tickersSummary.unshift({
    source: SOURCE_ID,
    articleId: crId(),
    title: crSentimentSummaryTitle('Overall'),
    description
  })
  return _tickersSummary;
}

const _crArticlesWithSentiment = (
  feed
) => _crSentimentSummary(feed)
  .concat(crArticles(feed, _crArticle));

const AvAdapter = {
  toNews(json, option){
    const { feed } = json || {}
    , { sortBy } = option;
    return {
      source: SOURCE_ID,
      articles: _crArticlesWithSentiment(feed),
      sortBy
    };
  }
};

export default AvAdapter
