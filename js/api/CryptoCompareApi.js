'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var C = {
  BASE_URL: 'https://min-api.cryptocompare.com/data/v2',
  NEWS: 'news',
  FEEDS: 'ALL_NEWS_FEEDS',
  //FEEDS: 'cryptocompare,cointelegraph,coindesk,decrypt',
  DF_CATEGORY: 'ALL_NEWS_CATEGORIES',
  DF_SORT: 'latest'
};

var CryptoCompareApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$feed = option.feed,
        feed = _option$feed === undefined ? C.FEEDS : _option$feed,
        _option$category = option.category,
        category = _option$category === undefined ? C.DF_CATEGORY : _option$category,
        _option$sortOrder = option.sortOrder,
        sortOrder = _option$sortOrder === undefined ? C.DF_SORT : _option$sortOrder;

    return C.BASE_URL + '/' + C.NEWS + '/?feeds=' + feed + '&categories=' + category + '&sortOrder=' + sortOrder;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};

exports.default = CryptoCompareApi;
//# sourceMappingURL=CryptoCompareApi.js.map