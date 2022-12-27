"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ApiFn = require("./ApiFn");
var API_URL = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT';
var _isArr = Array.isArray;
var AvApi = {
  getRequestUrl: function getRequestUrl(option) {
    var apiKey = option.apiKey,
      tickers = option.tickers,
      topics = option.topics,
      sortBy = option.sortBy,
      limit = option.limit,
      _tickers = (0, _ApiFn.crQueryToken)('tickers', tickers),
      _topics = _tickers ? '' : (0, _ApiFn.crQueryToken)('topics', topics),
      _limit = (0, _ApiFn.crQueryToken)('limit', limit);
    option.apiKey = void 0;
    return "" + API_URL + _tickers + _topics + _limit + "&sort=" + sortBy + "&apikey=" + apiKey;
  },
  checkResponse: function checkResponse(json, option) {
    var _ref = json || {},
      feed = _ref.feed;
    return _isArr(feed);
  }
};
var _default = AvApi;
exports["default"] = _default;
//# sourceMappingURL=AvApi.js.map