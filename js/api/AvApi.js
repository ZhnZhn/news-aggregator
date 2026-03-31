"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ApiFn = require("./ApiFn");
const API_URL = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT';
const _isArr = Array.isArray;
const AvApi = {
  getRequestUrl(option) {
    const {
        apiKey,
        tickers,
        topics,
        sortBy,
        limit
      } = option,
      _tickers = (0, _ApiFn.crQueryToken)('tickers', tickers),
      _topics = _tickers ? '' : (0, _ApiFn.crQueryToken)('topics', topics),
      _limit = (0, _ApiFn.crQueryToken)('limit', limit);
    option.apiKey = void 0;
    return `${API_URL}${_tickers}${_topics}${_limit}&sort=${sortBy}&apikey=${apiKey}`;
  },
  checkResponse(json, _option) {
    const {
      feed
    } = json || {};
    return _isArr(feed);
  }
};
var _default = exports.default = AvApi;
//# sourceMappingURL=AvApi.js.map