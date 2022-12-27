import { crQueryToken } from './ApiFn';

const API_URL = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT'

const _isArr = Array.isArray;

const AvApi = {
  getRequestUrl(option){
    const {
      apiKey,
      tickers,
      topics,
      sortBy,
      limit
    } = option
    , _tickers = crQueryToken('tickers', tickers)
    , _topics = _tickers
         ? ''
         : crQueryToken('topics', topics)
    , _limit = crQueryToken('limit', limit);

    option.apiKey = void 0
    return `${API_URL}${_tickers}${_topics}${_limit}&sort=${sortBy}&apikey=${apiKey}`;
  },

  checkResponse(json, option){
    const { feed } = json || {};
    return _isArr(feed);
  }
}

export default AvApi
