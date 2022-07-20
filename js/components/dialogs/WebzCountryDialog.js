"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefSelectOption4 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var OPTION_COUNTRIES = [{
  "caption": "Australia",
  value: "AU"
}, {
  "caption": "Austria",
  value: "AT"
}, {
  "caption": "Belarus",
  value: "BY"
}, {
  "caption": "Belguim",
  value: "BE"
}, {
  "caption": "Brazil",
  value: "BR"
}, {
  "caption": "Bulgaria",
  value: "BG"
}, {
  "caption": "Canada",
  value: "CA"
}, {
  "caption": "Chile",
  value: "CL"
}, {
  "caption": "China",
  value: "CN"
}, {
  "caption": "Colombia",
  value: "CO"
}, {
  "caption": "Croatia",
  value: "HR"
}, {
  "caption": "Czech Republic",
  value: "CZ"
}, {
  "caption": "Denmark",
  value: "DK"
}, {
  "caption": "Estonia",
  value: "EE"
}, {
  "caption": "Finland",
  value: "FI"
}, {
  "caption": "France",
  value: "FR"
}, {
  "caption": "Germany",
  value: "DE"
}, {
  "caption": "Greece",
  value: "GR"
}, {
  "caption": "Hong Kong",
  value: "HK"
}, {
  "caption": "Hungary",
  value: "HU"
}, {
  "caption": "India",
  value: "IN"
}, {
  "caption": "Indonesia",
  value: "ID"
}, {
  "caption": "Iran",
  value: "IR"
}, {
  "caption": "Ireland",
  value: "IE"
}, {
  "caption": "Israel",
  value: "IL"
}, {
  "caption": "Italy",
  value: "IT"
}, {
  "caption": "Japan",
  value: "JP"
}, {
  "caption": "Malaysia",
  value: "MY"
}, {
  "caption": "Mexico",
  value: "MX"
}, {
  "caption": "Nertherlands",
  value: "NL"
}, {
  "caption": "New Zealand",
  value: "NZ"
}, {
  "caption": "Nigeria",
  value: "NG"
}, {
  "caption": "Norway",
  value: "NO"
}, {
  "caption": "Philippines",
  value: "PH"
}, {
  "caption": "Poland",
  value: "PL"
}, {
  "caption": "Portugal",
  value: "PT"
}, {
  "caption": "Romania",
  value: "RO"
}, {
  "caption": "Russia",
  value: "RU"
}, {
  "caption": "Serbia",
  value: "RS"
}, {
  "caption": "Singapore",
  value: "SG"
}, {
  "caption": "Slovakia",
  value: "SK"
}, {
  "caption": "Slovenia",
  value: "SI"
}, {
  "caption": "South Africa",
  value: "ZA"
}, {
  "caption": "South Korea",
  value: "KR"
}, {
  "caption": "Spain",
  value: "ES"
}, {
  "caption": "Sweden",
  value: "SE"
}, {
  "caption": "Switzerland",
  value: "CH"
}, {
  "caption": "Taiwan",
  value: "TW"
}, {
  "caption": "Thailand",
  value: "TH"
}, {
  "caption": "Turkey",
  value: "TR"
}, {
  "caption": "Ukraine",
  value: "UA"
}, {
  "caption": "United Kingdom",
  value: "GB"
}, {
  "caption": "United States",
  value: "US"
}, {
  "caption": "Vietnam",
  value: "VN"
}],
    OPTION_TOPICS = [{
  "caption": "Business",
  "value": "business"
}, {
  "caption": "Politics",
  "value": "politics"
}, {
  "caption": "Entertainment",
  "value": "entertainment"
}, {
  "caption": "Health",
  "value": "health"
}, {
  "caption": "Travel",
  "value": "travel"
}, {
  "caption": "Financial",
  "value": "financial_news"
}, {
  "caption": "Sports",
  "value": "sports"
}, {
  "caption": "Technology",
  "value": "tech"
}, {
  "caption": "Real Estate",
  "value": "real_estate"
}, {
  "caption": "Education",
  "value": "education"
}, {
  "caption": "Fashion",
  "value": "fashion"
}, {
  "caption": "Science",
  "value": "science"
}, {
  "caption": "Architects",
  "value": "architects"
}],
    OPTION_LANGUAGES = [{
  "caption": "All",
  "value": ""
}, {
  "caption": "English",
  "value": "english"
}],
    DF_COUNTRY = OPTION_COUNTRIES[0],
    DF_TOPIC = OPTION_TOPICS[0],
    DF_LANGUAGE = OPTION_LANGUAGES[0];

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

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
      _useRefSelectOption = (0, _useRefSelectOption4["default"])(DF_COUNTRY.value),
      _refCountry = _useRefSelectOption[0],
      _selectCountry = _useRefSelectOption[1],
      _useRefSelectOption2 = (0, _useRefSelectOption4["default"])(DF_TOPIC.value),
      _refTopic = _useRefSelectOption2[0],
      _selectTopic = _useRefSelectOption2[1],
      _useRefSelectOption3 = (0, _useRefSelectOption4["default"])(''),
      _refLanguage = _useRefSelectOption3[0],
      _selectLanguage = _useRefSelectOption3[1],
      _hLoad = (0, _react.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: "W",
      country: _getRefValue(_refCountry),
      topic: _getRefValue(_refTopic),
      lang: _getRefValue(_refLanguage)
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _hKeyDown = _useDecorDialog[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Country",
        initItem: DF_COUNTRY,
        options: OPTION_COUNTRIES,
        styleConfig: TS.SELECT,
        onSelect: _selectCountry
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Topic",
        initItem: DF_TOPIC,
        options: OPTION_TOPICS,
        styleConfig: TS.SELECT,
        onSelect: _selectTopic
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Language",
        initItem: DF_LANGUAGE,
        options: OPTION_LANGUAGES,
        styleConfig: TS.SELECT,
        onSelect: _selectLanguage
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.Webz, {})
    })]
  });
};

var _default = WebzCountryDialog;
exports["default"] = _default;
//# sourceMappingURL=WebzCountryDialog.js.map