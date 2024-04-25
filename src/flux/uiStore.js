import {
  readFromLs,
  writeToLs
} from '../utils/localStorageFn';

import {
  createStoreWithSelector,
  fUseStoreState,
  getStoreApi,
  fCrStoreSlice
} from './storeApi';

import {
  LS_IS_ADVANCED_INPUT_OPTIONS
} from './LS';

const [
  _crIsAdvancedInputOptions,
  _selectIsAdvancedInputOptions
] = fCrStoreSlice("isAio")

const _crStore = () => ({
  ..._crIsAdvancedInputOptions(
    !!readFromLs(LS_IS_ADVANCED_INPUT_OPTIONS)[0]
  )
})
, _uiStore = createStoreWithSelector(_crStore)
, [_set, _get] = getStoreApi(_uiStore);

export const useIsAdvancedInputOptions = fUseStoreState(_uiStore, _selectIsAdvancedInputOptions)
export const isAdvancedInputOptions = () => _selectIsAdvancedInputOptions(_get())

const _fSetIsAdvancedInputOptions = (
  is
) => () => {
  _set(_crIsAdvancedInputOptions(is))
  writeToLs(LS_IS_ADVANCED_INPUT_OPTIONS, is)
};
export const enableAdvancedInputOptions = _fSetIsAdvancedInputOptions(true)
export const disableAndvancedInputOptions = _fSetIsAdvancedInputOptions(false)
