import { atom } from './storeApi';

import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from './actions/LoadingProgressActions';

const _atomLoading = atom()
, _setAtomLoading = _atomLoading.setValue;

export const useLoading = _atomLoading.useAtomValue
export const setLoading = () => _setAtomLoading(LPAT_LOADING)
export const setLoadingComplete = () => _setAtomLoading(LPAT_LOADING_COMPLETE)
export const setLoadingFailed = () => _setAtomLoading(LPAT_LOADING_FAILED)
