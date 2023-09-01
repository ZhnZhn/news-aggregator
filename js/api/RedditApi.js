"use strict";

exports.__esModule = true;
exports.default = void 0;
const API_URL = 'https://www.reddit.com/r';
const _isArr = Array.isArray;
const RedditApi = {
  getRequestUrl(_ref) {
    let {
      subreddit,
      t
    } = _ref;
    return API_URL + "/" + subreddit + "/top.json?limit=20&t=" + t;
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