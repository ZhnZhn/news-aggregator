'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ROOT = 'https://newsapi.org/v1/articles';
//const apiKey = 'a9d5f931a98b4d04a8ce21d260ffe157'

var NewsApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$source = option.source,
        source = _option$source === undefined ? 'bbc-sport' : _option$source,
        _option$sortBy = option.sortBy,
        sortBy = _option$sortBy === undefined ? 'top' : _option$sortBy,
        apiNewsKey = option.apiNewsKey;

    return ROOT + '?source=' + source + '&apiKey=' + apiNewsKey + '&sortBy=' + sortBy;
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
//# sourceMappingURL=D:\_Dev\_React\_News\js\api\NewsApi.js.map