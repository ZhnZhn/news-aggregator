
const BASE_URL = 'https://financialmodelingprep.com/api/v3/stock_news'

const FmpApi = {
  getRequestUrl(option){
    const {
      symbol='',
      apiKey
    } = option
    , _q = symbol
       ? `tickers=${symbol}&apikey=${apiKey}`
       : `apikey=${apiKey}`
    option.apiKey = void 0
    return `${BASE_URL}?${_q}`;
  },

  checkResponse(json, option){
    const _errMsg = (json || {})["Error Message"];
    if (_errMsg) {
      throw {
        msg: _errMsg
      };
    }
    return true;
  }

};

export default FmpApi
