const API_URL = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT'

const _crQueryToken = (
  prName,
  value
) => value
  ? `&${prName}=${value}`
  : '';

const AvApi = {
  getRequestUrl(option){
    const {
      apiKey,
      tickers,
      topics,
      sortBy,
      limit
    } = option
    , _tickers = _crQueryToken('tickers', tickers)
    , _topics = _tickers
         ? ''
         : _crQueryToken('topics', topics)
    , _limit = _crQueryToken('limit', limit);

    option.apiKey = void 0
    return `${API_URL}${_tickers}${_topics}${_limit}&sort=${sortBy}&apikey=${apiKey}`;
  },

  checkResponse(json, option){
    return true;
  }
}

export default AvApi
