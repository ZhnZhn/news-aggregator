"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefSelectOption3 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var _OptionFn = require("../zhn-m-input/OptionFn");

var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));

var _PoweredByLink = require("../links/PoweredByLink");

var _jsxRuntime = require("preact/jsx-runtime");

var _CATEGORY = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    CATEGORY_OPTIONS = (0, _OptionFn.crSelectOptions)(_CATEGORY),
    DF_CATEGORY = CATEGORY_OPTIONS[0],
    INITIAL_CATEGORY_VALUE = (0, _OptionFn.getItemValue)(DF_CATEGORY),
    COUNTRY_OPTIONS = [["Argentina", "ar"], ["Australia", "au"], ["Austria", "at"], ["Belguim", "be"], ["Brazil", "br"], ["Bulgaria", "bg"], ["Canada", "ca"], ["China", "cn"], ["Colombia", "co"], ["Cuba", "cu"], ["Czechia", "cz"], ["Egypt", "eg"], ["France", "fr"], ["Germany", "de"], ["Greece", "gr"], ["Hong Kong", "hk"], ["Hungary", "hu"], ["India", "in"], ["Indonesia", "id"], ["Ireland", "ie"], ["Israel", "il"], ["Italy", "it"], ["Japan", "jp"], ["Latvia", "lv"], ["Lithuania", "lt"], ["Malaysia", "my"], ["Mexico", "mx"], ["Morocco", "ma"], ["Netherlands", "nl"], ["New Zealand", "nz"], ["Nigeria", "ng"], ["Norway", "no"], ["Phillipines", "ph"], ["Poland", "pl"], ["Portugal", "pt"], ["Romania", "ro"], ["Russian Federation", "ru"], ["Saudi Arabia", "sa"], ["Serbia", "rs"], ["Singapore", "sg"], ["Slovakia", "sk"], ["Slovenia", "si"], ["South Africa", "za"], ["South Korea", "kr"], ["Sweden", "se"], ["Switzerland", "ch"], ["Taiwan", "tw"], ["Thailand", "th"], ["Türkiye", "tr"], ["Ukraine", "ua"], ["United Arab Emirates", "ae"], ["United Kingdom", "gb"], ["United States", "us"], ["Venezuala", "ve"]],
    DF_COUNTRY = COUNTRY_OPTIONS[52],
    INITIAL_COUNTRY_VALUE = (0, _OptionFn.getItemValue)(DF_COUNTRY);

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
      _useRefSelectOption = (0, _useRefSelectOption3["default"])(INITIAL_CATEGORY_VALUE),
      _refCategory = _useRefSelectOption[0],
      _selectCategory = _useRefSelectOption[1],
      _useRefSelectOption2 = (0, _useRefSelectOption3["default"])(INITIAL_COUNTRY_VALUE),
      _refCountry = _useRefSelectOption2[0],
      _selectCountry = _useRefSelectOption2[1],
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'NT',
      category: (0, _uiApi.getRefValue)(_refCategory),
      country: (0, _uiApi.getRefValue)(_refCountry)
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
    caption: "NewsApi Top By",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn["default"], {
      children: [(0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "Category",
        initItem: DF_CATEGORY,
        options: CATEGORY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCategory
      }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "Country",
        initItem: DF_COUNTRY,
        options: COUNTRY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCountry
      }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByNewsApi, {
        style: TS.POWERED_BY
      })]
    })
  });
};

var _default = NewsApiTopDialog;
exports["default"] = _default;
//# sourceMappingURL=NewsApiTopDialog.js.map