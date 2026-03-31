"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ApiFn = require("./ApiFn");
//as-markdown
const API_URL = 'https://data.messari.io/api/v1/news',
  FIELDS = 'title,tags,published_at,url,author/name',
  getRequestUrl = _ref => {
    let {
      assetKey
    } = _ref;
    return assetKey && assetKey !== 'all' ? `${API_URL}/${assetKey}?fields=${FIELDS}` : `${API_URL}?fields=${FIELDS}`;
  };
const MessariApi = (0, _ApiFn.crProviderApi)(getRequestUrl);
var _default = exports.default = MessariApi;
//# sourceMappingURL=MessariApi.js.map