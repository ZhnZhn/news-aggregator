//const ROOT_V1 = 'https://newsapi.org/v1/articles';
//const DF_SOURCE = 'bbc-sport';
//const DF_SORT_BY = 'top';
// `${ROOT_V1}?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`;

const C = {
  ROOT_V2: 'https://newsapi.org/v2/',
  TOP: 'top',
  TOPIC_TOP: 'top-headlines',
  TOPIC_EVERYTHING: 'everything'
};

const _crUrl2 = ({ source, sortBy }) => {
  const _topic = sortBy === C.TOP
    ? `${C.TOPIC_TOP}?`
    : `${C.TOPIC_EVERYTHING}?sortBy=${sortBy}&language=en&`;
  return `${C.ROOT_V2}${_topic}sources=${source}`;
};

const NewsApi = {
  getRequestUrl: option => _crUrl2(option),

  crOptionFetch: option => {
    const { apiKey } = option;
    option.apiKey = void 0;
    return {
      headers: {
        'X-Api-Key': apiKey
      }
    };
  },

  checkResponse: (json, option) => {
    const { status, message } = json;
    if (status === 'error'){
      throw { msg: message };
    }
    return true;
  }
};

export default NewsApi
