"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const DialogType2 = props => {
  const {
      itemConf
    } = props,
    {
      getConfig,
      CompLink
    } = itemConf,
    [INPUT_CONFIGS, INITIAL_INPUTS, TOGGLES, IS_INPUTS] = getConfig();
  return (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
    ...props,
    caption: (0, _DialogFn.getPaneCaption)(itemConf),
    loadId: (0, _DialogFn.getLoadId)(itemConf),
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(CompLink, {})
  });
};
var _default = DialogType2;
exports.default = _default;
//# sourceMappingURL=DialogType2.js.map