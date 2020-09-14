"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  BASE_URL: 'https://financialmodelingprep.com/api/v3/stock_news'
};
var FmpApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$symbol = option.symbol,
        symbol = _option$symbol === void 0 ? '' : _option$symbol,
        apiKey = option.apiKey,
        _q = symbol ? "tickers=" + symbol + "&apikey=" + apiKey : "apikey=" + apiKey;

    return C.BASE_URL + "?" + _q;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};
var _default = FmpApi;
exports["default"] = _default;
//# sourceMappingURL=FmpApi.js.map