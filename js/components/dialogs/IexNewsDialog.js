"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const RECENT_OPTIONS = [["10 News", "10"], ["20 News", "20"], ["30 News", "30"], ["40 News", "40"], ["50 News", "50"]],
  DF_RECENT = RECENT_OPTIONS[1],
  DF_SYMBOL = "AAPL",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)("symbol", {
    caption: "Stock Symbol",
    dfValue: DF_SYMBOL,
    inputProps: (0, _DialogFn.crInputProps)(),
    is: true
  }), (0, _DialogFn.crInputSelectConfig)("recent", RECENT_OPTIONS, {
    dfOption: DF_RECENT,
    is: true
  })],
  _getDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
const IexNewsDialog = props => {
  const [INPUT_CONFIGS, INITIAL_INPUTS, TOGGLES, IS_INPUTS] = _getDialogConfig();
  return (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
    ...props,
    caption: _ProviderNames.IEX_CLOUD,
    loadId: "IEX",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.IexApiLink, {})
  });
};
var _default = IexNewsDialog;
exports.default = _default;
//# sourceMappingURL=IexNewsDialog.js.map