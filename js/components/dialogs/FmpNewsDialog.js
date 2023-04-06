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
var DF_SYMBOL = "AAPL";
var INPUT_CONFIGS = [['t', 'symbol', 'Stock Symbol', DF_SYMBOL, (0, _DialogFn.crInputProps)()]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var FmpNewsDialog = function FmpNewsDialog(props) {
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: _ProviderNames.FMP,
    loadId: "FMP",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.FmpApiLink, {})
  }));
};
var _default = FmpNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=FmpNewsDialog.js.map