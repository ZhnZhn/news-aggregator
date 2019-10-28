'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SettingsDialog = require('../header/SettingsDialog');

var _SettingsDialog2 = _interopRequireDefault(_SettingsDialog);

var _AlertDialog = require('./AlertDialog');

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

var _ApiKeyDialog = require('./ApiKeyDialog');

var _ApiKeyDialog2 = _interopRequireDefault(_ApiKeyDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterModalDialog = {
  SETTINGS_DIALOG: _SettingsDialog2.default,
  ALERT_DIALOG: _AlertDialog2.default,
  APIKEY_DIALOG: _ApiKeyDialog2.default
};

exports.default = RouterModalDialog;
//# sourceMappingURL=RouterModalDialog.js.map