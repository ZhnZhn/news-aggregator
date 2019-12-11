"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _NewsApi = _interopRequireDefault(require("./NewsApi"));

var _WebhoseApi = _interopRequireDefault(require("./WebhoseApi"));

var _StackOverflowApi = _interopRequireDefault(require("./StackOverflowApi"));

var _IexApi = _interopRequireDefault(require("./IexApi"));

var _NewsSearchApi = _interopRequireDefault(require("./NewsSearchApi"));

var _NewsApiTop = _interopRequireDefault(require("./NewsApiTop"));

var _CryptoCompareApi = _interopRequireDefault(require("./CryptoCompareApi"));

var Api = {
  News: _NewsApi["default"],
  Webhose: _WebhoseApi["default"],
  StackOverflow: _StackOverflowApi["default"],
  Iex: _IexApi["default"],
  NewsSearch: _NewsSearchApi["default"],
  NewsTop: _NewsApiTop["default"],
  CryptoCompare: _CryptoCompareApi["default"]
};
var _default = Api;
exports["default"] = _default;
//# sourceMappingURL=Api.js.map