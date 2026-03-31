import { crProviderApi } from './ApiFn';

const API_URL = 'https://min-api.cryptocompare.com/data/v2'
, NEWS = 'news'
, FEEDS = 'ALL_NEWS_FEEDS'
//, FEEDS: 'cryptocompare,cointelegraph,coindesk,decrypt',
, DF_CATEGORY = 'ALL_NEWS_CATEGORIES'
, DF_SORT = 'latest'
, getRequestUrl = ({
    feed=FEEDS,
    category=DF_CATEGORY,
    sortOrder=DF_SORT
}) => `${API_URL}/${NEWS}/?feeds=${feed}&categories=${category}&sortOrder=${sortOrder}`;

const CryptoCompareApi = crProviderApi(getRequestUrl);

export default CryptoCompareApi
