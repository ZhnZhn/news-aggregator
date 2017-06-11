const ROOT = 'https://newsapi.org/v1/articles';
const DF_SOURCE = 'bbc-sport';
const DF_SORT_BY = 'top';

const NewsApi = {
  getRequestUrl(option){
    const {
            source=DF_SOURCE, sortBy=DF_SORT_BY,
            apiKey
          } = option;
    option.apiKey = undefined;
    return `${ROOT}?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`;
  },

  checkResponse(json, option){
    const { status, message } = json;
    if (status === 'error'){
      throw { msg: message };
    }
    return true;
  }
}

export default NewsApi
