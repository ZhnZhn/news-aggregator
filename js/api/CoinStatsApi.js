"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var API_URL = 'https://api.coinstats.app/public/v1/news',
  QUERY_TAIL = 'skip=0&limit=20',
  DF_FILTER = 'latest';
var CoinStatsApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$filter = option.filter,
      filter = _option$filter === void 0 ? DF_FILTER : _option$filter;
    option.filter = filter;
    return API_URL + "/" + filter + "/?" + QUERY_TAIL;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};
var _default = CoinStatsApi;
exports["default"] = _default;
//# sourceMappingURL=CoinStatsApi.js.map