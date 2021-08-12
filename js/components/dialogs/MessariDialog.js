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

var NEWS_FOR_OPTIONS = [{
  caption: "All",
  value: "all"
}
/*,
{caption: "Bitcoin", value: "BTC"},
{caption: "Ethereum", value: "ETH"},
{caption: "Tether", value: "USDT"},
{caption: "XRP", value: "XRP"},
{caption: "Bitcoin-Cash", value: "BCH"},
{ caption: "Chainlink", value: "LINK"},
{ caption: "Cardano", value: "ADA"},
{ caption: "Bitcoin-SV", value: "BSV"},
{ caption: "Litecoin", value: "LTC"},
{ caption: "Binance-Coin", value: "BNB"},
{ caption: "Crypto-Com-Chain", value: "CRO"},
{ caption: "Tezos", value: "XTZ"},
{ caption: "EOS", value: "EOS"},
{ caption: "Stellar", value: "XLM"},
{ caption: "Monero", value: "XMR"},
{ caption: "Tron", value: "TRX"},
{ caption: "Unus-Sed-Leo", value: "LEO"},
{ caption: "USD-Coin", value: "USDC"},
{ caption: "Vechain", value: "VET"},
{ caption: "Cosmos", value: "ATOM"}
*/
],
    DF_ASSET_KEY = NEWS_FOR_OPTIONS[0];

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var MessariDialog = function MessariDialog(_ref) {
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
      _useRefSelectOption = (0, _useRefSelectOption2["default"])(DF_ASSET_KEY.value),
      _refAssetKey = _useRefSelectOption[0],
      _selectAssetKey = _useRefSelectOption[1],
      _hLoad = (0, _react.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'MS',
      assetKey: _getRefValue(_refAssetKey)
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
    caption: "Messari: Blockchain News",
    isShow: isShow,
    commandButtons: _commandButtons,
    onKeyDown: _hKeyDown,
    onShowChart: onShow,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "News about",
      initItem: DF_ASSET_KEY,
      options: NEWS_FOR_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectAssetKey
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.Messari, {})
    })]
  });
};

var _default = MessariDialog;
exports["default"] = _default;
//# sourceMappingURL=MessariDialog.js.map