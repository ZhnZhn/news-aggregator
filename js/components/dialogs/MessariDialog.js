"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var ASSET_OPTIONS = [["All", "all"]
  /*,
  [Bitcoin", "BTC"],
  [Ethereum", "ETH"],
  [Tether", "USDT"],
  [XRP", "XRP"],
  [Bitcoin-Cash", "BCH"],
  ["Chainlink", "LINK"],
  ["Cardano", "ADA"],
  ["Bitcoin-SV", "BSV"],
  ["Litecoin", "LTC"],
  ["Binance-Coin", "BNB"],
  ["Crypto-Com-Chain", "CRO"],
  ["Tezos", "XTZ"],
  ["EOS", "EOS"],
  ["Stellar", "XLM"],
  ["Monero", "XMR"],
  ["Tron", "TRX"],
  ["Unus-Sed-Leo", "LEO"],
  ["USD-Coin", "USDC"],
  ["Vechain", "VET"],
  ["Cosmos", "ATOM"],
  */],
  DF_ASSET = ASSET_OPTIONS[0],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)({
    assetKey: (0, _OptionFn.getItemValue)(DF_ASSET)
  }),
  INPUT_CONFIGS = [['s', 'assetKey', 'News about', ASSET_OPTIONS, DF_ASSET]];
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
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refValues = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _hLoad = (0, _uiApi.useCallback)(function () {
      onLoad((0, _extends2["default"])({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'MS'
      }, (0, _uiApi.getRefValue)(_refValues)));
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
    children: [(0, _jsxRuntime.jsx)(_StackInputs["default"], {
      TS: TS,
      configs: INPUT_CONFIGS,
      onSelect: _selectInput
    }), (0, _jsxRuntime.jsx)(_PoweredBy["default"], {
      style: TS.POWERED_BY,
      children: (0, _jsxRuntime.jsx)(_Links.MessariLink, {})
    })]
  });
};
var _default = MessariDialog;
exports["default"] = _default;
//# sourceMappingURL=MessariDialog.js.map