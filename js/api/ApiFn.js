"use strict";

exports.__esModule = true;
exports.crQueryToken = exports.crProviderApi = void 0;
const crQueryToken = (paramName, value) => value ? `&${paramName}=${value}` : '';
exports.crQueryToken = crQueryToken;
const DF_CHECK_RESPONSE = (_json, _option) => true;
const crProviderApi = function (getRequestUrl, checkResponse) {
  if (checkResponse === void 0) {
    checkResponse = DF_CHECK_RESPONSE;
  }
  return {
    getRequestUrl,
    checkResponse
  };
};
exports.crProviderApi = crProviderApi;
//# sourceMappingURL=ApiFn.js.map