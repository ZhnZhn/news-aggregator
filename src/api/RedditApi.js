export const API_URL = 'https://www.reddit.com/r';
const _isArr = Array.isArray;
const DF_SUBREDDIT = 'Amd';

const RedditApi = {
  getRequestUrl({
    subreddit,
    limit,
    t
  }){
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/top.json?limit=${limit}&t=${t}`;
  },

  checkResponse(json, option){
    const { data } = json || {}
    , { children } = data || {};
    return _isArr(children);
  }
};

export default RedditApi
