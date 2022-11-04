"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefSelectOption4 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _OptionFn = require("../zhn-m-input/OptionFn");

var _PoweredByLink = require("../links/PoweredByLink");

var _jsxRuntime = require("preact/jsx-runtime");

var OPTION_COUNTRIES = [["Australia", "AU"], ["Austria", "AT"], ["Belarus", "BY"], ["Belguim", "BE"], ["Brazil", "BR"], ["Bulgaria", "BG"], ["Canada", "CA"], ["Chile", "CL"], ["China", "CN"], ["Colombia", "CO"], ["Croatia", "HR"], ["Czech Republic", "CZ"], ["Denmark", "DK"], ["Estonia", "EE"], ["Finland", "FI"], ["France", "FR"], ["Germany", "DE"], ["Greece", "GR"], ["Hong Kong", "HK"], ["Hungary", "HU"], ["India", "IN"], ["Indonesia", "ID"], ["Iran", "IR"], ["Ireland", "IE"], ["Israel", "IL"], ["Italy", "IT"], ["Japan", "JP"], ["Malaysia", "MY"], ["Mexico", "MX"], ["Nertherlands", "NL"], ["New Zealand", "NZ"], ["Nigeria", "NG"], ["Norway", "NO"], ["Philippines", "PH"], ["Poland", "PL"], ["Portugal", "PT"], ["Romania", "RO"], ["Russia", "RU"], ["Serbia", "RS"], ["Singapore", "SG"], ["Slovakia", "SK"], ["Slovenia", "SI"], ["South Africa", "ZA"], ["South Korea", "KR"], ["Spain", "ES"], ["Sweden", "SE"], ["Switzerland", "CH"], ["Taiwan", "TW"], ["Thailand", "TH"], ["Türkiye", "TR"], ["Ukraine", "UA"], ["United Kingdom", "GB"], ["United States", "US"], ["Vietnam", "VN"]],
    OPTION_TOPICS = [["Business", "business"], ["Politics", "politics"], ["Entertainment", "entertainment"], ["Health", "health"], ["Travel", "travel"], ["Financial", "financial_news"], ["Sports", "sports"], ["Technology", "tech"], ["Real Estate", "real_estate"], ["Education", "education"], ["Fashion", "fashion"], ["Science", "science"], ["Architects", "architects"]],
    OPTION_LANGUAGES = [["All", ""], ["English", "english"]],
    DF_COUNTRY = OPTION_COUNTRIES[0],
    INITIAL_COUNTRY_VALUE = (0, _OptionFn.getItemValue)(DF_COUNTRY),
    DF_TOPIC = OPTION_TOPICS[0],
    INITIAL_TOPIC_VALUE = (0, _OptionFn.getItemValue)(DF_TOPIC),
    DF_LANGUAGE = OPTION_LANGUAGES[0],
    INITIAL_LANGUAGE_VALUE = (0, _OptionFn.getItemValue)(DF_LANGUAGE);

var WebzCountryDialog = function WebzCountryDialog(_ref) {
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
      _useRefSelectOption = (0, _useRefSelectOption4["default"])(INITIAL_COUNTRY_VALUE),
      _refCountry = _useRefSelectOption[0],
      _selectCountry = _useRefSelectOption[1],
      _useRefSelectOption2 = (0, _useRefSelectOption4["default"])(INITIAL_TOPIC_VALUE),
      _refTopic = _useRefSelectOption2[0],
      _selectTopic = _useRefSelectOption2[1],
      _useRefSelectOption3 = (0, _useRefSelectOption4["default"])(INITIAL_LANGUAGE_VALUE),
      _refLanguage = _useRefSelectOption3[0],
      _selectLanguage = _useRefSelectOption3[1],
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: "W",
      country: (0, _uiApi.getRefValue)(_refCountry),
      topic: (0, _uiApi.getRefValue)(_refTopic),
      lang: (0, _uiApi.getRefValue)(_refLanguage)
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _hKeyDown = _useDecorDialog[1];

  return (0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "Webz.io: By Country",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Country",
        initItem: DF_COUNTRY,
        options: OPTION_COUNTRIES,
        styleConfig: TS.SELECT,
        onSelect: _selectCountry
      })
    }), (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Topic",
        initItem: DF_TOPIC,
        options: OPTION_TOPICS,
        styleConfig: TS.SELECT,
        onSelect: _selectTopic
      })
    }), (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Language",
        initItem: DF_LANGUAGE,
        options: OPTION_LANGUAGES,
        styleConfig: TS.SELECT,
        onSelect: _selectLanguage
      })
    }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByWebzLink, {
      style: TS.POWERED_BY
    })]
  });
};

var _default = WebzCountryDialog;
exports["default"] = _default;
//# sourceMappingURL=WebzCountryDialog.js.map