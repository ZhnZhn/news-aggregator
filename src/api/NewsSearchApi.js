import NewsApiFns from './NewsApiFns'

const ROOT = 'https://newsapi.org/v2/everything';

const NewsApi = {
  getRequestUrl: ({
    symbol='Weather',
    sortBy='relevancy'
  }) => `${ROOT}?q=${symbol}&sortBy=${sortBy}`,  
  ...NewsApiFns
};

export default NewsApi
