import NewsApiFns from './NewsApiFns';

const API_URL = 'https://newsapi.org/v2/'
, TOPIC_TOP = 'top-headlines';

const NewsApiTop = {
  getRequestUrl: (option) => {
    const {
      category,
      country
    } = option;
    return `${API_URL}${TOPIC_TOP}?category=${category}&country=${country}`;
  },
  ...NewsApiFns
};

export default NewsApiTop
