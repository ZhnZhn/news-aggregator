"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _uiApi = require("../uiApi");
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefInput2 = _interopRequireDefault(require("./hooks/useRefInput"));
var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));
var _Links = require("../links/Links");
var _jsxRuntime = require("preact/jsx-runtime");
var RECENT_OPTIONS = [["10 News", "10"], ["20 News", "20"], ["30 News", "30"], ["40 News", "40"], ["50 News", "50"]],
  DF_RECENT = RECENT_OPTIONS[1],
  INITIAL_RECENT_VALUE = (0, _OptionFn.getItemValue)(DF_RECENT),
  DF_SYMBOL = "AAPL",
  S_INPUT_STYLE = {
    textTransform: 'uppercase'
  };
var IexNewsDialog = function IexNewsDialog(_ref) {
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
    _useRefInput = (0, _useRefInput2["default"])(DF_SYMBOL),
    _refInputSymbol = _useRefInput[0],
    _getInputSymbol = _useRefInput[1],
    _useRefSelectOption = (0, _useRefSelectOption2["default"])(INITIAL_RECENT_VALUE),
    _refRecent = _useRefSelectOption[0],
    _selectRecent = _useRefSelectOption[1],
    _hLoad = (0, _uiApi.useCallback)(function () {
      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'IEX',
        symbol: _getInputSymbol().toUpperCase(),
        recent: (0, _uiApi.getRefValue)(_refRecent)
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
    caption: _ProviderNames.IEX_CLOUD + ": Stock News",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      ref: _refInputSymbol,
      style: TS.INPUT_ROOT,
      inputStyle: S_INPUT_STYLE,
      maxLength: "10",
      caption: "Stock Symbol",
      initValue: DF_SYMBOL,
      autoCapitalize: "on",
      onEnter: _hLoad
    }), (0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "Recent",
      initItem: DF_RECENT,
      options: RECENT_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectRecent
    }), (0, _jsxRuntime.jsx)(_PoweredBy["default"], {
      style: TS.POWERED_BY,
      children: (0, _jsxRuntime.jsx)(_Links.IexApiLink, {})
    })]
  });
};
var _default = IexNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=IexNewsDialog.js.map