"use strict";

exports.__esModule = true;
exports.useIsAdvancedInputOptions = exports.isAdvancedInputOptions = exports.enableAdvancedInputOptions = exports.disableAndvancedInputOptions = void 0;
var _localStorageFn = require("../utils/localStorageFn");
var _storeApi = require("./storeApi");
var _LS = require("./LS");
const [_crIsAdvancedInputOptions, _selectIsAdvancedInputOptions] = (0, _storeApi.fCrStoreSlice)("isAio");
const _crStore = () => ({
    ..._crIsAdvancedInputOptions(!!(0, _localStorageFn.readFromLs)(_LS.LS_IS_ADVANCED_INPUT_OPTIONS)[0])
  }),
  _uiStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  [_set, _get] = (0, _storeApi.getStoreApi)(_uiStore);
const useIsAdvancedInputOptions = exports.useIsAdvancedInputOptions = (0, _storeApi.fUseStoreState)(_uiStore, _selectIsAdvancedInputOptions);
const isAdvancedInputOptions = () => _selectIsAdvancedInputOptions(_get());
exports.isAdvancedInputOptions = isAdvancedInputOptions;
const _fSetIsAdvancedInputOptions = is => () => {
  _set(_crIsAdvancedInputOptions(is));
  (0, _localStorageFn.writeToLs)(_LS.LS_IS_ADVANCED_INPUT_OPTIONS, is);
};
const enableAdvancedInputOptions = exports.enableAdvancedInputOptions = _fSetIsAdvancedInputOptions(true);
const disableAndvancedInputOptions = exports.disableAndvancedInputOptions = _fSetIsAdvancedInputOptions(false);
//# sourceMappingURL=uiStore.js.map