"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  DF_SYMBOL: 'AAPL',
  DF_RECENT: '20',
  BASE_URL: 'https://cloud.iexapis.com/stable/stock' //BASE_URL: 'https://api.iextrading.com/1.0/stock'

};
var IexApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$symbol = option.symbol,
        symbol = _option$symbol === void 0 ? C.DF_SYMBOL : _option$symbol,
        _option$recent = option.recent,
        recent = _option$recent === void 0 ? C.DF_RECENT : _option$recent,
        apiKey = option.apiKey;
    return C.BASE_URL + "/" + symbol + "/news/last/" + recent + "?token=" + apiKey;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};
var _default = IexApi;
exports["default"] = _default;
//# sourceMappingURL=IexApi.js.map