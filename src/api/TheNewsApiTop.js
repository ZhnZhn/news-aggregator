import {
  crApiUrl,
  checkResponse
} from './TheNewsApiFn';

const _crQueryToken = (
  value,
  parameterName
) => value === 'all'
  ? ''
  : `&${parameterName}=${value}`;

const TheNewsApiTop = {
  getRequestUrl: option => {
    const {
      category,
      locale,
      domain
    } = option
    , _categoryQuery = _crQueryToken(category, 'categories')
    , _domainQuery = _crQueryToken(domain, 'domains')
    , _localeQuery = _crQueryToken(locale, 'locale');

    return `${crApiUrl('top', option)}${_localeQuery}${_categoryQuery}${_domainQuery}`;
  },

  checkResponse
};

export default TheNewsApiTop
