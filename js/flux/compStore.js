"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsPane = exports.useMsModalDialog = exports.useMsDialog = exports.useMsBrowser = exports.useMsAbout = exports.showWebzCountry = exports.showWebz = exports.showTheNewsTop = exports.showTheNewsSearch = exports.showStackTagged = exports.showStackSearch = exports.showSettingsDialog = exports.showReddit = exports.showNewsTop = exports.showNewsSearch = exports.showNewsPane = exports.showNewsBrowser = exports.showMessari = exports.showIex = exports.showFmp = exports.showDialog = exports.showDevTo = exports.showCryptoCompare = exports.showCoinStats = exports.showAv = exports.showAlertDialog = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
var _settingStore = _interopRequireDefault(require("./settingStore"));
var _Store = _interopRequireDefault(require("./stores/Store"));
var _NewsQuery = _interopRequireDefault(require("../conf/NewsQuery"));
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
  _set = _compStore.setState;
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
const showWebz = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.WEBZ);
exports.showWebz = showWebz;
const showWebzCountry = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.WEBZ_COUNTRY);
exports.showWebzCountry = showWebzCountry;
const showReddit = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.REDDIT);
exports.showReddit = showReddit;
const showDevTo = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.DEV_TO);
exports.showDevTo = showDevTo;
const showStackTagged = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.STACK_TAGGED);
exports.showStackTagged = showStackTagged;
const showStackSearch = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.STACK_SEARCH);
exports.showStackSearch = showStackSearch;
const showCryptoCompare = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.CRYPTO_COMPARE);
exports.showCryptoCompare = showCryptoCompare;
const showCoinStats = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.COIN_STATS);
exports.showCoinStats = showCoinStats;
const showMessari = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.MESSARI);
exports.showMessari = showMessari;
const showIex = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.IEX);
exports.showIex = showIex;
const showFmp = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.FMP);
exports.showFmp = showFmp;
const showAv = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.AV);
exports.showAv = showAv;
const showNewsSearch = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.NEWS_SEARCH);
exports.showNewsSearch = showNewsSearch;
const showNewsTop = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.NEWS_TOP);
exports.showNewsTop = showNewsTop;
const showTheNewsSearch = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.THE_NEWS_SEARCH);
exports.showTheNewsSearch = showTheNewsSearch;
const showTheNewsTop = (0, _storeApi.bindTo)(showDialog, _NewsQuery.default.THE_NEWS_TOP);
exports.showTheNewsTop = showTheNewsTop;
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
    ..._crMsPane((0, _ComponentSliceFn.showPaneImpl)(_newsPaneInited, itemConf, useMsPane, _Store.default))
  });
};
exports.showNewsPane = showNewsPane;
//# sourceMappingURL=compStore.js.map