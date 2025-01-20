"use strict";

exports.__esModule = true;
exports.default = exports.REDDIT_URL = exports.API_URL = void 0;
const REDDIT_URL = exports.REDDIT_URL = "https://www.reddit.com";
const API_URL = exports.API_URL = `${REDDIT_URL}/r`;
const _isArr = Array.isArray;
const DF_SUBREDDIT = "Amd";
const _crTopicJson = token => `${token}.json`;
const RedditApi = {
  getRequestUrl(_ref) {
    let {
      listing,
      subreddit,
      limit,
      t,
      q,
      sort
    } = _ref;
    const [_tokenPath, _queryParameters] = q ? [_crTopicJson("search"), `&q=${q}&sort=${sort}&restrict_sr=true`] : listing === "rising" ? [_crTopicJson(listing), ""] : [_crTopicJson("top"), `&t=${t}`];
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/${_tokenPath}?limit=${limit}${_queryParameters}`;
  },
  checkResponse(json, option) {
    const {
        data
      } = json || {},
      {
        children
      } = data || {};
    return _isArr(children);
  }
};
var _default = exports.default = RedditApi;
//# sourceMappingURL=RedditApi.js.map