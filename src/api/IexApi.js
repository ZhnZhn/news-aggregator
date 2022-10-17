const DF_SYMBOL = 'AAPL'
, DF_RECENT = '20'
, DF_URL = 'https://cloud.iexapis.com/stable/stock';

const IexApi = {
  getRequestUrl({
    symbol=DF_SYMBOL,
    recent=DF_RECENT,
    apiKey
  }){
    return `${DF_URL}/${symbol}/news/last/${recent}?token=${apiKey}`;
  },

  checkResponse(json, option){
    return true;
  }
}

export default IexApi
