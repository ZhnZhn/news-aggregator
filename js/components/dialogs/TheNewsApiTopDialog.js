"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog2 = _interopRequireDefault(require("./hooks/useDialog"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _PoweredByLink = require("../links/PoweredByLink");
var _DialogFn = require("./DialogFn");
var _TheNewsApiDialogFn = require("./TheNewsApiDialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var LOCALE_OPTIONS = [["All", "all"], ["Argentina", "ar"], ["Armenia", "am"], ["Australia", "au"], ["Austria", "at"], ["Belarus", "by"], ["Belgium", "be"], ["Bolivia", "bo"], ["Brazil", "br"], ["Bulgaria", "bg"], ["Canada", "ca"], ["Chile", "cl"], ["China", "cn"], ["Colombia", "co"], ["Croatia", "hr"], ["Czechia", "cz"], ["Ecuador", "ec"], ["Egypt", "eg"], ["France", "fr"], ["Germany", "de"], ["Greece", "gr"], ["Honduras", "hn"], ["Hong Kong", "hk"], ["India", "in"], ["Indonesia", "id"], ["Iran", "ir"], ["Ireland", "ie"], ["Israel", "il"], ["Italy", "it"], ["Japan", "jp"], ["Korea", "kr"], ["Mexico", "mx"], ["Netherlands", "nl"], ["New Zealand", "nz"], ["Nicaragua", "ni"], ["Pakistan", "pk"], ["Panama", "pa"], ["Peru", "pe"], ["Poland", "pl"], ["Portugal", "pt"], ["Qatar", "qa"], ["Romania", "ro"], ["Russia", "ru"], ["Saudi Arabia", "sa"], ["South Africa", "za"], ["Spain", "es"], ["Switzerland", "ch"], ["Syria", "sy"], ["Taiwan", "tw"], ["Thailand", "th"], ["Türkiye", "tr"], ["Ukraine", "ua"], ["United Kingdom", "gb"], ["United States Of America", "us"], ["Uruguay", "uy"], ["Venezuela", "ve"]],
  DF_LOCALE = LOCALE_OPTIONS[0],
  DOMAIN_OPTIONS = [["All", "all"], ["Business Insider", "businessinsider.com"], ["CNBC", "cnbc.com"], ["CNET", "cnet.com"], ["The Verge", "theverge.com"]],
  DF_DOMAIN = DOMAIN_OPTIONS[0],
  INPUT_CONFIGS = [['s', 'category', 'Category', _TheNewsApiDialogFn.CATEGORY_OPTIONS, _TheNewsApiDialogFn.DF_CATEGORY], ['s', 'locale', 'Locale', LOCALE_OPTIONS, DF_LOCALE], ['s', 'domain', 'Domain', DOMAIN_OPTIONS, DF_DOMAIN]],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS);
var TheNewsApiTopDialog = function TheNewsApiTopDialog(props) {
  var isShow = props.isShow,
    onShow = props.onShow,
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _useDialog = (0, _useDialog2["default"])(props, 'TNT', _refInputs),
    _refDialog = _useDialog[0],
    _hLoad = _useDialog[1],
    _hClose = _useDialog[2],
    _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
    TS = _useDecorDialog[0],
    _hKeyDown = _useDecorDialog[1];
  return (0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: _ProviderNames.THE_NEWS_API + ": Top",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn["default"], {
      children: [(0, _jsxRuntime.jsx)(_StackInputs["default"], {
        TS: TS,
        configs: INPUT_CONFIGS,
        onSelect: _selectInput
      }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByNewsApi, {
        style: TS.POWERED_BY
      })]
    })
  });
};
var _default = TheNewsApiTopDialog;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiTopDialog.js.map