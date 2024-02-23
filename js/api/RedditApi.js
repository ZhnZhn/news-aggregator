"use strict";

exports.__esModule = true;
exports.default = exports.API_URL = void 0;
const API_URL = exports.API_URL = 'https://www.reddit.com/r';
const _isArr = Array.isArray;
const DF_SUBREDDIT = 'Amd';
const RedditApi = {
  getRequestUrl(_ref) {
    let {
      subreddit,
      limit,
      t,
      q,
      sort
    } = _ref;
    const [_tokenPath, _queryParameters] = q ? ["search.json", `&q=${q}&sort=${sort}&restrict_sr=true`] : ["top.json", ""];
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/${_tokenPath}?limit=${limit}&t=${t}${_queryParameters}`;
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