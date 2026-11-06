"use strict";

exports.__esModule = true;
exports.default = void 0;
var _TheNewsApiFn = require("./TheNewsApiFn");
const TheNewsApiSearch = {
  getRequestUrl(option) {
    const {
        search,
        category,
        sortBy
      } = option,
      _categoryQuery = (0, _TheNewsApiFn.crQueryTokenAll)('categories', category);
    return `${(0, _TheNewsApiFn.crApiUrl)('all', option)}${_categoryQuery}&search=${search}&sort=${sortBy}`;
  },
  checkResponse: _TheNewsApiFn.checkResponse
};
var _default = exports.default = TheNewsApiSearch;
//# sourceMappingURL=TheNewsApiSearch.js.map