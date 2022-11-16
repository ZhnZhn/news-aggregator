const API_URL = 'https://api.thenewsapi.com/v1/news/top'
, QUERY_LIMIT = 'limit=5&language=en';

const _crQueryToken = (
  value,
  parameterName
) => value === 'all'
  ? ''
  : `&${parameterName}=${value}`;

const _crPage = (
  nextPage
) => nextPage
  ? `&page=${nextPage}`
  : '';

const TheNewsApiTop = {
  getRequestUrl: option => {
    const {
      apiKey,
      category,
      locale,
      domain,
      nextPage
    } = option
    , _categoryQuery = _crQueryToken(category, 'categories')
    , _domainQuery = _crQueryToken(domain, 'domains')
    , _localeQuery = _crQueryToken(locale, 'locale')
    , _page = _crPage(nextPage);

    return `${API_URL}?api_token=${apiKey}${_localeQuery}${_categoryQuery}${_domainQuery}${_page}&${QUERY_LIMIT}`;
  },

  checkResponse(json, option){
    return true;
  }
};

export default TheNewsApiTop
