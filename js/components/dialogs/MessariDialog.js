"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const ASSET_OPTIONS = [["All", "all"]],
  _crInputConfigs = () => [(0, _DialogFn.crInputSelectConfig)("assetKey", ASSET_OPTIONS, {
    caption: "News about"
  })],
  _getDialogConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
const MessariDialog = props => {
  const paneCaption = (0, _DialogFn.getPaneCaption)(props.itemConf),
    [INPUT_CONFIGS, INITIAL_INPUTS, TOGGLES, IS_INPUTS] = _getDialogConfig();
  return (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
    ...props,
    caption: paneCaption,
    loadId: "MS",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.MessariLink, {})
  });
};
var _default = MessariDialog;
exports.default = _default;
//# sourceMappingURL=MessariDialog.js.map