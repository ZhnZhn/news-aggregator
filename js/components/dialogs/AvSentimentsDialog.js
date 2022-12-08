"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var TOPIC_OPTIONS = [['All', ''], ['Blockchain', 'blockchain'], ['Earnings', 'earnings'], ['IPO', 'ipo'], ['Mergers & Acquisitions', 'mergers_and_acquisitions'], ['Financial Markets', 'financial_markets'], ['Economy - Fiscal Policy', 'economy_fiscal'], ['Economy - Monetary Policy', 'economy_monetary'], ['Economy - Macro/Overall', 'economy_macro'], ['Energy & Transportation', 'energy_transportation'], ['Finance', 'finance'], ['Life Sciences', 'life_sciences'], ['Manufacturing', 'manufacturing'], ['Real Estate & Construction', 'real_estate'], ['Retail & Wholesale', 'retail_wholesale'], ['Technology', 'technology']],
  SORTBY_OPTIONS = [['Latest', 'LATEST'], ['Earliest', 'EARLIEST'], ['Relevance', 'RELEVANCE']],
  LIMIT_OPTIONS = [['Limit 50', '50'], ['Limit 200', '200']],
  DF_TICKERS = '',
  INPUT_CONFIGS = [['t', 'tickers', 'Tickers', DF_TICKERS, (0, _extends2["default"])({}, _DialogFn.SYMBOL_INPUT_PROPS), true], ['s', 'topics', 'Topics', TOPIC_OPTIONS, TOPIC_OPTIONS[0], true], ['s', 'sortBy', 'SortBy', SORTBY_OPTIONS, SORTBY_OPTIONS[0]], ['s', 'limit', 'Limit', LIMIT_OPTIONS, LIMIT_OPTIONS[0]]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var AvSentimentsDialog = function AvSentimentsDialog(props) {
  var paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf);
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: paneCaption,
    loadId: "AV",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.AlphaVantageLink, {})
  }));
};
var _default = AvSentimentsDialog;
exports["default"] = _default;
//# sourceMappingURL=AvSentimentsDialog.js.map