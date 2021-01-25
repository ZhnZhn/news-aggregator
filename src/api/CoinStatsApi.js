const C = {
  URL: 'https://api.coinstats.app/public/v1/news',
  QUERY_TAIL: 'skip=0&limit=20',
  DF_FILTER: 'latest'
};

const CoinStatsApi = {
  getRequestUrl(option){
    const { filter=C.DF_FILTER } = option;
    option.filter = filter
    return `${C.URL}/${filter}/?${C.QUERY_TAIL}`;
  },
  checkResponse(json, option){
    return true;
  }
}

export default CoinStatsApi
