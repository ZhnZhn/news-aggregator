
const URL_NEWS = "https://financialmodelingprep.com/stable/news"
, URL_STOCK = `${URL_NEWS}/stock`
, URL_STOCK_LATEST = `${URL_NEWS}/stock-latest`;

const FmpApi = {
  getRequestUrl(option){
    const {
      symbol='',
      apiKey
    } = option
    , [_url, _query] = symbol
       ? [URL_STOCK, `symbols=${symbol.toUpperCase()}&apikey=${apiKey}`]
       : [URL_STOCK_LATEST,`apikey=${apiKey}`]
    option.apiKey = void 0
    return `${_url}?${_query}`;
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
