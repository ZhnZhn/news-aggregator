"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var FEED_OPTIONS = [['All', 'ALL_NEWS_FEEDS'], ['Decrypt', 'decrypt'], ['CoinDesk', 'coindesk'], ['CoinTelegraph', 'cointelegraph'], ['CryptoCompare', 'cryptocompare']],
  DF_FEED = FEED_OPTIONS[0],
  CATEGORY_OPTIONS = [['All', 'ALL_NEWS_CATEGORIES'], ['Altcoin'], ['Asia'], ['Blockchain'], ['Business'], ['Commodity'], ['Exchange'], ['Fiat'], ['ICO'], ['Market'], ['Mining'], ['Regulation'], ['Trading'], ['Technology'], ['Sponsored'], ['Wallet']],
  DF_CATEGORY = CATEGORY_OPTIONS[0],
  SORTBY_OPTIONS = [['Latest', 'latest'], ['Popular', 'popular']],
  DF_SORTBY = SORTBY_OPTIONS[0],
  INPUT_CONFIGS = [['s', 'category', 'Category', CATEGORY_OPTIONS, DF_CATEGORY, true], ['s', 'feed', 'Feed', FEED_OPTIONS, DF_FEED], ['s', 'sortOrder', 'SortBy', SORTBY_OPTIONS, DF_SORTBY, true]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var CryptoCompareNewsDialog = function CryptoCompareNewsDialog(props) {
  var paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf);
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: paneCaption,
    loadId: "CCN",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.CryptoCompareLink, {})
  }));
};
var _default = CryptoCompareNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=CryptoCompareNewsDialog.js.map