import {
  crApiUrl,
  crQueryTokenAll,
  checkResponse
} from './TheNewsApiFn';

const TheNewsApiTop = {
  getRequestUrl: (option) => {
    const {
      category,
      locale,
      domain
    } = option
    , _categoryQuery = crQueryTokenAll('categories', category)
    , _domainQuery = crQueryTokenAll('domains', domain)
    , _localeQuery = crQueryTokenAll('locale', locale);

    return `${crApiUrl('top', option)}${_localeQuery}${_categoryQuery}${_domainQuery}`;
  },

  checkResponse
};

export default TheNewsApiTop
