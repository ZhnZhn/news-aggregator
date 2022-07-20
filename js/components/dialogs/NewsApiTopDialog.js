"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefSelectOption3 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var _CATEGORY = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    CATEGORY_OPTIONS = _CATEGORY.map(function (str) {
  return {
    caption: (0, _toFirstUpperCase["default"])(str),
    value: str
  };
}),
    DF_CATEGORY = CATEGORY_OPTIONS[0],
    COUNTRY_OPTIONS = [{
  caption: "Argentina",
  value: "ar"
}, {
  caption: "Australia",
  value: "au"
}, {
  caption: "Austria",
  value: "at"
}, {
  caption: "Belguim",
  value: "be"
}, {
  caption: "Brazil",
  value: "br"
}, {
  caption: "Bulgaria",
  value: "bg"
}, {
  caption: "Canada",
  value: "ca"
}, {
  caption: "China",
  value: "cn"
}, {
  caption: "Colombia",
  value: "co"
}, {
  caption: "Cuba",
  value: "cu"
}, {
  caption: "Czechia",
  value: "cz"
}, {
  caption: "Egypt",
  value: "eg"
}, {
  caption: "France",
  value: "fr"
}, {
  caption: "Germany",
  value: "de"
}, {
  caption: "Greece",
  value: "gr"
}, {
  caption: "Hong Kong",
  value: "hk"
}, {
  caption: "Hungary",
  value: "hu"
}, {
  caption: "India",
  value: "in"
}, {
  caption: "Indonesia",
  value: "id"
}, {
  caption: "Ireland",
  value: "ie"
}, {
  caption: "Israel",
  value: "il"
}, {
  caption: "Italy",
  value: "it"
}, {
  caption: "Japan",
  value: "jp"
}, {
  caption: "Latvia",
  value: "lv"
}, {
  caption: "Lithuania",
  value: "lt"
}, {
  caption: "Malaysia",
  value: "my"
}, {
  caption: "Mexico",
  value: "mx"
}, {
  caption: "Morocco",
  value: "ma"
}, {
  caption: "Netherlands",
  value: "nl"
}, {
  caption: "New Zealand",
  value: "nz"
}, {
  caption: "Nigeria",
  value: "ng"
}, {
  caption: "Norway",
  value: "no"
}, {
  caption: "Phillipines",
  value: "ph"
}, {
  caption: "Poland",
  value: "pl"
}, {
  caption: "Portugal",
  value: "pt"
}, {
  caption: "Romania",
  value: "ro"
}, {
  caption: "Russian Federation",
  value: "ru"
}, {
  caption: "Saudi Arabia",
  value: "sa"
}, {
  caption: "Serbia",
  value: "rs"
}, {
  caption: "Singapore",
  value: "sg"
}, {
  caption: "Slovakia",
  value: "sk"
}, {
  caption: "Slovenia",
  value: "si"
}, {
  caption: "South Africa",
  value: "za"
}, {
  caption: "South Korea",
  value: "kr"
}, {
  caption: "Sweden",
  value: "se"
}, {
  caption: "Switzerland",
  value: "ch"
}, {
  caption: "Taiwan",
  value: "tw"
}, {
  caption: "Thailand",
  value: "th"
}, {
  caption: "Turkey",
  value: "tr"
}, {
  caption: "Ukraine",
  value: "ua"
}, {
  caption: "United Arab Emirates",
  value: "ae"
}, {
  caption: "United Kingdom",
  value: "gb"
}, {
  caption: "United States",
  value: "us"
}, {
  caption: "Venezuala",
  value: "ve"
}],
    DF_COUNTRY = COUNTRY_OPTIONS[52],
    _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var NewsApiTopDialog = function NewsApiTopDialog(_ref) {
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
      _useRefSelectOption = (0, _useRefSelectOption3["default"])(DF_CATEGORY.value),
      _refCategory = _useRefSelectOption[0],
      _selectCategory = _useRefSelectOption[1],
      _useRefSelectOption2 = (0, _useRefSelectOption3["default"])(DF_COUNTRY.value),
      _refCountry = _useRefSelectOption2[0],
      _selectCountry = _useRefSelectOption2[1],
      _hLoad = (0, _react.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'NT',
      category: _getRefValue(_refCategory),
      country: _getRefValue(_refCountry)
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
    caption: "NewsApi Top By",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Category",
        initItem: DF_CATEGORY,
        options: CATEGORY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCategory
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Country",
        initItem: DF_COUNTRY,
        options: COUNTRY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCountry
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.NewsApi, {})
    })]
  });
};

var _default = NewsApiTopDialog;
exports["default"] = _default;
//# sourceMappingURL=NewsApiTopDialog.js.map