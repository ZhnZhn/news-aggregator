"use strict";

exports.__esModule = true;
exports.useLoading = exports.useLimitRemaining = exports.setLoadingFailed = exports.setLoadingComplete = exports.setLoading = void 0;
var _storeApi = require("./storeApi");
var _LoadingProgressActions = require("./actions/LoadingProgressActions");
const _atomLoading = (0, _storeApi.atom)(),
  _setAtomLoading = _atomLoading.setValue,
  _atomLimitRemaining = (0, _storeApi.atom)(null),
  _setLimitRemaining = limitRemaining => {
    _atomLimitRemaining.setValue(limitRemaining == null ? null : limitRemaining);
  };
const useLimitRemaining = exports.useLimitRemaining = _atomLimitRemaining.useAtomValue;
const useLoading = exports.useLoading = _atomLoading.useAtomValue;
const setLoading = () => _setAtomLoading(_LoadingProgressActions.LPAT_LOADING);
exports.setLoading = setLoading;
const _fSetLoadingAndLimitRemainig = lpat => limitRemaining => {
  _setAtomLoading(lpat);
  _setLimitRemaining(limitRemaining);
};
const setLoadingComplete = exports.setLoadingComplete = _fSetLoadingAndLimitRemainig(_LoadingProgressActions.LPAT_LOADING_COMPLETE);
const setLoadingFailed = exports.setLoadingFailed = _fSetLoadingAndLimitRemainig(_LoadingProgressActions.LPAT_LOADING_FAILED);

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
//# sourceMappingURL=storeAtoms.js.map