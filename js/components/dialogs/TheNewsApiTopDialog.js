"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _ProviderNames = require("../../conf/ProviderNames");
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _TheNewsApiDialogFn = require("./TheNewsApiDialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var LOCALE_OPTIONS = [["All", "all"], ["Argentina", "ar"], ["Armenia", "am"], ["Australia", "au"], ["Austria", "at"], ["Belarus", "by"], ["Belgium", "be"], ["Bolivia", "bo"], ["Brazil", "br"], ["Bulgaria", "bg"], ["Canada", "ca"], ["Chile", "cl"], ["China", "cn"], ["Colombia", "co"], ["Croatia", "hr"], ["Czechia", "cz"], ["Ecuador", "ec"], ["Egypt", "eg"], ["France", "fr"], ["Germany", "de"], ["Greece", "gr"], ["Honduras", "hn"], ["Hong Kong", "hk"], ["India", "in"], ["Indonesia", "id"], ["Iran", "ir"], ["Ireland", "ie"], ["Israel", "il"], ["Italy", "it"], ["Japan", "jp"], ["Korea", "kr"], ["Mexico", "mx"], ["Netherlands", "nl"], ["New Zealand", "nz"], ["Nicaragua", "ni"], ["Pakistan", "pk"], ["Panama", "pa"], ["Peru", "pe"], ["Poland", "pl"], ["Portugal", "pt"], ["Qatar", "qa"], ["Romania", "ro"], ["Russia", "ru"], ["Saudi Arabia", "sa"], ["South Africa", "za"], ["Spain", "es"], ["Switzerland", "ch"], ["Syria", "sy"], ["Taiwan", "tw"], ["Thailand", "th"], ["Türkiye", "tr"], ["Ukraine", "ua"], ["United Kingdom", "gb"], ["United States Of America", "us"], ["Uruguay", "uy"], ["Venezuela", "ve"]],
  DF_LOCALE = LOCALE_OPTIONS[0],
  DOMAIN_OPTIONS = [["All", "all"], ["Business Insider", "businessinsider.com"], ["CNBC", "cnbc.com"], ["CNET", "cnet.com"], ["The Verge", "theverge.com"]],
  DF_DOMAIN = DOMAIN_OPTIONS[0],
  INPUT_CONFIGS = [['s', 'category', 'Category', _TheNewsApiDialogFn.CATEGORY_OPTIONS, _TheNewsApiDialogFn.DF_CATEGORY, true], ['s', 'locale', 'Locale', LOCALE_OPTIONS, DF_LOCALE, true], ['s', 'domain', 'Domain', DOMAIN_OPTIONS, DF_DOMAIN]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var TheNewsApiTopDialog = function TheNewsApiTopDialog(props) {
  var caption = _ProviderNames.THE_NEWS_API + ": Top";
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: caption,
    loadId: "TNT",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.TheNewsApiLink, {})
  }));
};
var _default = TheNewsApiTopDialog;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiTopDialog.js.map