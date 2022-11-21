"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _uiApi = require("../uiApi");
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefSelectOption4 = _interopRequireDefault(require("./hooks/useRefSelectOption"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _PoweredByLink = require("../links/PoweredByLink");
var _TheNewsApiDialogFn = require("./TheNewsApiDialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var LOCALE_OPTIONS = [["All", "all"], ["Argentina", "ar"], ["Armenia", "am"], ["Australia", "au"], ["Austria", "at"], ["Belarus", "by"], ["Belgium", "be"], ["Bolivia", "bo"], ["Brazil", "br"], ["Bulgaria", "bg"], ["Canada", "ca"], ["Chile", "cl"], ["China", "cn"], ["Colombia", "co"], ["Croatia", "hr"], ["Czechia", "cz"], ["Ecuador", "ec"], ["Egypt", "eg"], ["France", "fr"], ["Germany", "de"], ["Greece", "gr"], ["Honduras", "hn"], ["Hong Kong", "hk"], ["India", "in"], ["Indonesia", "id"], ["Iran", "ir"], ["Ireland", "ie"], ["Israel", "il"], ["Italy", "it"], ["Japan", "jp"], ["Korea", "kr"], ["Mexico", "mx"], ["Netherlands", "nl"], ["New Zealand", "nz"], ["Nicaragua", "ni"], ["Pakistan", "pk"], ["Panama", "pa"], ["Peru", "pe"], ["Poland", "pl"], ["Portugal", "pt"], ["Qatar", "qa"], ["Romania", "ro"], ["Russia", "ru"], ["Saudi Arabia", "sa"], ["South Africa", "za"], ["Spain", "es"], ["Switzerland", "ch"], ["Syria", "sy"], ["Taiwan", "tw"], ["Thailand", "th"], ["Türkiye", "tr"], ["Ukraine", "ua"], ["United Kingdom", "gb"], ["United States Of America", "us"], ["Uruguay", "uy"], ["Venezuela", "ve"]],
  DF_LOCALE = LOCALE_OPTIONS[0],
  INITIAL_LOCALE_VALUE = (0, _OptionFn.getItemValue)(DF_LOCALE),
  DOMAIN_OPTIONS = [["All", "all"], ["Business Insider", "businessinsider.com"], ["CNBC", "cnbc.com"], ["CNET", "cnet.com"], ["The Verge", "theverge.com"]],
  DF_DOMAIN = DOMAIN_OPTIONS[0],
  INITIAL_DOMAIN_VALUE = (0, _OptionFn.getItemValue)(DF_DOMAIN);
var TheNewsApiTopDialog = function TheNewsApiTopDialog(_ref) {
  var isShow = _ref.isShow,
    type = _ref.type,
    source = _ref.source,
    itemConf = _ref.itemConf,
    onLoad = _ref.onLoad,
    onShow = _ref.onShow,
    onClose = _ref.onClose;
  var _useRefClose = (0, _useRefClose2["default"])(onClose),
    _refDialog = _useRefClose[0],
    _hClose = _useRefClose[1],
    _useRefSelectOption = (0, _useRefSelectOption4["default"])(_TheNewsApiDialogFn.INITIAL_CAREGORY_VALUE),
    _refCategory = _useRefSelectOption[0],
    _selectCategory = _useRefSelectOption[1],
    _useRefSelectOption2 = (0, _useRefSelectOption4["default"])(INITIAL_LOCALE_VALUE),
    _refLocale = _useRefSelectOption2[0],
    _selectLocale = _useRefSelectOption2[1],
    _useRefSelectOption3 = (0, _useRefSelectOption4["default"])(INITIAL_DOMAIN_VALUE),
    _refDomain = _useRefSelectOption3[0],
    _selectDomain = _useRefSelectOption3[1],
    _hLoad = (0, _uiApi.useCallback)(function () {
      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'TNT',
        category: (0, _uiApi.getRefValue)(_refCategory),
        locale: (0, _uiApi.getRefValue)(_refLocale),
        domain: (0, _uiApi.getRefValue)(_refDomain)
      });
      _hClose();
    }, []),
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
      children: [(0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "Category",
        initItem: _TheNewsApiDialogFn.DF_CATEGORY,
        options: _TheNewsApiDialogFn.CATEGORY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCategory
      }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "Locale",
        initItem: DF_LOCALE,
        options: LOCALE_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectLocale
      }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "Domain",
        initItem: DF_DOMAIN,
        options: DOMAIN_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectDomain
      }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByNewsApi, {
        style: TS.POWERED_BY
      })]
    })
  });
};
var _default = TheNewsApiTopDialog;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiTopDialog.js.map