export const REDDIT_URL = "https://www.reddit.com"
export const API_URL = `${REDDIT_URL}/r`;
const _isArr = Array.isArray;
const DF_SUBREDDIT = "Amd";

const _crTopicJson = token => `${token}.json`;

const RedditApi = {
  getRequestUrl({
    listings,
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
      ? [_crTopicJson("search"), `&q=${q}&sort=${sort}&restrict_sr=true`]
      : listings === "rising"
         ? [_crTopicJson(listings), ""]
         : [_crTopicJson("top"), `&t=${t}`];
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/${_tokenPath}?limit=${limit}${_queryParameters}`;
  },

  checkResponse(json, option){
    const { data } = json || {}
    , { children } = data || {};
    return _isArr(children);
  }
};

export default RedditApi
