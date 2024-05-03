"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _Dialog = require("./Dialog.Style");
var _useRefClose = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefSelectOption = _interopRequireDefault(require("./hooks/useRefSelectOption"));
var _useKeyDown = _interopRequireDefault(require("./hooks/useKeyDown"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _jsxRuntime = require("preact/jsx-runtime");
const SORT_BY_OPTIONS = [['Top', 'top'], ['Popular', 'popularity'], ['Newest', 'publishedAt']],
  DF_SORT_BY = SORT_BY_OPTIONS[0],
  INITIAL_SORTBY_VALUE = (0, _OptionFn.getItemValue)(DF_SORT_BY),
  INPUT_SELECT_STYLE = (0, _Dialog.crInputSelectStyle)();
const DialogType1 = _ref => {
  let {
    isShow,
    caption,
    type,
    source,
    itemConf,
    onLoad,
    onShow,
    onClose
  } = _ref;
  const [_refDialog, _hClose] = (0, _useRefClose.default)(onClose),
    [_refSortBy, _selectSortBy] = (0, _useRefSelectOption.default)(INITIAL_SORTBY_VALUE)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hLoad = (0, _uiApi.useCallback)(() => {
      onLoad({
        type,
        source,
        itemConf,
        sortBy: (0, _uiApi.getRefValue)(_refSortBy)
      });
      _hClose();
    }, [])
    // type, source, itemConf, onLoad
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _useKeyDown.default)(_hLoad, _hClose);
  return (0, _jsxRuntime.jsx)(_Comp.default.DraggableDialog, {
    refEl: _refDialog,
    isShow: isShow,
    captionStyle: _Dialog.S_BROWSER_CAPTION,
    caption: caption,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShowChart: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsx)(_Comp.default.InputSelect, {
      style: INPUT_SELECT_STYLE,
      caption: "SortBy",
      initItem: DF_SORT_BY,
      options: SORT_BY_OPTIONS,
      onSelect: _selectSortBy
    })
  });
};
var _default = exports.default = DialogType1;
//# sourceMappingURL=DialogType1.js.map