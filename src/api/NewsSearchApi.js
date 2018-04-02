const ROOT = 'https://newsapi.org/v2/everything';

const NewsApi = {
  getRequestUrl(option){
    const {
            apiKey,
            symbol='Weather',
            sortBy='relevancy'
          } = option;
    option.apiKey = undefined;
    return `${ROOT}?apiKey=${apiKey}&q=${symbol}&sortBy=${sortBy}`;
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
