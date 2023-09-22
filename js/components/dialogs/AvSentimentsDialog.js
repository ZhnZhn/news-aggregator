"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const TOPIC_OPTIONS = [['All', ''], ['Blockchain', 'blockchain'], ['Earnings', 'earnings'], ['IPO', 'ipo'], ['Mergers & Acquisitions', 'mergers_and_acquisitions'], ['Financial Markets', 'financial_markets'], ['Economy - Fiscal Policy', 'economy_fiscal'], ['Economy - Monetary Policy', 'economy_monetary'], ['Economy - Macro/Overall', 'economy_macro'], ['Energy & Transportation', 'energy_transportation'], ['Finance', 'finance'], ['Life Sciences', 'life_sciences'], ['Manufacturing', 'manufacturing'], ['Real Estate & Construction', 'real_estate'], ['Retail & Wholesale', 'retail_wholesale'], ['Technology', 'technology']],
  SORTBY_OPTIONS = [['Latest', 'LATEST'], ['Earliest', 'EARLIEST'], ['Relevance', 'RELEVANCE']],
  LIMIT_OPTIONS = [['Limit 50', '50'], ['Limit 200', '200']],
  DF_TICKERS = "",
  ID_TICKERS = "tickers",
  ID_TOPICS = "topics",
  ID_SORT_BY = "sortBy",
  ID_LIMIT = "limit",
  _crDialogConfig = () => {
    const INPUT_CONFIGS = [['t', ID_TICKERS, (0, _DialogFn.crInputCaption)(ID_TICKERS), DF_TICKERS, (0, _DialogFn.crInputProps)(16), true], (0, _DialogFn.crInputSelectConfig)(ID_TOPICS, TOPIC_OPTIONS, {
      is: true
    }), (0, _DialogFn.crInputSelectConfig)(ID_SORT_BY, SORTBY_OPTIONS), (0, _DialogFn.crInputSelectConfig)(ID_LIMIT, LIMIT_OPTIONS)];
    return [INPUT_CONFIGS, ...(0, _DialogFn.crDfInputs)(INPUT_CONFIGS)];
  },
  _getDialogConfig = (0, _uiApi.crLazyValue)(_crDialogConfig);
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