import {
  crApiUrl,
  crQueryTokenAll,
  checkResponse
} from './TheNewsApiFn';

const TheNewsApiSearch = {
  getRequestUrl(option){
    const {
      search,
      category,
      sortBy
    } = option
    , _categoryQuery = crQueryTokenAll('categories', category);
    return `${crApiUrl('all', option)}${_categoryQuery}&search=${search}&sort=${sortBy}`;
  },

  checkResponse
}

export default TheNewsApiSearch
