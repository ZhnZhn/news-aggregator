const C = {
  BASE_URL: 'https://min-api.cryptocompare.com/data/v2',
  NEWS: 'news',
  FEEDS: 'ALL_NEWS_FEEDS',
  //FEEDS: 'cryptocompare,cointelegraph,coindesk,decrypt',
  DF_CATEGORY: 'ALL_NEWS_CATEGORIES',
  DF_SORT: 'latest'
};

const CryptoCompareApi = {
  getRequestUrl(option){
    const {
      feed=C.FEEDS,
      category=C.DF_CATEGORY,
      sortOrder=C.DF_SORT
    } = option;
    return `${C.BASE_URL}/${C.NEWS}/?feeds=${feed}&categories=${category}&sortOrder=${sortOrder}`;
  },

  checkResponse(json, option){
    return true;
  }
}

export default CryptoCompareApi
