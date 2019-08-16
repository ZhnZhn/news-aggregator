const ROOT = 'https://newsapi.org/v2/everything';

const NewsApi = {
  getRequestUrl: ({
    symbol='Weather',
    sortBy='relevancy'
  }) => `${ROOT}?q=${symbol}&sortBy=${sortBy}`,

  crOptionFetch: option => {
    const { apiKey } = option;
    option.apiKey = void 0;
    return {
      headers: {
        'X-Api-Key': apiKey
      }
    };
  },

  checkResponse: (json, option) => {
    const { status, message } = json;
    if (status === 'error'){
      throw { msg: message };
    }
    return true;
  }
};

export default NewsApi
