"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var DF_SYMBOL = 'AAPL',
  DF_RECENT = '20',
  DF_URL = 'https://cloud.iexapis.com/stable/stock';
var IexApi = {
  getRequestUrl: function getRequestUrl(_ref) {
    var _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === void 0 ? DF_SYMBOL : _ref$symbol,
      _ref$recent = _ref.recent,
      recent = _ref$recent === void 0 ? DF_RECENT : _ref$recent,
      apiKey = _ref.apiKey;
    return DF_URL + "/" + symbol.toLowerCase() + "/news/last/" + recent + "?token=" + apiKey;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};
var _default = IexApi;
exports["default"] = _default;
//# sourceMappingURL=IexApi.js.map