"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var NEWS_FILTER_OPTIONS = [["Latest", "latest"], ["Handpicked", "handpicked"], ["Trending", "trending"], ["Bullish", "bullish"], ["Bearish", "bearish"]],
  DF_FILTER = NEWS_FILTER_OPTIONS[0],
  INPUT_CONFIGS = [['s', 'filter', 'News filter', NEWS_FILTER_OPTIONS, DF_FILTER, true]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var CoinStatsDialog = function CoinStatsDialog(props) {
  var paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf);
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: paneCaption,
    loadId: "CS",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.CoinStatsLink, {})
  }));
};
var _default = CoinStatsDialog;
exports["default"] = _default;
//# sourceMappingURL=CoinStatsDialog.js.map