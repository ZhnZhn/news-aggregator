'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT = 'https://newsapi.org/v2/everything';

var NewsApi = {
  getRequestUrl: function getRequestUrl(_ref) {
    var _ref$symbol = _ref.symbol,
        symbol = _ref$symbol === undefined ? 'Weather' : _ref$symbol,
        _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === undefined ? 'relevancy' : _ref$sortBy;
    return ROOT + '?q=' + symbol + '&sortBy=' + sortBy;
  },

  crOptionFetch: function crOptionFetch(option) {
    var apiKey = option.apiKey;

    option.apiKey = void 0;
    return {
      headers: {
        'X-Api-Key': apiKey
      }
    };
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