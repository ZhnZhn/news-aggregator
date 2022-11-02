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

var _jsxRuntime = require("preact/jsx-runtime");

//'general | science | sports | business | health | entertainment | tech | politics | food | travel'
var CATEGORY_OPTIONS = [{
  caption: 'All',
  value: 'all'
}, {
  caption: 'General',
  value: 'general'
}, {
  caption: 'Science',
  value: 'science'
}, {
  caption: 'Sports',
  value: 'sports'
}, {
  caption: 'Business',
  value: 'business'
}, {
  caption: 'Health',
  value: 'health'
}, {
  caption: 'Tech',
  value: 'tech'
}, {
  caption: 'Politics',
  value: 'politics'
}, {
  caption: 'Food',
  value: 'food'
}, {
  caption: 'Travel',
  value: 'travel'
}],
    DF_CATEGORY = CATEGORY_OPTIONS[0],
    LOCALE_OPTIONS = [{
  caption: "All",
  value: "all"
}, {
  caption: "Argentina",
  value: "ar"
}, {
  caption: "Armenia",
  value: "am"
}, {
  caption: "Australia",
  value: "au"
}, {
  caption: "Austria",
  value: "at"
}, {
  caption: "Belarus",
  value: "by"
}, {
  caption: "Belgium",
  value: "be"
}, {
  caption: "Bolivia",
  value: "bo"
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
  caption: "Chile",
  value: "cl"
}, {
  caption: "China",
  value: "cn"
}, {
  caption: "Colombia",
  value: "co"
}, {
  caption: "Croatia",
  value: "hr"
}, {
  caption: "Czechia",
  value: "cz"
}, {
  caption: "Ecuador",
  value: "ec"
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
  caption: "Honduras",
  value: "hn"
}, {
  caption: "Hong Kong",
  value: "hk"
}, {
  caption: "India",
  value: "in"
}, {
  caption: "Indonesia",
  value: "id"
}, {
  caption: "Iran",
  value: "ir"
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
  caption: "Korea",
  value: "kr"
}, {
  caption: "Mexico",
  value: "mx"
}, {
  caption: "Netherlands",
  value: "nl"
}, {
  caption: "New Zealand",
  value: "nz"
}, {
  caption: "Nicaragua",
  value: "ni"
}, {
  caption: "Pakistan",
  value: "pk"
}, {
  caption: "Panama",
  value: "pa"
}, {
  caption: "Peru",
  value: "pe"
}, {
  caption: "Poland",
  value: "pl"
}, {
  caption: "Portugal",
  value: "pt"
}, {
  caption: "Qatar",
  value: "qa"
}, {
  caption: "Romania",
  value: "ro"
}, {
  caption: "Russia",
  value: "ru"
}, {
  caption: "Saudi Arabia",
  value: "sa"
}, {
  caption: "South Africa",
  value: "za"
}, {
  caption: "Spain",
  value: "es"
}, {
  caption: "Switzerland",
  value: "ch"
}, {
  caption: "Syria",
  value: "sy"
}, {
  caption: "Taiwan",
  value: "tw"
}, {
  caption: "Thailand",
  value: "th"
}, {
  caption: "Türkiye",
  value: "tr"
}, {
  caption: "Ukraine",
  value: "ua"
}, {
  caption: "United Kingdom",
  value: "gb"
}, {
  caption: "United States Of America",
  value: "us"
}, {
  caption: "Uruguay",
  value: "uy"
}, {
  caption: "Venezuela",
  value: "ve"
}],
    DF_LOCALE = LOCALE_OPTIONS[0],
    DOMAIN_OPTIONS = [{
  caption: "All",
  value: "all"
}, {
  caption: "Business Insider",
  value: "businessinsider.com"
}, {
  caption: "CNBC",
  value: "cnbc.com"
}, {
  caption: "CNET",
  value: "cnet.com"
}, {
  caption: "The Verge",
  value: "theverge.com"
}],
    DF_DOMAIN = DOMAIN_OPTIONS[0];

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
      _useRefSelectOption = (0, _useRefSelectOption4["default"])(DF_CATEGORY.value),
      _refCategory = _useRefSelectOption[0],
      _selectCategory = _useRefSelectOption[1],
      _useRefSelectOption2 = (0, _useRefSelectOption4["default"])(DF_LOCALE.value),
      _refLocale = _useRefSelectOption2[0],
      _selectLocale = _useRefSelectOption2[1],
      _useRefSelectOption3 = (0, _useRefSelectOption4["default"])(DF_DOMAIN.value),
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

  return (0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "TheNewsApi: Top",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Category",
        initItem: DF_CATEGORY,
        options: CATEGORY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCategory
      })
    }), (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Locale",
        initItem: DF_LOCALE,
        options: LOCALE_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectLocale
      })
    }), (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Domain",
        initItem: DF_DOMAIN,
        options: DOMAIN_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectDomain
      })
    }), (0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: (0, _jsxRuntime.jsx)(_Comp["default"].Link.TheNewsApi, {})
    })]
  });
};

var _default = TheNewsApiTopDialog;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiTopDialog.js.map