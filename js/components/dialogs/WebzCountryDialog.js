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
var _jsxRuntime = require("preact/jsx-runtime");
var OPTION_COUNTRIES = [["Australia", "AU"], ["Austria", "AT"], ["Belarus", "BY"], ["Belguim", "BE"], ["Brazil", "BR"], ["Bulgaria", "BG"], ["Canada", "CA"], ["Chile", "CL"], ["China", "CN"], ["Colombia", "CO"], ["Croatia", "HR"], ["Czech Republic", "CZ"], ["Denmark", "DK"], ["Estonia", "EE"], ["Finland", "FI"], ["France", "FR"], ["Germany", "DE"], ["Greece", "GR"], ["Hong Kong", "HK"], ["Hungary", "HU"], ["India", "IN"], ["Indonesia", "ID"], ["Iran", "IR"], ["Ireland", "IE"], ["Israel", "IL"], ["Italy", "IT"], ["Japan", "JP"], ["Malaysia", "MY"], ["Mexico", "MX"], ["Nertherlands", "NL"], ["New Zealand", "NZ"], ["Nigeria", "NG"], ["Norway", "NO"], ["Philippines", "PH"], ["Poland", "PL"], ["Portugal", "PT"], ["Romania", "RO"], ["Russia", "RU"], ["Serbia", "RS"], ["Singapore", "SG"], ["Slovakia", "SK"], ["Slovenia", "SI"], ["South Africa", "ZA"], ["South Korea", "KR"], ["Spain", "ES"], ["Sweden", "SE"], ["Switzerland", "CH"], ["Taiwan", "TW"], ["Thailand", "TH"], ["Türkiye", "TR"], ["Ukraine", "UA"], ["United Kingdom", "GB"], ["United States", "US"], ["Vietnam", "VN"]],
  OPTION_TOPICS = [["Business", "business"], ["Politics", "politics"], ["Entertainment", "entertainment"], ["Health", "health"], ["Travel", "travel"], ["Financial", "financial_news"], ["Sports", "sports"], ["Technology", "tech"], ["Real Estate", "real_estate"], ["Education", "education"], ["Fashion", "fashion"], ["Science", "science"], ["Architects", "architects"]],
  OPTION_LANGUAGES = [["All", ""], ["English", "english"]],
  DF_COUNTRY = OPTION_COUNTRIES[0],
  DF_TOPIC = OPTION_TOPICS[0],
  DF_LANGUAGE = OPTION_LANGUAGES[0],
  INPUT_CONFIGS = [['s', 'country', 'Country', OPTION_COUNTRIES, DF_COUNTRY], ['s', 'topic', 'Topic', OPTION_TOPICS, DF_TOPIC], ['s', 'lang', 'Language', OPTION_LANGUAGES, DF_LANGUAGE]],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS);
var WebzCountryDialog = function WebzCountryDialog(props) {
  var isShow = props.isShow,
    onShow = props.onShow,
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _useDialog = (0, _useDialog2["default"])(props, 'W', _refInputs),
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
    caption: _ProviderNames.WEBZ_IO + ": By Country",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn["default"], {
      children: [(0, _jsxRuntime.jsx)(_StackInputs["default"], {
        TS: TS,
        configs: INPUT_CONFIGS,
        onSelect: _selectInput
      }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByWebzLink, {
        style: TS.POWERED_BY
      })]
    })
  });
};
var _default = WebzCountryDialog;
exports["default"] = _default;
//# sourceMappingURL=WebzCountryDialog.js.map