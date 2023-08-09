"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsModalDialog = exports.useMsAbout = exports.showSettingsDialog = exports.showAlertDialog = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
var _settingStore = _interopRequireDefault(require("./settingStore"));
const _crMsAbout = () => ({
    msAbout: {
      is: true
    }
  }),
  _crMsModalDialog = option => ({
    msModalDialog: {
      option
    }
  }),
  _crStore = () => ({
    ..._crMsAbout(),
    ..._crMsModalDialog()
  }),
  _compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsAbout = state => state.msAbout,
  _selectMsModalDialog = state => state.msModalDialog,
  _set = _compStore.setState;
const useMsAbout = (0, _storeApi.fCrUse)(_compStore, _selectMsAbout);
exports.useMsAbout = useMsAbout;
const showAbout = () => _set(_crMsAbout());
exports.showAbout = showAbout;
const useMsModalDialog = (0, _storeApi.fCrUse)(_compStore, _selectMsModalDialog);
exports.useMsModalDialog = useMsModalDialog;
const _showModalDialog = function (type, option) {
  if (option === void 0) {
    option = {};
  }
  option.modalDialogType = type;
  _set(_crMsModalDialog(option));
};
const showSettingsDialog = (0, _storeApi.bindTo)(_showModalDialog, 'SETTINGS_DIALOG', _settingStore.default.exportSettingsFn());
exports.showSettingsDialog = showSettingsDialog;
const showAlertDialog = (0, _storeApi.bindTo)(_showModalDialog, 'ALERT_DIALOG');
exports.showAlertDialog = showAlertDialog;
//# sourceMappingURL=compStore.js.map