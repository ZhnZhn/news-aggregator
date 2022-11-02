const API_URL = 'https://api.thenewsapi.com/v1/news/top'
, QUERY_LIMIT = 'limit=5&language=en';

const _crQueryToken = (
  value,
  parameterName
) => value === 'all'
  ? ''
  : `&${parameterName}=${value}`;

const TheNewsApiTop = {
  getRequestUrl: option => {
    const {
      apiKey,
      category,
      locale,
      domain
    } = option
    , _categoryQuery = _crQueryToken(category, 'categories')
    , _domainQuery = _crQueryToken(domain, 'domains')
    , _localeQuery = _crQueryToken(locale, 'locale');

    return `${API_URL}?api_token=${apiKey}${_localeQuery}${_categoryQuery}${_domainQuery}&${QUERY_LIMIT}`;
  },

  checkResponse(json, option){
    return true;
  }
};

export default TheNewsApiTop
