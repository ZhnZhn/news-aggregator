const API_URL = 'https://www.reddit.com/r';
const _isArr = Array.isArray;

const RedditApi = {
  getRequestUrl({
    subreddit,
    t
  }){
    return `${API_URL}/${subreddit}/top.json?limit=20&t=${t}`;
  },

  checkResponse(json, option){
    const { data } = json || {}
    , { children } = data || {};
    return _isArr(children);
  }
};

export default RedditApi
