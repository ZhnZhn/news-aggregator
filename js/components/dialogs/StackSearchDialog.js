"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefInput5 = _interopRequireDefault(require("./hooks/useRefInput"));

var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

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
},
    _getRefValue = function _getRefValue(ref) {
  return ref.current;
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
      _hLoad = (0, _react.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'SO',
      requestType: 'SEARCH',
      tagged: _getInputTagged(),
      inTitle: _getInputInTitle(),
      sortBy: _getRefValue(_refSortBy),
      fromDate: _toUTCSecond(_getInputFromDate()),
      toDate: _toUTCSecond(_getInputToDate())
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _commandButtons = _useDecorDialog[1],
      _hKeyDown = _useDecorDialog[2],
      _titleTagged = _crInputTitle('Tagged', DF_TAGGED),
      _titleInTitle = _crInputTitle('In Title', DF_IN_TITLE);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    rootStyle: TS.R_DIALOG,
    browserCaptionStyle: TS.BROWSER_CAPTION,
    styleButton: TS.BT,
    caption: "Search Questions",
    isShow: isShow,
    commandButtons: _commandButtons,
    onKeyDown: _hKeyDown,
    onShowChart: onShow,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: _refTagged,
      caption: _titleTagged,
      initValue: DF_TAGGED
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: _refInTitle,
      caption: _titleInTitle,
      initValue: DF_IN_TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "SortBy",
      initItem: DF_SORT_BY,
      options: SORT_BY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectSortBy
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        ref: _refFromDate,
        caption: "From Date",
        hasClear: false,
        style: TS.INPUT_DATE,
        initValue: INITIAL_FROM_DATE,
        errorMsg: DATE_ERR_MSG,
        onTest: _onTestDate
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        ref: _refToDate,
        caption: "To Date",
        hasClear: false,
        style: TS.INPUT_DATE,
        initValue: INITIAL_TO_DATE,
        errorMsg: DATE_ERR_MSG,
        onTest: _onTestDate
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.StackOverflow, {})
    })]
  });
};

var _default = StackSearchDialog;
exports["default"] = _default;
//# sourceMappingURL=StackSearchDialog.js.map