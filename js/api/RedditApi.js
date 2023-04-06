"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var API_URL = 'https://www.reddit.com/r';
var _isArr = Array.isArray;
var RedditApi = {
  getRequestUrl: function getRequestUrl(_ref) {
    var subreddit = _ref.subreddit;
    return API_URL + "/" + subreddit + "/top.json?limit=20";
  },
  checkResponse: function checkResponse(json, option) {
    var _ref2 = json || {},
      data = _ref2.data,
      _ref3 = data || {},
      children = _ref3.children;
    return _isArr(children);
  }
};
var _default = RedditApi;
exports["default"] = _default;
//# sourceMappingURL=RedditApi.js.map