'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var C = {
  BASE_URL: 'https://min-api.cryptocompare.com/data/v2',
  NEWS: 'news',
  FEEDS: 'cryptocompare,cointelegraph,coindesk'
};

var CryptoCompareApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$sortOrder = option.sortOrder,
        sortOrder = _option$sortOrder === undefined ? 'latest' : _option$sortOrder;

    return C.BASE_URL + '/' + C.NEWS + '/?feed=' + C.FEEDS + '&sortOrder=' + sortOrder;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};

exports.default = CryptoCompareApi;
//# sourceMappingURL=CryptoCompareApi.js.map