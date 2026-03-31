"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ApiFn = require("./ApiFn");
const API_URL = 'https://min-api.cryptocompare.com/data/v2',
  NEWS = 'news',
  FEEDS = 'ALL_NEWS_FEEDS'
  //, FEEDS: 'cryptocompare,cointelegraph,coindesk,decrypt',
  ,
  DF_CATEGORY = 'ALL_NEWS_CATEGORIES',
  DF_SORT = 'latest',
  getRequestUrl = _ref => {
    let {
      feed = FEEDS,
      category = DF_CATEGORY,
      sortOrder = DF_SORT
    } = _ref;
    return `${API_URL}/${NEWS}/?feeds=${feed}&categories=${category}&sortOrder=${sortOrder}`;
  };
const CryptoCompareApi = (0, _ApiFn.crProviderApi)(getRequestUrl);
var _default = exports.default = CryptoCompareApi;
//# sourceMappingURL=CryptoCompareApi.js.map