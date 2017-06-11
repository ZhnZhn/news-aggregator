'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT = 'https://newsapi.org/v1/articles';
var DF_SOURCE = 'bbc-sport';
var DF_SORT_BY = 'top';

var NewsApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option$source = option.source,
        source = _option$source === undefined ? DF_SOURCE : _option$source,
        _option$sortBy = option.sortBy,
        sortBy = _option$sortBy === undefined ? DF_SORT_BY : _option$sortBy,
        apiKey = option.apiKey;

    option.apiKey = undefined;
    return ROOT + '?source=' + source + '&apiKey=' + apiKey + '&sortBy=' + sortBy;
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