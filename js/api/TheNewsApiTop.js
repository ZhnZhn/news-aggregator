"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _TheNewsApiFn = require("./TheNewsApiFn");
var TheNewsApiTop = {
  getRequestUrl: function getRequestUrl(option) {
    var category = option.category,
      locale = option.locale,
      domain = option.domain,
      _categoryQuery = (0, _TheNewsApiFn.crQueryTokenAll)('categories', category),
      _domainQuery = (0, _TheNewsApiFn.crQueryTokenAll)('domains', domain),
      _localeQuery = (0, _TheNewsApiFn.crQueryTokenAll)('locale', locale);
    return "" + (0, _TheNewsApiFn.crApiUrl)('top', option) + _localeQuery + _categoryQuery + _domainQuery;
  },
  checkResponse: _TheNewsApiFn.checkResponse
};
var _default = TheNewsApiTop;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiTop.js.map