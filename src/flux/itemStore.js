import {
  createStoreWithSelector,
  fCrUse,
  getStoreApi
} from './storeApi';

import RouterApiConf from './logic/RouterApiConf';
import loadNews from './logic/loadNews';

import {
  loadItemCompletedImpl,

  removeItemsImpl,
  removeItemImpl,
  removeUnderItemImpl
} from './stores/NewsSliceFn';

import {
  showAlertDialog,
  showNewsPane
} from './compStore';
import {
  setLoading,
  setLoadingComplete,
  setLoadingFailed
} from './storeAtoms';

const _assign = Object.assign;

const _items = {};

const _crStore = () => ({
  msItem: void 0
})
, _itemStore = createStoreWithSelector(_crStore)
, _selectMsItem = state => state.msItem
, [_set] = getStoreApi(_itemStore);

export const useMsItem = fCrUse(_itemStore, _selectMsItem)

const _loadItemCompleted = ({
  news,
  itemConf
}) => {
  if (news) {
    const r = loadItemCompletedImpl(_items, news);
    _set({ msItem: r })
  }
  setLoadingComplete()
}
, _loadItemFailed = (option) => {
  showAlertDialog(option)
  setLoadingFailed()
}
export const loadItem = (
  option={}
) => {
  const {
    itemConf,
    loadId
  } = option
  , {
    apiKey,
    adapter,
    api,
    msgErr
  } = RouterApiConf.getApiConf(loadId || 'N');
  if (apiKey){
    showNewsPane(itemConf)
    setLoading()
    _assign(option, { apiKey, adapter, api })
    loadNews(option, _loadItemCompleted, _loadItemFailed)
  } else {
    _loadItemFailed({ msg: msgErr })
  }
}

export const removeItem = (item) => {
  removeItemImpl(_items, item)
}
export const removeItems = (paneId) => {
  const r = removeItemsImpl(_items, paneId);
  _set({ msItem: r })
}
export const removeUnderItems = (item) => {
  const r = removeUnderItemImpl(_items, item)
  _set({ msItem: r })
}
