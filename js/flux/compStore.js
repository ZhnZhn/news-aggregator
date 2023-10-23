"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsPane = exports.useMsModalDialog = exports.useMsDialog = exports.useMsBrowser = exports.useMsAbout = exports.showSettingsDialog = exports.showNewsPane = exports.showNewsBrowser = exports.showDialog = exports.showAlertDialog = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
var _settingStore = _interopRequireDefault(require("./settingStore"));
var _MdType = require("../conf/MdType");
var _NewsMenu = _interopRequireDefault(require("../conf/NewsMenu"));
var _ComponentSliceFn = require("./stores/ComponentSliceFn");
const _dialogInited = Object.create(null);
const _newsPaneInited = Object.create(null);
const _fCrSlice = (slicePn, optionPn) => [value => ({
  [slicePn]: optionPn ? {
    [optionPn]: value
  } : value
}), state => state[slicePn]];
const [_crMsAbout, _selectMsAbout] = _fCrSlice("msAbout", "is"),
  [_crMsModalDialog, _selectMsModalDialog] = _fCrSlice("msModalDialog", "option"),
  [_crMsDialog, _selectMsDialog] = _fCrSlice("msDialog"),
  [_crMsBrowser, _selectMsBrowser] = _fCrSlice("msBrowser", "id"),
  [_crMsPane, _selectMsPane] = _fCrSlice("msPane"),
  _crStore = () => ({
    ..._crMsAbout(),
    ..._crMsModalDialog(),
    ..._crMsDialog(),
    ..._crMsBrowser(),
    ..._crMsPane()
  }),
  _compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  [_set] = (0, _storeApi.getStoreApi)(_compStore);
const useMsAbout = exports.useMsAbout = (0, _storeApi.fCrUse)(_compStore, _selectMsAbout);
const showAbout = () => _set(_crMsAbout(true));
exports.showAbout = showAbout;
const useMsModalDialog = exports.useMsModalDialog = (0, _storeApi.fCrUse)(_compStore, _selectMsModalDialog);
const _showModalDialog = function (type, option) {
  if (option === void 0) {
    option = {};
  }
  option.modalDialogType = type;
  _set(_crMsModalDialog(option));
};
const showSettingsDialog = exports.showSettingsDialog = (0, _storeApi.bindTo)(_showModalDialog, _MdType.SETTINGS_DIALOG, _settingStore.default.exportSettingsFn());
const showAlertDialog = exports.showAlertDialog = (0, _storeApi.bindTo)(_showModalDialog, _MdType.ALERT_DIALOG);
const useMsDialog = exports.useMsDialog = (0, _storeApi.fCrUse)(_compStore, _selectMsDialog);
const showDialog = itemConf => {
  _set(_crMsDialog((0, _ComponentSliceFn.showDialogImpl)(_dialogInited, itemConf)));
};
exports.showDialog = showDialog;
const useMsBrowser = exports.useMsBrowser = (0, _storeApi.fCrUse)(_compStore, _selectMsBrowser);
const _showBrowser = browserId => {
  _set(_crMsBrowser(browserId));
};
const showNewsBrowser = exports.showNewsBrowser = (0, _storeApi.bindTo)(_showBrowser, _NewsMenu.default.NEWS);
const useMsPane = exports.useMsPane = (0, _storeApi.fCrUse)(_compStore, _selectMsPane);
const showNewsPane = itemConf => {
  _set({
    ..._crMsAbout(false),
    ..._crMsPane((0, _ComponentSliceFn.showPaneImpl)(_newsPaneInited, itemConf, useMsPane))
  });
};
exports.showNewsPane = showNewsPane;
//# sourceMappingURL=compStore.js.map