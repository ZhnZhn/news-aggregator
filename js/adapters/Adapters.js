"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _NewsApiAdapter = _interopRequireDefault(require("./NewsApiAdapter"));

var _WebhoseAdapter = _interopRequireDefault(require("./WebhoseAdapter"));

var _StackOverflowAdapter = _interopRequireDefault(require("./StackOverflowAdapter"));

var _IexAdapter = _interopRequireDefault(require("./IexAdapter"));

var _FmpAdapter = _interopRequireDefault(require("./FmpAdapter"));

var _CryptoCompareAdapter = _interopRequireDefault(require("./CryptoCompareAdapter"));

var _CoinStatsAdapter = _interopRequireDefault(require("./CoinStatsAdapter"));

var _MessariAdapter = _interopRequireDefault(require("./MessariAdapter"));

var Adapters = {
  News: _NewsApiAdapter["default"],
  Webhose: _WebhoseAdapter["default"],
  StackOverflow: _StackOverflowAdapter["default"],
  Iex: _IexAdapter["default"],
  Fmp: _FmpAdapter["default"],
  CryptoCompare: _CryptoCompareAdapter["default"],
  CoinStats: _CoinStatsAdapter["default"],
  Messari: _MessariAdapter["default"]
};
var _default = Adapters;
exports["default"] = _default;
//# sourceMappingURL=Adapters.js.map