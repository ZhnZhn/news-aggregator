"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefInput2 = _interopRequireDefault(require("./hooks/useRefInput"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var DF_SYMBOL = "AAPL";

var FmpNewsDialog = function FmpNewsDialog(_ref) {
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
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'FMP',
      symbol: _getInputSymbol()
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _hKeyDown = _useDecorDialog[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "FMP: Stock News",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      ref: _refInputSymbol,
      style: TS.INPUT_ROOT,
      maxLength: "10",
      caption: "Stock Symbol",
      initValue: DF_SYMBOL,
      autoCapitalize: "on",
      onEnter: _hLoad
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.FmpApi, {})
    })]
  });
};

var _default = FmpNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=FmpNewsDialog.js.map