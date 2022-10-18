"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _isBool = function _isBool(v) {
  return typeof v === 'boolean';
},
    _initState = function _initState(initialValue) {
  return !!initialValue;
},
    _reducer = function _reducer(state, value) {
  return _isBool(value) ? value : !state;
};

var useToggle = function useToggle(initialValue) {
  return (0, _uiApi.useReducer)(_reducer, initialValue, _initState);
};

var _default = useToggle;
exports["default"] = _default;
//# sourceMappingURL=useToggle.js.map