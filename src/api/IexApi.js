
const C = {
  DF_SYMBOL: 'AAPL',
  DF_RECENT: '20',
  BASE_URL: 'https://api.iextrading.com/1.0/stock'
};

const IexApi = {
  getRequestUrl(option){
    const {
            symbol=C.DF_SYMBOL,
            recent=C.DF_RECENT
          } = option;
    return `${C.BASE_URL}/${symbol}/news/last/${recent}`;
  },

  checkResponse(json, option){
    return true;
  }

}

export default IexApi
