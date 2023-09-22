"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const NEWS_FILTER_OPTIONS = [["Latest", "latest"], ["Handpicked", "handpicked"], ["Trending", "trending"], ["Bullish", "bullish"], ["Bearish", "bearish"]],
  _crDialogConfig = () => {
    const INPUT_CONFIGS = [(0, _DialogFn.crInputSelectConfig)("filter", NEWS_FILTER_OPTIONS, {
      caption: "News filter"
    })];
    return [INPUT_CONFIGS, ...(0, _DialogFn.crDfInputs)(INPUT_CONFIGS)];
  },
  _getDialogConfig = (0, _uiApi.crLazyValue)(_crDialogConfig);
const CoinStatsDialog = props => {
  const paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf),
    [INPUT_CONFIGS, INITIAL_INPUTS, TOGGLES, IS_INPUTS] = _getDialogConfig();
  return (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
    ...props,
    caption: paneCaption,
    loadId: "CS",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.CoinStatsLink, {})
  });
};
var _default = CoinStatsDialog;
exports.default = _default;
//# sourceMappingURL=CoinStatsDialog.js.map