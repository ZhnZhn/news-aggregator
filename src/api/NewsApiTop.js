
import NewsApiFns from './NewsApiFns'

const C = {
  ROOT_V2: 'https://newsapi.org/v2/',
  TOPIC_TOP: 'top-headlines'
};

const NewsApiTop = {
  getRequestUrl: option => {
    const { category, country } = option;
    return `${C.ROOT_V2}${C.TOPIC_TOP}?category=${category}&country=${country}`;
  },
  ...NewsApiFns
};

export default NewsApiTop
