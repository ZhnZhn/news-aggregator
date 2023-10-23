import {
  createStoreWithSelector,
  fCrUse,
  bindTo,
  getStoreApi,
  fCrStoreSlice
} from './storeApi';

import settingStore from './settingStore';

import {
  SETTINGS_DIALOG,
  ALERT_DIALOG
} from '../conf/MdType';
import MENU from '../conf/NewsMenu';
import {
  showDialogImpl,
  showPaneImpl
} from './stores/ComponentSliceFn';

const _dialogInited = Object.create(null);
const _newsPaneInited = Object.create(null);



const [
  _crMsAbout,
  _selectMsAbout
] = fCrStoreSlice("msAbout", "is")
, [
  _crMsModalDialog,
  _selectMsModalDialog
] = fCrStoreSlice("msModalDialog", "option")
, [
  _crMsDialog,
  _selectMsDialog
] = fCrStoreSlice("msDialog")
, [
  _crMsBrowser,
  _selectMsBrowser
] = fCrStoreSlice("msBrowser", "id")
, [
  _crMsPane,
  _selectMsPane
] = fCrStoreSlice("msPane")
, _crStore = () => ({
   ..._crMsAbout(),
   ..._crMsModalDialog(),
   ..._crMsDialog(),
   ..._crMsBrowser(),
   ..._crMsPane()
})
, _compStore = createStoreWithSelector(_crStore)
, [_set] = getStoreApi(_compStore);

export const useMsAbout = fCrUse(_compStore, _selectMsAbout)
export const showAbout = () => _set(_crMsAbout(true))

export const useMsModalDialog = fCrUse(_compStore, _selectMsModalDialog)
const _showModalDialog = (
  type,
  option={}
) => {
  option.modalDialogType = type
  _set(_crMsModalDialog(option))
};
export const showSettingsDialog = bindTo(
  _showModalDialog,
  SETTINGS_DIALOG,
  settingStore.exportSettingsFn()
)
export const showAlertDialog = bindTo(
  _showModalDialog,
  ALERT_DIALOG
)

export const useMsDialog = fCrUse(_compStore, _selectMsDialog)
export const showDialog = (itemConf) => {
  _set(_crMsDialog(
    showDialogImpl(_dialogInited, itemConf)
  ))
}


export const useMsBrowser = fCrUse(_compStore, _selectMsBrowser)
const _showBrowser = (browserId) => {
  _set(_crMsBrowser(browserId))
}
export const showNewsBrowser = bindTo(
  _showBrowser,
  MENU.NEWS
)

export const useMsPane = fCrUse(_compStore, _selectMsPane)
export const showNewsPane = (itemConf) => {
  _set({
    ..._crMsAbout(false),
    ..._crMsPane(showPaneImpl(
      _newsPaneInited,
      itemConf,
      useMsPane
    ))
  })
}
