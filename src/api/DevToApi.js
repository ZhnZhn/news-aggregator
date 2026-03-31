import { crProviderApi } from './ApiFn';

const _isArr = Array.isArray
, API_URL = 'https://dev.to/api'
, getRequestUrl = ({
   tag,
   perPage,
   inRecentDays
}) => `${API_URL}/articles?tag=${tag}&top=${inRecentDays}&per_page=${perPage}`
, checkResponse = json => _isArr(json);


const DevToApi = crProviderApi(getRequestUrl, checkResponse);

export default DevToApi
