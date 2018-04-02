'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT = 'https://newsapi.org/v2/everything';

var NewsApi = {
  getRequestUrl: function getRequestUrl(option) {
    var apiKey = option.apiKey,
        _option$symbol = option.symbol,
        symbol = _option$symbol === undefined ? 'Weather' : _option$symbol,
        _option$sortBy = option.sortBy,
        sortBy = _option$sortBy === undefined ? 'relevancy' : _option$sortBy;

    option.apiKey = undefined;
    return ROOT + '?apiKey=' + apiKey + '&q=' + symbol + '&sortBy=' + sortBy;
  },
  checkResponse: function checkResponse(json, option) {
    var status = json.status,
        message = json.message;

    if (status === 'error') {
      throw { msg: message };
    }
    return true;
  }
};

exports.default = NewsApi;
//# sourceMappingURL=NewsSearchApi.js.map