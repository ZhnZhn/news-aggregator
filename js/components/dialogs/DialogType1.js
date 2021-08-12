"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var SORT_BY_OPTIONS = [{
  caption: 'Top',
  value: 'top'
}, {
  caption: 'Popular',
  value: 'popularity'
}, {
  caption: 'Newest',
  value: 'publishedAt'
}],
    DF_SORT_BY = SORT_BY_OPTIONS[0],
    _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var DialogType1 = function DialogType1(_ref) {
  var isShow = _ref.isShow,
      caption = _ref.caption,
      type = _ref.type,
      source = _ref.source,
      itemConf = _ref.itemConf,
      onLoad = _ref.onLoad,
      onShow = _ref.onShow,
      onClose = _ref.onClose;

  var _useRefClose = (0, _useRefClose2["default"])(onClose),
      _refDialog = _useRefClose[0],
      _hClose = _useRefClose[1],
      _useRefSelectOption = (0, _useRefSelectOption2["default"])(DF_SORT_BY.value),
      _refSortBy = _useRefSelectOption[0],
      _selectSortBy = _useRefSelectOption[1],
      _hLoad = (0, _react.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      sortBy: _getRefValue(_refSortBy)
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _commandButtons = _useDecorDialog[1],
      _hKeyDown = _useDecorDialog[2];

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    rootStyle: TS.R_DIALOG,
    browserCaptionStyle: TS.BROWSER_CAPTION,
    styleButton: TS.BT,
    caption: caption,
    commandButtons: _commandButtons,
    onKeyDown: _hKeyDown,
    onShowChart: onShow,
    onClose: _hClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "SortBy",
      initItem: DF_SORT_BY,
      options: SORT_BY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectSortBy
    })
  });
};

var _default = DialogType1;
exports["default"] = _default;
//# sourceMappingURL=DialogType1.js.map