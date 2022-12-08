import crId from '../utils/crId';
import crDescription from '../utils/crDescription';
import formatTimeAgo from '../utils/formatTimeAgo';
import crArticles from './crArticles';

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

const _crRelated = (
  overall_sentiment_label,
  overall_sentiment_score
) => [
  `${overall_sentiment_label} (${_rounBy(overall_sentiment_score)})`
];

const _crArticle = ({
  title,
  summary,
  source,
  time_published,
  url,
  overall_sentiment_label,
  overall_sentiment_score
}, timeAgoOptions) => {
  const publishedAt = _toMls(time_published);
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: crDescription(summary),
    author: source,
    timeAgo: formatTimeAgo(publishedAt, timeAgoOptions),
    related: _crRelated(overall_sentiment_label, overall_sentiment_score),
    publishedAt,
    url
  };
};

const _toArticles = (json) => {
  const { feed } = json || {};
  return crArticles(feed, _crArticle);
};

const AvAdapter = {
  toNews(json, option){
    const { sortBy } = option;
    return {
      source: SOURCE_ID,
      articles: _toArticles(json),
      sortBy
    };
  }
};

export default AvAdapter
