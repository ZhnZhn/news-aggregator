"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog2 = _interopRequireDefault(require("./hooks/useDialog"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _PoweredByLink = require("../links/PoweredByLink");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var _CATEGORY = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
  CATEGORY_OPTIONS = (0, _OptionFn.crSelectOptions)(_CATEGORY),
  DF_CATEGORY = CATEGORY_OPTIONS[0],
  COUNTRY_OPTIONS = [["Argentina", "ar"], ["Australia", "au"], ["Austria", "at"], ["Belguim", "be"], ["Brazil", "br"], ["Bulgaria", "bg"], ["Canada", "ca"], ["China", "cn"], ["Colombia", "co"], ["Cuba", "cu"], ["Czechia", "cz"], ["Egypt", "eg"], ["France", "fr"], ["Germany", "de"], ["Greece", "gr"], ["Hong Kong", "hk"], ["Hungary", "hu"], ["India", "in"], ["Indonesia", "id"], ["Ireland", "ie"], ["Israel", "il"], ["Italy", "it"], ["Japan", "jp"], ["Latvia", "lv"], ["Lithuania", "lt"], ["Malaysia", "my"], ["Mexico", "mx"], ["Morocco", "ma"], ["Netherlands", "nl"], ["New Zealand", "nz"], ["Nigeria", "ng"], ["Norway", "no"], ["Phillipines", "ph"], ["Poland", "pl"], ["Portugal", "pt"], ["Romania", "ro"], ["Russian Federation", "ru"], ["Saudi Arabia", "sa"], ["Serbia", "rs"], ["Singapore", "sg"], ["Slovakia", "sk"], ["Slovenia", "si"], ["South Africa", "za"], ["South Korea", "kr"], ["Sweden", "se"], ["Switzerland", "ch"], ["Taiwan", "tw"], ["Thailand", "th"], ["Türkiye", "tr"], ["Ukraine", "ua"], ["United Arab Emirates", "ae"], ["United Kingdom", "gb"], ["United States", "us"], ["Venezuala", "ve"]],
  DF_COUNTRY = COUNTRY_OPTIONS[52],
  INPUT_CONFIGS = [['s', 'category', 'Category', CATEGORY_OPTIONS, DF_CATEGORY], ['s', 'country', 'Country', COUNTRY_OPTIONS, DF_COUNTRY]],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS)[0];
var NewsApiTopDialog = function NewsApiTopDialog(props) {
  var isShow = props.isShow,
    onShow = props.onShow,
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _useDialog = (0, _useDialog2["default"])(props, 'NT', _refInputs),
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
    caption: "Top By",
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
var _default = NewsApiTopDialog;
exports["default"] = _default;
//# sourceMappingURL=NewsApiTopDialog.js.map