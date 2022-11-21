import {
  crApiUrl,
  crQueryToken,
  checkResponse
} from './TheNewsApiFn';

const TheNewsApiSearch = {
  getRequestUrl(option){
    const {
      search,
      category,
      sortBy
    } = option
    , _categoryQuery = crQueryToken(category, 'categories');
    return `${crApiUrl('all', option)}${_categoryQuery}&search=${search}&sort=${sortBy}`;
  },

  checkResponse
}

export default TheNewsApiSearch
