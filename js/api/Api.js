"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _NewsApi = _interopRequireDefault(require("./NewsApi"));
var _WebzApi = _interopRequireDefault(require("./WebzApi"));
var _DevToApi = _interopRequireDefault(require("./DevToApi"));
var _StackOverflowApi = _interopRequireDefault(require("./StackOverflowApi"));
var _FmpApi = _interopRequireDefault(require("./FmpApi"));
var _AvApi = _interopRequireDefault(require("./AvApi"));
var _NewsSearchApi = _interopRequireDefault(require("./NewsSearchApi"));
var _NewsApiTop = _interopRequireDefault(require("./NewsApiTop"));
var _TheNewsApiSearch = _interopRequireDefault(require("./TheNewsApiSearch"));
var _TheNewsApiTop = _interopRequireDefault(require("./TheNewsApiTop"));
var _CryptoCompareApi = _interopRequireDefault(require("./CryptoCompareApi"));
var _CoinStatsApi = _interopRequireDefault(require("./CoinStatsApi"));
var _MessariApi = _interopRequireDefault(require("./MessariApi"));
var _RedditApi = _interopRequireDefault(require("./RedditApi"));
const Api = {
  News: _NewsApi.default,
  Webz: _WebzApi.default,
  DevTo: _DevToApi.default,
  StackOverflow: _StackOverflowApi.default,
  Fmp: _FmpApi.default,
  Av: _AvApi.default,
  NewsSearch: _NewsSearchApi.default,
  NewsTop: _NewsApiTop.default,
  CryptoCompare: _CryptoCompareApi.default,
  CoinStats: _CoinStatsApi.default,
  Messari: _MessariApi.default,
  TheNewsSearch: _TheNewsApiSearch.default,
  TheNewsTop: _TheNewsApiTop.default,
  Reddit: _RedditApi.default
};
var _default = exports.default = Api;
//# sourceMappingURL=Api.js.map