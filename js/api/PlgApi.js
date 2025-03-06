"use strict";

exports.__esModule = true;
exports.isNextUrl = exports.Plg = void 0;
var _isTypeFn = require("../utils/isTypeFn");
const _isArr = Array.isArray,
  ROOT_URL = "https://api.polygon.io",
  API_URL = `${ROOT_URL}/v2/reference/news`;
const isNextUrl = nextUrl => (0, _isTypeFn.isStr)(nextUrl) && nextUrl.slice(0, 22) === ROOT_URL;
exports.isNextUrl = isNextUrl;
const Plg = exports.Plg = {
  getRequestUrl(option) {
    const {
      next_url,
      apiKey,
      ticker
    } = option;
    option.apiKey = void 0;
    return isNextUrl(next_url) ? `${next_url}&apiKey=${apiKey}` : `${API_URL}?ticker=${ticker}&limit=10&apiKey=${apiKey}`;
  },
  checkResponse(json) {
    const {
      results
    } = json || {};
    return _isArr(results);
  }
};
//# sourceMappingURL=PlgApi.js.map