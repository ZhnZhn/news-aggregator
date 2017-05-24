
const ROOT = 'https://newsapi.org/v1/articles'
//const apiKey = 'a9d5f931a98b4d04a8ce21d260ffe157'

const NewsApi = {
  getRequestUrl(option){
    const { source='bbc-sport', sortBy='top', apiNewsKey } = option;
    return `${ROOT}?source=${source}&apiKey=${apiNewsKey}&sortBy=${sortBy}`;
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
