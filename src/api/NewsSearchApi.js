import NewsApiFns from './NewsApiFns';

const API_URL = 'https://newsapi.org/v2/everything';

const NewsApi = {
  getRequestUrl: ({
    symbol='Weather',
    sortBy='relevancy'
  }) => `${API_URL}?q=${symbol}&sortBy=${sortBy}`,
  ...NewsApiFns
};

export default NewsApi
