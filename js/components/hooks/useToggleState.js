"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _isFn = function _isFn(v) {
    return typeof v === 'function';
  },
  _initState = function _initState(initialValue) {
    return _isFn(initialValue) ? initialValue() : initialValue;
  },
  _reducer = function _reducer(state, propName) {
    var _extends2;
    return (0, _extends3["default"])({}, state, (_extends2 = {}, _extends2[propName] = !state[propName], _extends2));
  };
var useToggleState = function useToggleState(initialValue) {
  return (0, _uiApi.useReducer)(_reducer, initialValue || {}, _initState);
};
var _default = useToggleState;
exports["default"] = _default;
//# sourceMappingURL=useToggleState.js.map