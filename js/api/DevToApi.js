"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var API_URL = 'https://dev.to/api';
var _isArr = Array.isArray;
var DevToApi = {
  getRequestUrl: function getRequestUrl(_ref) {
    var tag = _ref.tag,
      perPage = _ref.perPage,
      inRecentDays = _ref.inRecentDays;
    return API_URL + "/articles?tag=" + tag + "&top=" + inRecentDays + "&per_page=" + perPage;
  },
  checkResponse: function checkResponse(json, option) {
    return _isArr(json);
  }
};
var _default = DevToApi;
exports["default"] = _default;
//# sourceMappingURL=DevToApi.js.map