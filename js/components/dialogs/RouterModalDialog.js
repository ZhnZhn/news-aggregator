"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _SettingsDialog = _interopRequireDefault(require("../header/SettingsDialog"));

var _AlertDialog = _interopRequireDefault(require("./AlertDialog"));

var _ApiKeyDialog = _interopRequireDefault(require("./ApiKeyDialog"));

var RouterModalDialog = {
  SETTINGS_DIALOG: _SettingsDialog["default"],
  ALERT_DIALOG: _AlertDialog["default"],
  APIKEY_DIALOG: _ApiKeyDialog["default"]
};
var _default = RouterModalDialog;
exports["default"] = _default;
//# sourceMappingURL=RouterModalDialog.js.map