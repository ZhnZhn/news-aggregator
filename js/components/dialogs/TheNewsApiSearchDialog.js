"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefInput2 = _interopRequireDefault(require("./hooks/useRefInput"));
var _useRefSelectOption3 = _interopRequireDefault(require("./hooks/useRefSelectOption"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _DialogFn = require("./DialogFn");
var _PoweredByLink = require("../links/PoweredByLink");
var _TheNewsApiDialogFn = require("./TheNewsApiDialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var SORT_BY_OPTIONS = [["Relevancy", "relevance_score"], ["PublishedAt", " published_at"]],
  DF_SORT_BY = SORT_BY_OPTIONS[0],
  INITIAL_SORT_BY_VALUE = (0, _OptionFn.getItemValue)(DF_SORT_BY),
  DF_TERM = "Weather";
var TheNewsApiSearchDialog = function TheNewsApiSearchDialog(_ref) {
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
    _useRefInput = (0, _useRefInput2["default"])(DF_TERM),
    _refInputTerm = _useRefInput[0],
    _getInputTerm = _useRefInput[1],
    _useRefSelectOption = (0, _useRefSelectOption3["default"])(_TheNewsApiDialogFn.INITIAL_CAREGORY_VALUE),
    _refCategory = _useRefSelectOption[0],
    _selectCategory = _useRefSelectOption[1],
    _useRefSelectOption2 = (0, _useRefSelectOption3["default"])(INITIAL_SORT_BY_VALUE),
    _refSortBy = _useRefSelectOption2[0],
    _selectSortBy = _useRefSelectOption2[1],
    _hLoad = (0, _uiApi.useCallback)(function () {
      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'TNS',
        search: _getInputTerm(),
        category: (0, _uiApi.getRefValue)(_refCategory),
        sortBy: (0, _uiApi.getRefValue)(_refSortBy)
      });
      _hClose();
    }, []),
    _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
    TS = _useDecorDialog[0],
    _hKeyDown = _useDecorDialog[1],
    caption = (0, _DialogFn.getPaneCaption)(itemConf),
    _termCaption = "Term (Default: " + DF_TERM + ")";
  return (0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: caption,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: _refInputTerm,
      caption: _termCaption,
      initValue: DF_TERM,
      onEnter: _hLoad
    }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
      caption: "Category",
      initItem: _TheNewsApiDialogFn.DF_CATEGORY,
      options: _TheNewsApiDialogFn.CATEGORY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectCategory
    }), (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "SortBy",
      initItem: DF_SORT_BY,
      options: SORT_BY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectSortBy
    }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByTheNewsApi, {
      style: TS.POWERED_BY
    })]
  });
};
var _default = TheNewsApiSearchDialog;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiSearchDialog.js.map