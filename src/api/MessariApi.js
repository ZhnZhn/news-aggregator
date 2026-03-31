import { crProviderApi } from './ApiFn';

//as-markdown
const API_URL = 'https://data.messari.io/api/v1/news'
, FIELDS = 'title,tags,published_at,url,author/name'
, getRequestUrl = ({ assetKey }) => {
    return assetKey && assetKey !== 'all'
      ? `${API_URL}/${assetKey}?fields=${FIELDS}`
      : `${API_URL}?fields=${FIELDS}`;
};

const MessariApi = crProviderApi(getRequestUrl);

export default MessariApi
