"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _NewsApiAdapter = _interopRequireDefault(require("./NewsApiAdapter"));
var _TheNewsApiAdapter = _interopRequireDefault(require("./TheNewsApiAdapter"));
var _WebzAdapter = _interopRequireDefault(require("./WebzAdapter"));
var _DevToAdapter = _interopRequireDefault(require("./DevToAdapter"));
var _StackOverflowAdapter = _interopRequireDefault(require("./StackOverflowAdapter"));
var _FmpAdapter = _interopRequireDefault(require("./FmpAdapter"));
var _AvAdapter = _interopRequireDefault(require("./AvAdapter"));
var _CryptoCompareAdapter = _interopRequireDefault(require("./CryptoCompareAdapter"));
var _CoinStatsAdapter = _interopRequireDefault(require("./CoinStatsAdapter"));
var _MessariAdapter = _interopRequireDefault(require("./MessariAdapter"));
var _RedditAdapter = _interopRequireDefault(require("./RedditAdapter"));
const Adapters = {
  News: _NewsApiAdapter.default,
  TheNews: _TheNewsApiAdapter.default,
  Webz: _WebzAdapter.default,
  DevTo: _DevToAdapter.default,
  StackOverflow: _StackOverflowAdapter.default,
  Fmp: _FmpAdapter.default,
  Av: _AvAdapter.default,
  CryptoCompare: _CryptoCompareAdapter.default,
  CoinStats: _CoinStatsAdapter.default,
  Messari: _MessariAdapter.default,
  Reddit: _RedditAdapter.default
};
var _default = exports.default = Adapters;
//# sourceMappingURL=Adapters.js.map