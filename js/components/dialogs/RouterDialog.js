"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _DialogType = _interopRequireDefault(require("./DialogType1"));

var _WebhoseQueryDialog = _interopRequireDefault(require("./WebhoseQueryDialog"));

var _StackTaggedDialog = _interopRequireDefault(require("./StackTaggedDialog"));

var _StackSearchDialog = _interopRequireDefault(require("./StackSearchDialog"));

var _IexNewsDialog = _interopRequireDefault(require("./IexNewsDialog"));

var _FmpNewsDialog = _interopRequireDefault(require("./FmpNewsDialog"));

var _NewsApiSearchDialog = _interopRequireDefault(require("./NewsApiSearchDialog"));

var _NewsApiTopDialog = _interopRequireDefault(require("./NewsApiTopDialog"));

var _CryptoCompareNewsDialog = _interopRequireDefault(require("./CryptoCompareNewsDialog"));

var _CoinStatsDialog = _interopRequireDefault(require("./CoinStatsDialog"));

var _MessariDialog = _interopRequireDefault(require("./MessariDialog"));

var R = {
  DEFAULT: _DialogType["default"],
  DialogType1: _DialogType["default"],
  WebhoseQuery: _WebhoseQueryDialog["default"],
  StackTagged: _StackTaggedDialog["default"],
  StackSearch: _StackSearchDialog["default"],
  CryptoCompareNews: _CryptoCompareNewsDialog["default"],
  CoinStatsNews: _CoinStatsDialog["default"],
  MessariNews: _MessariDialog["default"],
  IexNews: _IexNewsDialog["default"],
  FmpNews: _FmpNewsDialog["default"],
  NewsApiSearch: _NewsApiSearchDialog["default"],
  NewsApiTop: _NewsApiTopDialog["default"]
};
var RouterDialog = {
  getElement: function getElement(type) {
    return R[type] || R.DEFAULT;
  }
};
var _default = RouterDialog;
exports["default"] = _default;
//# sourceMappingURL=RouterDialog.js.map