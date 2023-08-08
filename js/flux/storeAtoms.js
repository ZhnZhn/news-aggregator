"use strict";

exports.__esModule = true;
exports.useLoading = exports.setLoadingFailed = exports.setLoadingComplete = exports.setLoading = void 0;
var _storeApi = require("./storeApi");
var _LoadingProgressActions = require("./actions/LoadingProgressActions");
const _atomLoading = (0, _storeApi.atom)(),
  _setAtomLoading = _atomLoading.setValue;
const useLoading = _atomLoading.useAtomValue;
exports.useLoading = useLoading;
const setLoading = () => _setAtomLoading(_LoadingProgressActions.LPAT_LOADING);
exports.setLoading = setLoading;
const setLoadingComplete = () => _setAtomLoading(_LoadingProgressActions.LPAT_LOADING_COMPLETE);
exports.setLoadingComplete = setLoadingComplete;
const setLoadingFailed = () => _setAtomLoading(_LoadingProgressActions.LPAT_LOADING_FAILED);
exports.setLoadingFailed = setLoadingFailed;
//# sourceMappingURL=storeAtoms.js.map