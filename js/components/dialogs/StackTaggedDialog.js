"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefInput4 = _interopRequireDefault(require("./hooks/useRefInput"));

var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _OptionFn = require("../zhn-m-input/OptionFn");

var _PoweredByLink = require("../links/PoweredByLink");

var _jsxRuntime = require("preact/jsx-runtime");

var DATE_ERR_MSG = "YYYY-MM-DD";

var INITIAL_FROM_DATE = _dt["default"].getFromDate(1),
    INITIAL_TO_DATE = _dt["default"].getToDate(),
    _onTestDate = _dt["default"].isValidDate,
    _toUTCSecond = _dt["default"].toUTCSecond,
    SORT_BY_OPTIONS = [["Activity, Recent Day", "activity"], ["Creation Date", "creation"], ["Score", "votes"], ["Hot Tab", "hot"], ["Hot Week Tab", "week"], ["Hot Month Tab", "month"]],
    DF_SORT_BY = SORT_BY_OPTIONS[4],
    INITIAL_SORT_BY_VALUE = (0, _OptionFn.getItemValue)(DF_SORT_BY),
    DF_TAG = "CSS";

var StackTaggedDialog = function StackTaggedDialog(_ref) {
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
      _useRefInput = (0, _useRefInput4["default"])(DF_TAG),
      _refTag = _useRefInput[0],
      _getInputTag = _useRefInput[1],
      _useRefSelectOption = (0, _useRefSelectOption2["default"])(INITIAL_SORT_BY_VALUE),
      _refSortBy = _useRefSelectOption[0],
      _selectSortBy = _useRefSelectOption[1],
      _useRefInput2 = (0, _useRefInput4["default"])(INITIAL_FROM_DATE),
      _refFromDate = _useRefInput2[0],
      _getInputFromDate = _useRefInput2[1],
      _useRefInput3 = (0, _useRefInput4["default"])(INITIAL_TO_DATE),
      _refToDate = _useRefInput3[0],
      _getInputToDate = _useRefInput3[1],
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'SO',
      requestType: 'TAG',
      tag: _getInputTag(),
      sortBy: (0, _uiApi.getRefValue)(_refSortBy),
      fromDate: _toUTCSecond(_getInputFromDate()),
      toDate: _toUTCSecond(_getInputToDate())
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _hKeyDown = _useDecorDialog[1],
      _tagCaption = "Tag (Default: " + DF_TAG + ")";

  return (0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "Tagged Questions",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: _refTag,
      caption: _tagCaption,
      initValue: DF_TAG,
      onEnter: _hLoad
    }), (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "SortBy",
      initItem: DF_SORT_BY,
      options: SORT_BY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectSortBy
    }), (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        ref: _refFromDate,
        hasClear: false,
        caption: "From Date",
        style: TS.INPUT_DATE,
        initValue: INITIAL_FROM_DATE,
        errorMsg: DATE_ERR_MSG,
        onTest: _onTestDate
      }), (0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        ref: _refToDate,
        hasClear: false,
        caption: "To Date",
        style: TS.INPUT_DATE,
        initValue: INITIAL_TO_DATE,
        errorMsg: DATE_ERR_MSG,
        onTest: _onTestDate
      })]
    }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByStackOverflow, {
      style: TS.POWERED_BY
    })]
  });
};

var _default = StackTaggedDialog;
exports["default"] = _default;
//# sourceMappingURL=StackTaggedDialog.js.map