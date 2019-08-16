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

var _crUrl2 = function _crUrl2(_ref) {
  var source = _ref.source,
      sortBy = _ref.sortBy;

  var _topic = sortBy === C.TOP ? C.TOPIC_TOP + '?' : C.TOPIC_EVERYTHING + '?sortBy=' + sortBy + '&language=en&';
  return '' + C.ROOT_V2 + _topic + 'sources=' + source;
};

var NewsApi = {
  getRequestUrl: function getRequestUrl(option) {
    return _crUrl2(option);
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
//# sourceMappingURL=NewsApi.js.map