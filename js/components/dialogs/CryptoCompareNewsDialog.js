"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const FEED_OPTIONS = [['All', 'ALL_NEWS_FEEDS'], ['Decrypt', 'decrypt'], ['CoinDesk', 'coindesk'], ['CoinTelegraph', 'cointelegraph'], ['CryptoCompare', 'cryptocompare']],
  CATEGORY_OPTIONS = [['All', 'ALL_NEWS_CATEGORIES'], ['Altcoin'], ['Asia'], ['Blockchain'], ['Business'], ['Commodity'], ['Exchange'], ['Fiat'], ['ICO'], ['Market'], ['Mining'], ['Regulation'], ['Trading'], ['Technology'], ['Sponsored'], ['Wallet']],
  SORTBY_OPTIONS = [['Latest', 'latest'], ['Popular', 'popular']],
  _crInputConfigs = () => [(0, _DialogFn.crInputSelectConfig)("category", CATEGORY_OPTIONS, {
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("feed", FEED_OPTIONS), (0, _DialogFn.crInputSelectConfig)("sortOrder", SORTBY_OPTIONS, {
    caption: "SortBy",
    is: true
  })],
  _getDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
const CryptoCompareNewsDialog = props => {
  const paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf),
    [INPUT_CONFIGS, INITIAL_INPUTS, TOGGLES, IS_INPUTS] = _getDialogConfig();
  return (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
    ...props,
    caption: paneCaption,
    loadId: "CCN",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.CryptoCompareLink, {})
  });
};
var _default = CryptoCompareNewsDialog;
exports.default = _default;
//# sourceMappingURL=CryptoCompareNewsDialog.js.map