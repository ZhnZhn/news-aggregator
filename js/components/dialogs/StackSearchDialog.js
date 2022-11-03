"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefInput5 = _interopRequireDefault(require("./hooks/useRefInput"));

var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _PoweredByLink = require("../links/PoweredByLink");

var _jsxRuntime = require("preact/jsx-runtime");

var DATE_ERR_MSG = "YYYY-MM-DD";

var INITIAL_FROM_DATE = _dt["default"].getFromDate(1),
    INITIAL_TO_DATE = _dt["default"].getToDate(),
    _onTestDate = _dt["default"].isValidDate,
    _toUTCSecond = _dt["default"].toUTCSecond,
    SORT_BY_OPTIONS = [{
  caption: "Activity, Recent Day",
  value: "activity"
}, {
  caption: "Creation Date",
  value: "creation"
}, {
  caption: "Score",
  value: "votes"
}, {
  caption: "Relevance",
  value: "relevance"
}],
    DF_SORT_BY = SORT_BY_OPTIONS[2],
    DF_TAGGED = 'CSS',
    DF_IN_TITLE = 'flexbox',
    _crInputTitle = function _crInputTitle(prefix, dfValue) {
  return prefix + " (Default: " + dfValue + ")";
};

var StackSearchDialog = function StackSearchDialog(_ref) {
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
      _useRefInput = (0, _useRefInput5["default"])(DF_TAGGED),
      _refTagged = _useRefInput[0],
      _getInputTagged = _useRefInput[1],
      _useRefInput2 = (0, _useRefInput5["default"])(DF_IN_TITLE),
      _refInTitle = _useRefInput2[0],
      _getInputInTitle = _useRefInput2[1],
      _useRefSelectOption = (0, _useRefSelectOption2["default"])(DF_SORT_BY.value),
      _refSortBy = _useRefSelectOption[0],
      _selectSortBy = _useRefSelectOption[1],
      _useRefInput3 = (0, _useRefInput5["default"])(INITIAL_FROM_DATE),
      _refFromDate = _useRefInput3[0],
      _getInputFromDate = _useRefInput3[1],
      _useRefInput4 = (0, _useRefInput5["default"])(INITIAL_TO_DATE),
      _refToDate = _useRefInput4[0],
      _getInputToDate = _useRefInput4[1],
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'SO',
      requestType: 'SEARCH',
      tagged: _getInputTagged(),
      inTitle: _getInputInTitle(),
      sortBy: (0, _uiApi.getRefValue)(_refSortBy),
      fromDate: _toUTCSecond(_getInputFromDate()),
      toDate: _toUTCSecond(_getInputToDate())
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _hKeyDown = _useDecorDialog[1],
      _titleTagged = _crInputTitle('Tagged', DF_TAGGED),
      _titleInTitle = _crInputTitle('In Title', DF_IN_TITLE);

  return (0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "Search Questions",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: _refTagged,
      caption: _titleTagged,
      initValue: DF_TAGGED
    }), (0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: _refInTitle,
      caption: _titleInTitle,
      initValue: DF_IN_TITLE
    }), (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "SortBy",
      initItem: DF_SORT_BY,
      options: SORT_BY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectSortBy
    }), (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        ref: _refFromDate,
        caption: "From Date",
        hasClear: false,
        style: TS.INPUT_DATE,
        initValue: INITIAL_FROM_DATE,
        errorMsg: DATE_ERR_MSG,
        onTest: _onTestDate
      }), (0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        ref: _refToDate,
        caption: "To Date",
        hasClear: false,
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

var _default = StackSearchDialog;
exports["default"] = _default;
//# sourceMappingURL=StackSearchDialog.js.map