"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ApiFn = require("./ApiFn");
const _isArr = Array.isArray,
  API_URL = 'https://dev.to/api',
  getRequestUrl = _ref => {
    let {
      tag,
      perPage,
      inRecentDays
    } = _ref;
    return `${API_URL}/articles?tag=${tag}&top=${inRecentDays}&per_page=${perPage}`;
  },
  checkResponse = json => _isArr(json);
const DevToApi = (0, _ApiFn.crProviderApi)(getRequestUrl, checkResponse);
var _default = exports.default = DevToApi;
//# sourceMappingURL=DevToApi.js.map