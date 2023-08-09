import {
  createStoreWithSelector,
  fCrUse,
  bindTo
} from './storeApi';

import settingStore from './settingStore';

const _crMsAbout = () => ({
  msAbout: { is: true }
})
, _crMsModalDialog = (option) => ({
  msModalDialog: { option }
})
, _crStore = () => ({
   ..._crMsAbout(),
   ..._crMsModalDialog()
})
, _compStore = createStoreWithSelector(_crStore)
, _selectMsAbout = state => state.msAbout
, _selectMsModalDialog = state => state.msModalDialog
, _set = _compStore.setState

export const useMsAbout = fCrUse(_compStore, _selectMsAbout)
export const showAbout = () => _set(_crMsAbout())

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
  'SETTINGS_DIALOG',
  settingStore.exportSettingsFn()
)
export const showAlertDialog = bindTo(
  _showModalDialog,
  'ALERT_DIALOG'
)
