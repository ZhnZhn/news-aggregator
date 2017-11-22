'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var C = {
  DF_SYMBOL: 'AAPL',
  DF_RECENT: '20',
  BASE_URL: 'https://api.iextrading.com/1.0/stock'
};

var IexApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$symbol = option.symbol,
        symbol = _option$symbol === undefined ? C.DF_SYMBOL : _option$symbol,
        _option$recent = option.recent,
        recent = _option$recent === undefined ? C.DF_RECENT : _option$recent;

    return C.BASE_URL + '/' + symbol + '/news/last/' + recent;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};

exports.default = IexApi;
//# sourceMappingURL=D:\_Dev\_React\_News\js\api\IexApi.js.map