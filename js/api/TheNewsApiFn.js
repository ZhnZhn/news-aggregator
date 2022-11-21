"use strict";

exports.__esModule = true;
exports.crQueryToken = exports.crApiUrl = exports.checkResponse = void 0;
var API_URL = 'https://api.thenewsapi.com/v1/news',
  QUERY_LIMIT = 'limit=5&language=en';
var _crPage = function _crPage(nextPage) {
  return nextPage ? "&page=" + nextPage : '';
};
var crApiUrl = function crApiUrl(type, option) {
  var apiKey = option.apiKey,
    nextPage = option.nextPage,
    _page = _crPage(nextPage);
  option.apiKey = void 0;
  return API_URL + "/" + type + "?api_token=" + apiKey + _page + "&" + QUERY_LIMIT;
};
exports.crApiUrl = crApiUrl;
var crQueryToken = function crQueryToken(value, parameterName) {
  return value === 'all' ? '' : "&" + parameterName + "=" + value;
};
exports.crQueryToken = crQueryToken;
var checkResponse = function checkResponse() {
  return true;
};
exports.checkResponse = checkResponse;
//# sourceMappingURL=TheNewsApiFn.js.map