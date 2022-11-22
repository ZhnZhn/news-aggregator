"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog2 = _interopRequireDefault(require("./hooks/useDialog"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
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
  INPUT_CONFIGS = [['s', 'assetKey', 'News about', ASSET_OPTIONS, DF_ASSET]],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS);
var MessariDialog = function MessariDialog(props) {
  var isShow = props.isShow,
    itemConf = props.itemConf,
    onShow = props.onShow,
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _useDialog = (0, _useDialog2["default"])(props, 'MS', _refInputs),
    _refDialog = _useDialog[0],
    _hLoad = _useDialog[1],
    _hClose = _useDialog[2],
    _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
    TS = _useDecorDialog[0],
    _hKeyDown = _useDecorDialog[1],
    paneCaption = (0, _DialogFn.getPaneCaption)(itemConf);
  return (0, _jsxRuntime.jsxs)(_DraggableDialog["default"], {
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