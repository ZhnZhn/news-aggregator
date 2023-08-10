import {
  createStoreWithSelector,
  fCrUse,
  bindTo,
  getStoreApi
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

const _crMsAbout = (is) => ({
  msAbout: { is }
})
, _crMsModalDialog = (option) => ({
  msModalDialog: { option }
})
, _crMsDialog = (option) => ({
  msDialog: option
})
, _crMsBrowser = (id) => ({
  msBrowser: { id }
})
, _crMsPane = (option) => ({
  msPane: option
})
, _crStore = () => ({
   ..._crMsAbout(),
   ..._crMsModalDialog(),
   ..._crMsDialog(),
   ..._crMsBrowser(),
   ..._crMsPane()
})
, _compStore = createStoreWithSelector(_crStore)
, _selectMsAbout = state => state.msAbout
, _selectMsModalDialog = state => state.msModalDialog
, _selectMsDialog = state => state.msDialog
, _selectMsBrowser = state => state.msBrowser
, _selectMsPane = state => state.msPane
, [_set] = getStoreApi(_compStore)

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
