"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const TOPIC_OPTIONS = [['All', ''], ['Blockchain', 'blockchain'], ['Earnings', 'earnings'], ['IPO', 'ipo'], ['Mergers & Acquisitions', 'mergers_and_acquisitions'], ['Financial Markets', 'financial_markets'], ['Economy - Fiscal Policy', 'economy_fiscal'], ['Economy - Monetary Policy', 'economy_monetary'], ['Economy - Macro/Overall', 'economy_macro'], ['Energy & Transportation', 'energy_transportation'], ['Finance', 'finance'], ['Life Sciences', 'life_sciences'], ['Manufacturing', 'manufacturing'], ['Real Estate & Construction', 'real_estate'], ['Retail & Wholesale', 'retail_wholesale'], ['Technology', 'technology']],
  SORTBY_OPTIONS = [['Latest', 'LATEST'], ['Earliest', 'EARLIEST'], ['Relevance', 'RELEVANCE']],
  LIMIT_OPTIONS = [['Limit 50', '50'], ['Limit 100', '100'], ['Limit 200', '200']],
  DF_TICKERS = "",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)("tickers", {
    dfValue: DF_TICKERS,
    inputProps: (0, _DialogFn.crInputProps)(16),
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("topics", TOPIC_OPTIONS, {
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("sortBy", SORTBY_OPTIONS), (0, _DialogFn.crInputSelectConfig)("limit", LIMIT_OPTIONS)],
  _getDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
const AvSentimentsDialog = props => {
  const paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf),
    [INPUT_CONFIGS, INITIAL_INPUTS, TOGGLES, IS_INPUTS] = _getDialogConfig();
  return (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
    ...props,
    caption: paneCaption,
    loadId: "AV",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.AlphaVantageLink, {})
  });
};
var _default = AvSentimentsDialog;
exports.default = _default;
//# sourceMappingURL=AvSentimentsDialog.js.map