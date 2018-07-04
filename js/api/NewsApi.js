'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//const ROOT_V1 = 'https://newsapi.org/v1/articles';
//const DF_SOURCE = 'bbc-sport';
//const DF_SORT_BY = 'top';
// `${ROOT_V1}?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`;

var C = {
  ROOT_V2: 'https://newsapi.org/v2/',
  TOP: 'top',
  TOPIC_TOP: 'top-headlines',
  TOPIC_EVERYTHING: 'everything'
};

var _crUrl2 = function _crUrl2(option, apiKey) {
  var source = option.source,
      sortBy = option.sortBy;

  var _topic = sortBy === C.TOP ? C.TOPIC_TOP + '?' : C.TOPIC_EVERYTHING + '?sortBy=' + sortBy + '&language=en&';

  return '' + C.ROOT_V2 + _topic + 'sources=' + source + '&apiKey=' + apiKey;
};

var NewsApi = {
  getRequestUrl: function getRequestUrl(option) {
    var apiKey = option.apiKey;

    option.apiKey = undefined;
    return _crUrl2(option, apiKey);
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
//# sourceMappingURL=NewsApi.js.map