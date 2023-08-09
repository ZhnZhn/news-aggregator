"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.fCrUse = exports.createStoreWithSelector = exports.bindTo = exports.atom = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
var _useRerender = _interopRequireDefault(require("../components/hooks/useRerender"));
const bindTo = function (fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return fn.bind(null, ...args);
};
exports.bindTo = bindTo;
const createStoreWithSelector = crStore => (0, _zustand.createStore)((0, _middleware.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const fCrUse = (store, select) => bindTo(_useSubscribe.default, store, select);
exports.fCrUse = fCrUse;
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