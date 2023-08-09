import {
  createStoreWithSelector,
  fCrUse,
  bindTo
} from './storeApi';

import settingStore from './settingStore';

import QUERY from '../conf/NewsQuery';
import {
  showNewsDialog
} from './stores/ComponentSliceFn';

const _dialogInited = Object.create(null);

const _crMsAbout = () => ({
  msAbout: { is: true }
})
, _crMsModalDialog = (option) => ({
  msModalDialog: { option }
})
, _crMsDialog = (option) => ({
  msDialog: option
})
, _crStore = () => ({
   ..._crMsAbout(),
   ..._crMsModalDialog(),
   ..._crMsDialog()
})
, _compStore = createStoreWithSelector(_crStore)
, _selectMsAbout = state => state.msAbout
, _selectMsModalDialog = state => state.msModalDialog
, _selectMsDialog = state => state.msDialog
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

export const useMsDialog = fCrUse(_compStore, _selectMsDialog)
export const showDialog = (itemConf) => {
  _set(_crMsDialog(
    showNewsDialog(_dialogInited, itemConf)
  ))
}
export const showWebz = bindTo(showDialog, QUERY.WEBZ)
export const showWebzCountry = bindTo(showDialog, QUERY.WEBZ_COUNTRY)
export const showReddit = bindTo(showDialog, QUERY.REDDIT)
export const showDevTo = bindTo(showDialog, QUERY.DEV_TO)
export const showStackTagged = bindTo(showDialog, QUERY.STACK_TAGGED)
export const showStackSearch = bindTo(showDialog, QUERY.STACK_SEARCH)
export const showCryptoCompare = bindTo(showDialog, QUERY.CRYPTO_COMPARE)
export const showCoinStats = bindTo(showDialog, QUERY.COIN_STATS)
export const showMessari = bindTo(showDialog, QUERY.MESSARI)
export const showIex = bindTo(showDialog, QUERY.IEX)
export const showFmp = bindTo(showDialog, QUERY.FMP)
export const showAv = bindTo(showDialog, QUERY.AV)
export const showNewsSearch = bindTo(showDialog, QUERY.NEWS_SEARCH)
export const showNewsTop = bindTo(showDialog, QUERY.NEWS_TOP)
export const showTheNewsSearch = bindTo(showDialog, QUERY.THE_NEWS_SEARCH)
export const showTheNewsTop = bindTo(showDialog, QUERY.THE_NEWS_TOP)
