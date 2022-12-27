//const ROOT_V1 = 'https://newsapi.org/v1/articles';
//const DF_SOURCE = 'bbc-sport';
//const DF_SORT_BY = 'top';
// `${ROOT_V1}?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`;

import NewsApiFns from './NewsApiFns';

const API_URL = 'https://newsapi.org/v2/'
, TOP = 'top'
, TOPIC_TOP = 'top-headlines'
, TOPIC_EVERYTHING = 'everything';

const _crUrl2 = ({
  source,
  sortBy
}) => {
  const _topic = sortBy === TOP
    ? `${TOPIC_TOP}?`
    : `${TOPIC_EVERYTHING}?sortBy=${sortBy}&language=en&`;
  return `${API_URL}${_topic}sources=${source}`;
};

const NewsApi = {
  getRequestUrl: option => _crUrl2(option),
  ...NewsApiFns
};

export default NewsApi
