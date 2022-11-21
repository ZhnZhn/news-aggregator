"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _TheNewsApiFn = require("./TheNewsApiFn");
var TheNewsApiSearch = {
  getRequestUrl: function getRequestUrl(option) {
    var search = option.search,
      category = option.category,
      sortBy = option.sortBy,
      _categoryQuery = (0, _TheNewsApiFn.crQueryToken)(category, 'categories');
    return "" + (0, _TheNewsApiFn.crApiUrl)('all', option) + _categoryQuery + "&search=" + search + "&sort=" + sortBy;
  },
  checkResponse: _TheNewsApiFn.checkResponse
};
var _default = TheNewsApiSearch;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiSearch.js.map