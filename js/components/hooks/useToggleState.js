"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const _initState = fnOrInitialValue => (0, _uiApi.isFn)(fnOrInitialValue) ? fnOrInitialValue() : fnOrInitialValue,
  _reducer = (state, propName) => ({
    ...state,
    [propName]: !state[propName]
  });
const useToggleState = fnOrInitialValue => (0, _uiApi.useReducer)(_reducer, fnOrInitialValue || {}, _initState);
var _default = useToggleState;
exports.default = _default;
//# sourceMappingURL=useToggleState.js.map