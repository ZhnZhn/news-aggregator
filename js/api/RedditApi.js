"use strict";

exports.__esModule = true;
exports.default = exports.API_URL = void 0;
const API_URL = 'https://www.reddit.com/r';
exports.API_URL = API_URL;
const _isArr = Array.isArray;
const RedditApi = {
  getRequestUrl(_ref) {
    let {
      subreddit,
      limit,
      t
    } = _ref;
    return API_URL + "/" + subreddit + "/top.json?limit=" + limit + "&t=" + t;
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
var _default = RedditApi;
exports.default = _default;
//# sourceMappingURL=RedditApi.js.map