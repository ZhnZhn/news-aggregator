"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ApiFn = require("./ApiFn");
const _isArr = Array.isArray,
  API_URL = 'https://dev.to/api',
  getRequestUrl = ({
    tag,
    perPage,
    inRecentDays
  }) => `${API_URL}/articles?tag=${tag}&top=${inRecentDays}&per_page=${perPage}`,
  checkResponse = json => _isArr(json);
const DevToApi = (0, _ApiFn.crProviderApi)(getRequestUrl, checkResponse);
(0, _ApiFn.addCrOptionFetchTo)(DevToApi, () => ({
  headers: {
    Accept: "application/vnd.forem.api-v1+json"
  }
}));
var _default = exports.default = DevToApi;
//# sourceMappingURL=DevToApi.js.map