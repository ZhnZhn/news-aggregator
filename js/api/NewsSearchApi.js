"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _NewsApiFns = _interopRequireDefault(require("./NewsApiFns"));
var API_URL = 'https://newsapi.org/v2/everything';
var NewsApi = (0, _extends2["default"])({
  getRequestUrl: function getRequestUrl(_ref) {
    var _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === void 0 ? 'Weather' : _ref$symbol,
      _ref$sortBy = _ref.sortBy,
      sortBy = _ref$sortBy === void 0 ? 'relevancy' : _ref$sortBy;
    return API_URL + "?q=" + symbol + "&sortBy=" + sortBy;
  }
}, _NewsApiFns["default"]);
var _default = NewsApi;
exports["default"] = _default;
//# sourceMappingURL=NewsSearchApi.js.map