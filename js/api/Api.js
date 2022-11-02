"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _NewsApi = _interopRequireDefault(require("./NewsApi"));

var _WebzApi = _interopRequireDefault(require("./WebzApi"));

var _StackOverflowApi = _interopRequireDefault(require("./StackOverflowApi"));

var _IexApi = _interopRequireDefault(require("./IexApi"));

var _FmpApi = _interopRequireDefault(require("./FmpApi"));

var _NewsSearchApi = _interopRequireDefault(require("./NewsSearchApi"));

var _NewsApiTop = _interopRequireDefault(require("./NewsApiTop"));

var _TheNewsApiTop = _interopRequireDefault(require("./TheNewsApiTop"));

var _CryptoCompareApi = _interopRequireDefault(require("./CryptoCompareApi"));

var _CoinStatsApi = _interopRequireDefault(require("./CoinStatsApi"));

var _MessariApi = _interopRequireDefault(require("./MessariApi"));

var Api = {
  News: _NewsApi["default"],
  Webz: _WebzApi["default"],
  StackOverflow: _StackOverflowApi["default"],
  Iex: _IexApi["default"],
  Fmp: _FmpApi["default"],
  NewsSearch: _NewsSearchApi["default"],
  NewsTop: _NewsApiTop["default"],
  CryptoCompare: _CryptoCompareApi["default"],
  CoinStats: _CoinStatsApi["default"],
  Messari: _MessariApi["default"],
  TheNewsTop: _TheNewsApiTop["default"]
};
var _default = Api;
exports["default"] = _default;
//# sourceMappingURL=Api.js.map