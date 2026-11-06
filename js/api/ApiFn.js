"use strict";

exports.__esModule = true;
exports.crQueryToken = exports.crProviderApi = exports.addCrOptionFetchTo = void 0;
const crQueryToken = (paramName, value) => value ? `&${paramName}=${value}` : '';
exports.crQueryToken = crQueryToken;
const DF_CHECK_RESPONSE = (_json, _option) => true;
const crProviderApi = (getRequestUrl, checkResponse = DF_CHECK_RESPONSE) => ({
  getRequestUrl,
  checkResponse
});
exports.crProviderApi = crProviderApi;
const addCrOptionFetchTo = (api, crOptionFetch) => {
  api.crOptionFetch = crOptionFetch;
};
exports.addCrOptionFetchTo = addCrOptionFetchTo;
//# sourceMappingURL=ApiFn.js.map