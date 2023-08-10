"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsPane = exports.useMsModalDialog = exports.useMsDialog = exports.useMsBrowser = exports.useMsAbout = exports.showSettingsDialog = exports.showNewsPane = exports.showNewsBrowser = exports.showDialog = exports.showAlertDialog = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
var _settingStore = _interopRequireDefault(require("./settingStore"));
var _NewsMenu = _interopRequireDefault(require("../conf/NewsMenu"));
var _ComponentSliceFn = require("./stores/ComponentSliceFn");
const _dialogInited = Object.create(null);
const _newsPaneInited = Object.create(null);
const _crMsAbout = is => ({
    msAbout: {
      is
    }
  }),
  _crMsModalDialog = option => ({
    msModalDialog: {
      option
    }
  }),
  _crMsDialog = option => ({
    msDialog: option
  }),
  _crMsBrowser = id => ({
    msBrowser: {
      id
    }
  }),
  _crMsPane = option => ({
    msPane: option
  }),
  _crStore = () => ({
    ..._crMsAbout(),
    ..._crMsModalDialog(),
    ..._crMsDialog(),
    ..._crMsBrowser(),
    ..._crMsPane()
  }),
  _compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsAbout = state => state.msAbout,
  _selectMsModalDialog = state => state.msModalDialog,
  _selectMsDialog = state => state.msDialog,
  _selectMsBrowser = state => state.msBrowser,
  _selectMsPane = state => state.msPane,
  [_set] = (0, _storeApi.getStoreApi)(_compStore);
const useMsAbout = (0, _storeApi.fCrUse)(_compStore, _selectMsAbout);
exports.useMsAbout = useMsAbout;
const showAbout = () => _set(_crMsAbout(true));
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
const useMsDialog = (0, _storeApi.fCrUse)(_compStore, _selectMsDialog);
exports.useMsDialog = useMsDialog;
const showDialog = itemConf => {
  _set(_crMsDialog((0, _ComponentSliceFn.showDialogImpl)(_dialogInited, itemConf)));
};
exports.showDialog = showDialog;
const useMsBrowser = (0, _storeApi.fCrUse)(_compStore, _selectMsBrowser);
exports.useMsBrowser = useMsBrowser;
const _showBrowser = browserId => {
  _set(_crMsBrowser(browserId));
};
const showNewsBrowser = (0, _storeApi.bindTo)(_showBrowser, _NewsMenu.default.NEWS);
exports.showNewsBrowser = showNewsBrowser;
const useMsPane = (0, _storeApi.fCrUse)(_compStore, _selectMsPane);
exports.useMsPane = useMsPane;
const showNewsPane = itemConf => {
  _set({
    ..._crMsAbout(false),
    ..._crMsPane((0, _ComponentSliceFn.showPaneImpl)(_newsPaneInited, itemConf, useMsPane))
  });
};
exports.showNewsPane = showNewsPane;
//# sourceMappingURL=compStore.js.map