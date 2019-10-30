const C = {
  BASE_URL: 'https://min-api.cryptocompare.com/data/v2',
  NEWS: 'news',
  FEEDS: 'cryptocompare,cointelegraph,coindesk'
};

const CryptoCompareApi = {
  getRequestUrl(option){
    const {
      sortOrder='latest'
    } = option;
    return `${C.BASE_URL}/${C.NEWS}/?feed=${C.FEEDS}&sortOrder=${sortOrder}`;
  },

  checkResponse(json, option){
    return true;
  }
}

export default CryptoCompareApi
