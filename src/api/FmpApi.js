
const C = {
BASE_URL: 'https://financialmodelingprep.com/api/v3/stock_news'
};

const FmpApi = {
  getRequestUrl(option){
    const {
      symbol='',
      apiKey
    } = option
    , _q = symbol
       ? `tickers=${symbol}&apikey=${apiKey}`
       : `apikey=${apiKey}`
    return `${C.BASE_URL}?${_q}`;
  },

  checkResponse(json, option){
    return true;
  }

}

export default FmpApi
