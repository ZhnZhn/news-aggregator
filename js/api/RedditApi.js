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
      t
    } = _ref;
    return `${API_URL}/${subreddit || DF_SUBREDDIT}/top.json?limit=${limit}&t=${t}`;
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