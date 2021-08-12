"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefInput2 = _interopRequireDefault(require("./hooks/useRefInput"));

var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var RECENT_OPTIONS = [{
  caption: "10 News",
  value: "10"
}, {
  caption: "20 News",
  value: "20"
}, {
  caption: "30 News",
  value: "30"
}, {
  caption: "40 News",
  value: "40"
}, {
  caption: "50 News",
  value: "50"
}],
    DF_RECENT = RECENT_OPTIONS[1],
    DF_SYMBOL = "AAPL";

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
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
      _useRefSelectOption = (0, _useRefSelectOption2["default"])(DF_RECENT.value),
      _refRecent = _useRefSelectOption[0],
      _selectRecent = _useRefSelectOption[1],
      _hLoad = (0, _react.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'IEX',
      symbol: _getInputSymbol(),
      recent: _getRefValue(_refRecent)
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _commandButtons = _useDecorDialog[1],
      _hKeyDown = _useDecorDialog[2];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    rootStyle: TS.R_DIALOG,
    browserCaptionStyle: TS.BROWSER_CAPTION,
    styleButton: TS.BT,
    caption: "IEX Cloud: Stock News",
    isShow: isShow,
    commandButtons: _commandButtons,
    onKeyDown: _hKeyDown,
    onShowChart: onShow,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      ref: _refInputSymbol,
      style: TS.INPUT_ROOT,
      maxLength: "10",
      caption: "Stock Symbol",
      initValue: DF_SYMBOL,
      autoCapitalize: "on",
      onEnter: _hLoad
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "Recent",
      initItem: DF_RECENT,
      options: RECENT_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectRecent
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.IexApi, {})
    })]
  });
};

var _default = IexNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=IexNewsDialog.js.map