"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _TheNewsApiFn = require("./TheNewsApiFn");
var _crQueryToken = function _crQueryToken(value, parameterName) {
  return value === 'all' ? '' : "&" + parameterName + "=" + value;
};
var TheNewsApiTop = {
  getRequestUrl: function getRequestUrl(option) {
    var category = option.category,
      locale = option.locale,
      domain = option.domain,
      _categoryQuery = _crQueryToken(category, 'categories'),
      _domainQuery = _crQueryToken(domain, 'domains'),
      _localeQuery = _crQueryToken(locale, 'locale');
    return "" + (0, _TheNewsApiFn.crApiUrl)('top', option) + _localeQuery + _categoryQuery + _domainQuery;
  },
  checkResponse: _TheNewsApiFn.checkResponse
};
var _default = TheNewsApiTop;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiTop.js.map