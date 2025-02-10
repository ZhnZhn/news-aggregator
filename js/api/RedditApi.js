"use strict";

exports.__esModule = true;
exports.getItems = exports.default = exports.REDDIT_URL = exports.API_URL = void 0;
var _ApiFn = require("./ApiFn");
const REDDIT_URL = exports.REDDIT_URL = "https://www.reddit.com";
const API_URL = exports.API_URL = `${REDDIT_URL}/r`;
const getItems = json => ((json || {}).data || {}).children;
exports.getItems = getItems;
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
      sort,
      after
    } = _ref;
    const [_tokenPath, _queryParameters] = q ? [_crTopicJson("search"), `&q=${q}&sort=${sort}&restrict_sr=true`] : listing === "rising" ? [_crTopicJson(listing), ""] : [_crTopicJson("top"), `&t=${t}`],
      _afterQuery = (0, _ApiFn.crQueryToken)("after", after);
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/${_tokenPath}?limit=${limit}${_queryParameters}${_afterQuery}`;
  },
  checkResponse(json, option) {
    return _isArr(getItems(json));
  }
};
var _default = exports.default = RedditApi;
//# sourceMappingURL=RedditApi.js.map