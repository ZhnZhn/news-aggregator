"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
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
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var MessariDialog = function MessariDialog(props) {
  var paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf);
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: paneCaption,
    loadId: "MS",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.MessariLink, {})
  }));
};
var _default = MessariDialog;
exports["default"] = _default;
//# sourceMappingURL=MessariDialog.js.map