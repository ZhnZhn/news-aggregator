import { crQueryToken } from './ApiFn';

export const REDDIT_URL = "https://www.reddit.com"
export const API_URL = `${REDDIT_URL}/r`;

export const getItems = (
  json
) => ((json || {}).data || {}).children

const _isArr = Array.isArray;
const DF_SUBREDDIT = "Amd";

const _crTopicJson = token => `${token}.json`;

const RedditApi = {
  getRequestUrl({
    listing,
    subreddit,
    limit,
    t,
    q,
    sort,
    after
  }){
    const [
      _tokenPath,
      _queryParameters
    ] = q
      ? [_crTopicJson("search"), `&q=${q}&sort=${sort}&restrict_sr=true`]
      : listing === "rising"
         ? [_crTopicJson(listing), ""]
         : [_crTopicJson("top"), `&t=${t}`]
    , _afterQuery = crQueryToken("after", after);
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/${_tokenPath}?limit=${limit}${_queryParameters}${_afterQuery}`;
  },

  checkResponse(json, option){
    return _isArr(getItems(json));
  }
};

export default RedditApi
