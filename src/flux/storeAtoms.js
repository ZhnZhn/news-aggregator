import { atom } from './storeApi';

import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from './actions/LoadingProgressActions';

const _atomLoading = atom()
, _setAtomLoading = _atomLoading.setValue
, _atomLimitRemaining = atom(null)
, _setLimitRemaining = (limitRemaining)  => {
  _atomLimitRemaining.setValue(
      limitRemaining == null
        ? null
        : limitRemaining
  )
};

export const useLimitRemaining = _atomLimitRemaining.useAtomValue

export const useLoading = _atomLoading.useAtomValue
export const setLoading = () => _setAtomLoading(LPAT_LOADING)
const _fSetLoadingAndLimitRemainig = lpat => (
  limitRemaining
) => {
  _setAtomLoading(lpat)
  _setLimitRemaining(limitRemaining)
}
export const setLoadingComplete = _fSetLoadingAndLimitRemainig(LPAT_LOADING_COMPLETE)
export const setLoadingFailed = _fSetLoadingAndLimitRemainig(LPAT_LOADING_FAILED)

/*
export const setLoadingComplete = (limitRemaining) => {
  _setAtomLoading(LPAT_LOADING_COMPLETE)
  _setLimitRemaining(limitRemaining)
}
export const setLoadingFailed = (limitRemaining) => {
  _setAtomLoading(LPAT_LOADING_FAILED)
  _setLimitRemaining(limitRemaining)
}
*/
