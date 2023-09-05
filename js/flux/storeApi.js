"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getStoreApi = exports.fCrUse = exports.createStoreWithSelector = exports.atom = void 0;
var _utils = require("../utils");
exports.bindTo = _utils.bindTo;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
var _useRerender = _interopRequireDefault(require("../components/hooks/useRerender"));
const createStoreWithSelector = crStore => (0, _zustand.createStore)((0, _middleware.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const fCrUse = (store, select) => (0, _utils.bindTo)(_useSubscribe.default, store, select);
exports.fCrUse = fCrUse;
const getStoreApi = store => [store.setState, store.getState];
exports.getStoreApi = getStoreApi;
const _isFn = v => typeof v === 'function',
  _reducerUseAtomValue = (value, crOrValue) => _isFn(crOrValue) ? crOrValue(value) : crOrValue;
const atom = initialValue => {
  const _atom = Object.create(null);
  _atom.value = initialValue;
  return {
    useAtomValue: () => {
      _atom.rerender = (0, _useRerender.default)()[1];
      return _atom.value;
    },
    setValue: crOrValue => {
      const _prev = _atom.value,
        _rerender = _atom.rerender;
      _atom.value = _reducerUseAtomValue(_prev, crOrValue);
      if (_prev !== _atom.value && _isFn(_rerender)) {
        _rerender();
      }
    }
  };
};
exports.atom = atom;
//# sourceMappingURL=storeApi.js.map