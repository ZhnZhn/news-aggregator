"use strict";

exports.__esModule = true;
exports["default"] = void 0;
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
        feed = _option$feed === void 0 ? C.FEEDS : _option$feed,
        _option$category = option.category,
        category = _option$category === void 0 ? C.DF_CATEGORY : _option$category,
        _option$sortOrder = option.sortOrder,
        sortOrder = _option$sortOrder === void 0 ? C.DF_SORT : _option$sortOrder;
    return C.BASE_URL + "/" + C.NEWS + "/?feeds=" + feed + "&categories=" + category + "&sortOrder=" + sortOrder;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};
var _default = CryptoCompareApi;
exports["default"] = _default;
//# sourceMappingURL=CryptoCompareApi.js.map