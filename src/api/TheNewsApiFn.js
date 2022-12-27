import { crQueryToken } from './ApiFn';

const API_URL = 'https://api.thenewsapi.com/v1/news'
, QUERY_LIMIT = 'limit=5&language=en';

const _crPage = (
  nextPage
) => crQueryToken('page', nextPage);

export const crApiUrl = (
  type,
  option
) => {
  const {
    apiKey,
    nextPage
  } = option
  , _page = _crPage(nextPage);

  option.apiKey = void 0
  return `${API_URL}/${type}?api_token=${apiKey}${_page}&${QUERY_LIMIT}`;
}

export const crQueryTokenAll = (
  parameterName,
  value
) => value === 'all'
  ? ''
  : crQueryToken(parameterName, value)

export const checkResponse = () => true
