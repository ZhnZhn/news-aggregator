"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsPane = exports.useMsModalDialog = exports.useMsDialog = exports.useMsBrowser = exports.useMsAbout = exports.useDialogItems = exports.showSettingsDialog = exports.showNewsPane = exports.showNewsBrowser = exports.showDialog = exports.showAlertDialog = exports.showAbout = exports.closeDialog = exports.cleanDialogItems = void 0;
var _storeApi = require("./storeApi");
var _settingStore = _interopRequireDefault(require("./settingStore"));
var _MdType = require("../conf/MdType");
var _NewsMenu = _interopRequireDefault(require("../conf/NewsMenu"));
var _ComponentSliceFn = require("./stores/ComponentSliceFn");
const _dialogInited = Object.create(null);
const _newsPaneInited = Object.create(null);
const [_crMsAbout, _selectMsAbout] = (0, _storeApi.fCrStoreSlice)("msAbout", "is"),
  [_crMsModalDialog, _selectMsModalDialog] = (0, _storeApi.fCrStoreSlice)("msModalDialog", "option"),
  [_crMsDialog, _selectMsDialog] = (0, _storeApi.fCrStoreSlice)("msDialog"),
  [_crMsBrowser, _selectMsBrowser] = (0, _storeApi.fCrStoreSlice)("msBrowser", "id"),
  [_crMsPane, _selectMsPane] = (0, _storeApi.fCrStoreSlice)("msPane"),
  [_crDialogItems, _selectDialogItems] = (0, _storeApi.fCrStoreSlice)("dialogItems"),
  _crStore = () => ({
    ..._crMsAbout(),
    ..._crMsModalDialog(),
    ..._crMsDialog(),
    ..._crMsBrowser(),
    ..._crMsPane(),
    ..._crDialogItems([])
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
const useDialogItems = exports.useDialogItems = (0, _storeApi.fUseStoreState)(_compStore, _selectDialogItems);
const showDialog = itemConf => _set(_crMsDialog((0, _ComponentSliceFn.showDialogImpl)(_dialogInited, itemConf)));
exports.showDialog = showDialog;
const closeDialog = itemConf => _set(_crDialogItems([itemConf]));
exports.closeDialog = closeDialog;
const cleanDialogItems = () => _set(_crDialogItems([]));
exports.cleanDialogItems = cleanDialogItems;
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