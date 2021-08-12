"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//as-markdown
var C = {
  URL: 'https://data.messari.io/api/v1/news',
  FIELDS: 'title,tags,published_at,url,author/name'
};
var MessariApi = {
  getRequestUrl: function getRequestUrl(_ref) {
    var assetKey = _ref.assetKey;
    return assetKey && assetKey !== 'all' ? C.URL + "/" + assetKey + "?fields=" + C.FIELDS : C.URL + "?fields=" + C.FIELDS;
  },
  checkResponse: function checkResponse(json, option) {
    return true;
  }
};
var _default = MessariApi;
exports["default"] = _default;
//# sourceMappingURL=MessariApi.js.map