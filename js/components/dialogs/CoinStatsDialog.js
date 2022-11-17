"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var NEWS_FOR_OPTIONS = [["Latest", "latest"], ["Handpicked", "handpicked"], ["Trending", "trending"], ["Bullish", "bullish"], ["Bearish", "bearish"]],
  DF_FILTER = NEWS_FOR_OPTIONS[0],
  INITIAL_FILTER_VALUE = (0, _OptionFn.getItemValue)(DF_FILTER);
var CoinStatsDialog = function CoinStatsDialog(_ref) {
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
    _useRefSelectOption = (0, _useRefSelectOption2["default"])(INITIAL_FILTER_VALUE),
    _refFilter = _useRefSelectOption[0],
    _selectFilter = _useRefSelectOption[1],
    _hLoad = (0, _uiApi.useCallback)(function () {
      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'CS',
        filter: (0, _uiApi.getRefValue)(_refFilter)
      });
      _hClose();
    }, []),
    _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
    TS = _useDecorDialog[0],
    _hKeyDown = _useDecorDialog[1],
    paneCaption = (0, _DialogFn.getPaneCaption)(itemConf);
  return (0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: paneCaption,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "News filter",
      initItem: DF_FILTER,
      options: NEWS_FOR_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectFilter
    }), (0, _jsxRuntime.jsx)(_PoweredBy["default"], {
      style: TS.POWERED_BY,
      children: (0, _jsxRuntime.jsx)(_Links.CoinStatsLink, {})
    })]
  });
};
var _default = CoinStatsDialog;
exports["default"] = _default;
//# sourceMappingURL=CoinStatsDialog.js.map