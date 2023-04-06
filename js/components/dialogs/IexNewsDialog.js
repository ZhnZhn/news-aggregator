"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _ProviderNames = require("../../conf/ProviderNames");
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var RECENT_OPTIONS = [["10 News", "10"], ["20 News", "20"], ["30 News", "30"], ["40 News", "40"], ["50 News", "50"]],
  DF_RECENT = RECENT_OPTIONS[1],
  DF_SYMBOL = "AAPL";
var INPUT_CONFIGS = [['t', 'symbol', 'Stock Symbol', DF_SYMBOL, (0, _DialogFn.crInputProps)(), true], ['s', 'recent', 'Recent', RECENT_OPTIONS, DF_RECENT, true]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var IexNewsDialog = function IexNewsDialog(props) {
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: _ProviderNames.IEX_CLOUD,
    loadId: "IEX",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.IexApiLink, {})
  }));
};
var _default = IexNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=IexNewsDialog.js.map