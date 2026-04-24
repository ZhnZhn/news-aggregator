"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
const _initState = fnOrInitialValue => (0, _isTypeFn.isFn)(fnOrInitialValue) ? fnOrInitialValue() : fnOrInitialValue,
  _reducer = (state, propName) => ({
    ...state,
    [propName]: !state[propName]
  });
const useToggleState = fnOrInitialValue => (0, _uiApi.useReducer)(_reducer, fnOrInitialValue || {}, _initState);
var _default = exports.default = useToggleState;
//# sourceMappingURL=useToggleState.js.map