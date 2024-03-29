"use strict";

exports.__esModule = true;
exports.crQueryTokenAll = exports.crApiUrl = exports.checkResponse = void 0;
var _ApiFn = require("./ApiFn");
var API_URL = 'https://api.thenewsapi.com/v1/news',
  QUERY_LIMIT = 'limit=3&language=en';
var _crPage = function _crPage(nextPage) {
  return (0, _ApiFn.crQueryToken)('page', nextPage);
};
var crApiUrl = function crApiUrl(type, option) {
  var apiKey = option.apiKey,
    nextPage = option.nextPage,
    _page = _crPage(nextPage);
  option.apiKey = void 0;
  return API_URL + "/" + type + "?api_token=" + apiKey + _page + "&" + QUERY_LIMIT;
};
exports.crApiUrl = crApiUrl;
var crQueryTokenAll = function crQueryTokenAll(parameterName, value) {
  return value === 'all' ? '' : (0, _ApiFn.crQueryToken)(parameterName, value);
};
exports.crQueryTokenAll = crQueryTokenAll;
var checkResponse = function checkResponse() {
  return true;
};
exports.checkResponse = checkResponse;
//# sourceMappingURL=TheNewsApiFn.js.map