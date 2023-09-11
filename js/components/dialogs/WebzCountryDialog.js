"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Dialog = require("./Dialog.Style");
var _useRefInputs = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog = _interopRequireDefault(require("./hooks/useDialog"));
var _useKeyDown = _interopRequireDefault(require("./hooks/useKeyDown"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _PoweredByLink = require("../links/PoweredByLink");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const OPTION_COUNTRIES = [["Australia", "AU"], ["Austria", "AT"], ["Belarus", "BY"], ["Belguim", "BE"], ["Brazil", "BR"], ["Bulgaria", "BG"], ["Canada", "CA"], ["Chile", "CL"], ["China", "CN"], ["Colombia", "CO"], ["Croatia", "HR"], ["Czech Republic", "CZ"], ["Denmark", "DK"], ["Estonia", "EE"], ["Finland", "FI"], ["France", "FR"], ["Germany", "DE"], ["Greece", "GR"], ["Hong Kong", "HK"], ["Hungary", "HU"], ["India", "IN"], ["Indonesia", "ID"], ["Iran", "IR"], ["Ireland", "IE"], ["Israel", "IL"], ["Italy", "IT"], ["Japan", "JP"], ["Malaysia", "MY"], ["Mexico", "MX"], ["Nertherlands", "NL"], ["New Zealand", "NZ"], ["Nigeria", "NG"], ["Norway", "NO"], ["Philippines", "PH"], ["Poland", "PL"], ["Portugal", "PT"], ["Romania", "RO"], ["Russia", "RU"], ["Serbia", "RS"], ["Singapore", "SG"], ["Slovakia", "SK"], ["Slovenia", "SI"], ["South Africa", "ZA"], ["South Korea", "KR"], ["Spain", "ES"], ["Sweden", "SE"], ["Switzerland", "CH"], ["Taiwan", "TW"], ["Thailand", "TH"], ["Türkiye", "TR"], ["Ukraine", "UA"], ["United Kingdom", "GB"], ["United States", "US"], ["Vietnam", "VN"]],
  OPTION_TOPICS = [["Business", "business"], ["Politics", "politics"], ["Entertainment", "entertainment"], ["Health", "health"], ["Travel", "travel"], ["Financial", "financial_news"], ["Sports", "sports"], ["Technology", "tech"], ["Real Estate", "real_estate"], ["Education", "education"], ["Fashion", "fashion"], ["Science", "science"], ["Architects", "architects"]],
  OPTION_LANGUAGES = [["All", ""], ["English", "english"]],
  DF_COUNTRY = OPTION_COUNTRIES[0],
  DF_TOPIC = OPTION_TOPICS[0],
  DF_LANGUAGE = OPTION_LANGUAGES[0],
  INPUT_CONFIGS = [['s', 'country', 'Country', OPTION_COUNTRIES, DF_COUNTRY], ['s', 'topic', 'Topic', OPTION_TOPICS, DF_TOPIC], ['s', 'lang', 'Language', OPTION_LANGUAGES, DF_LANGUAGE]],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS)[0];
const WebzCountryDialog = props => {
  const {
      isShow,
      onShow
    } = props,
    [_refInputs, _selectInput] = (0, _useRefInputs.default)(INITIAL_INPUTS),
    [_refDialog, _hLoad, _hClose] = (0, _useDialog.default)(props, 'W', _refInputs),
    _hKeyDown = (0, _useKeyDown.default)(_hLoad, _hClose);
  return (0, _jsxRuntime.jsx)(_DraggableDialog.default, {
    ref: _refDialog,
    isShow: isShow,
    captionStyle: _Dialog.S_BROWSER_CAPTION,
    caption: "By Country, Topic",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn.default, {
      children: [(0, _jsxRuntime.jsx)(_StackInputs.default, {
        configs: INPUT_CONFIGS,
        onSelect: _selectInput
      }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByWebzLink, {
        style: _Dialog.S_POWERED_BY
      })]
    })
  });
};
var _default = WebzCountryDialog;
exports.default = _default;
//# sourceMappingURL=WebzCountryDialog.js.map