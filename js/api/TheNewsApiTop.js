"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var API_URL = 'https://api.thenewsapi.com/v1/news/top',
  QUERY_LIMIT = 'limit=5&language=en';
var _crQueryToken = function _crQueryToken(value, parameterName) {
  return value === 'all' ? '' : "&" + parameterName + "=" + value;
};
var _crPage = function _crPage(nextPage) {
  return nextPage ? "&page=" + nextPage : '';
};
var TheNewsApiTop = {
  getRequestUrl: function getRequestUrl(option) {
    var apiKey = option.apiKey,
      category = option.category,
      locale = option.locale,
      domain = option.domain,
      nextPage = option.nextPage,
      _categoryQuery = _crQueryToken(category, 'categories'),
      _domainQuery = _crQueryToken(domain, 'domains'),
      _localeQuery = _crQueryToken(locale, 'locale'),
      _page = _crPage(nextPage);
    return API_URL + "?api_token=" + apiKey + _localeQuery + _categoryQuery + _domainQuery + _page + "&" + QUERY_LIMIT;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};
var _default = TheNewsApiTop;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiTop.js.map