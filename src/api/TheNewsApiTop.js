import {
  crApiUrl,
  crQueryToken,
  checkResponse
} from './TheNewsApiFn';

const TheNewsApiTop = {
  getRequestUrl: option => {
    const {
      category,
      locale,
      domain
    } = option
    , _categoryQuery = crQueryToken(category, 'categories')
    , _domainQuery = crQueryToken(domain, 'domains')
    , _localeQuery = crQueryToken(locale, 'locale');

    return `${crApiUrl('top', option)}${_localeQuery}${_categoryQuery}${_domainQuery}`;
  },

  checkResponse
};

export default TheNewsApiTop
