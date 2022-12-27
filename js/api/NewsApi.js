"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _NewsApiFns = _interopRequireDefault(require("./NewsApiFns"));
//const ROOT_V1 = 'https://newsapi.org/v1/articles';
//const DF_SOURCE = 'bbc-sport';
//const DF_SORT_BY = 'top';
// `${ROOT_V1}?source=${source}&apiKey=${apiKey}&sortBy=${sortBy}`;

var API_URL = 'https://newsapi.org/v2/',
  TOP = 'top',
  TOPIC_TOP = 'top-headlines',
  TOPIC_EVERYTHING = 'everything';
var _crUrl2 = function _crUrl2(_ref) {
  var source = _ref.source,
    sortBy = _ref.sortBy;
  var _topic = sortBy === TOP ? TOPIC_TOP + "?" : TOPIC_EVERYTHING + "?sortBy=" + sortBy + "&language=en&";
  return "" + API_URL + _topic + "sources=" + source;
};
var NewsApi = (0, _extends2["default"])({
  getRequestUrl: function getRequestUrl(option) {
    return _crUrl2(option);
  }
}, _NewsApiFns["default"]);
var _default = NewsApi;
exports["default"] = _default;
//# sourceMappingURL=NewsApi.js.map