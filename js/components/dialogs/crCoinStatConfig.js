"use strict";

exports.__esModule = true;
exports.getCoinStatDialogConfig = void 0;
var _DialogFn = require("./DialogFn");
const NEWS_FILTER_OPTIONS = [["Latest", "latest"], ["Handpicked", "handpicked"], ["Trending", "trending"], ["Bullish", "bullish"], ["Bearish", "bearish"]],
  _crInputConfigs = () => [(0, _DialogFn.crInputSelectConfig)("filter", NEWS_FILTER_OPTIONS, {
    caption: "News filter"
  })];
const getCoinStatDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
exports.getCoinStatDialogConfig = getCoinStatDialogConfig;
//# sourceMappingURL=crCoinStatConfig.js.map