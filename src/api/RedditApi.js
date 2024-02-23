export const API_URL = 'https://www.reddit.com/r';
const _isArr = Array.isArray;
const DF_SUBREDDIT = 'Amd';

const RedditApi = {
  getRequestUrl({
    subreddit,
    limit,
    t,
    q,
    sort
  }){
    const [
      _tokenPath,
      _queryParameters
    ] = q
      ? ["search.json", `&q=${q}&sort=${sort}&restrict_sr=true`]
      : ["top.json", ""];
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/${_tokenPath}?limit=${limit}&t=${t}${_queryParameters}`;
  },

  checkResponse(json, option){
    const { data } = json || {}
    , { children } = data || {};
    return _isArr(children);
  }
};

export default RedditApi
