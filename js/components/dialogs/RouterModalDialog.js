"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _MdType = require("../../conf/MdType");
var _SettingsDialog = _interopRequireDefault(require("../header/SettingsDialog"));
var _AlertDialog = _interopRequireDefault(require("./AlertDialog"));
const RouterModalDialog = {
  [_MdType.SETTINGS_DIALOG]: _SettingsDialog.default,
  [_MdType.ALERT_DIALOG]: _AlertDialog.default
};
var _default = RouterModalDialog;
exports.default = _default;
//# sourceMappingURL=RouterModalDialog.js.map