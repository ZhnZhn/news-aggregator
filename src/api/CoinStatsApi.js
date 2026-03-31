import { crProviderApi } from './ApiFn';

const API_URL = 'https://api.coinstats.app/public/v1/news'
, QUERY_TAIL = 'skip=0&limit=20'
, DF_FILTER = 'latest'
, getRequestUrl = (option) => {
    const {
      filter=DF_FILTER
    } = option;
    option.filter = filter
    return `${API_URL}/${filter}/?${QUERY_TAIL}`;
};


const CoinStatsApi = crProviderApi(getRequestUrl);

export default CoinStatsApi
