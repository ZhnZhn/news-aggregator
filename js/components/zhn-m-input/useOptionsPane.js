"use strict";

exports.__esModule = true;
exports.useOptionsPane = exports.EMPTY_OPTIONS = exports.ACTION_SHOW_OPTIONS_WITH_FOCUS = exports.ACTION_SHOW_OPTIONS = exports.ACTION_CLOSE_OPTIONS = void 0;
var _uiApi = require("../uiApi");
const EMPTY_OPTIONS = [["No similiar item in list"]],
  ACTION_CLOSE_OPTIONS = "c",
  ACTION_SHOW_OPTIONS = "s",
  ACTION_SHOW_OPTIONS_WITH_FOCUS = "f";
exports.ACTION_SHOW_OPTIONS_WITH_FOCUS = ACTION_SHOW_OPTIONS_WITH_FOCUS;
exports.ACTION_SHOW_OPTIONS = ACTION_SHOW_OPTIONS;
exports.ACTION_CLOSE_OPTIONS = ACTION_CLOSE_OPTIONS;
exports.EMPTY_OPTIONS = EMPTY_OPTIONS;
const _crNextState = (state, nextState) => state[0] === nextState[0] && state[1] === nextState[1] && state[2] === nextState[2] && state[3] === nextState[3] ? state : nextState;
const _reducer = (state, _ref) => {
  let [actionType, items, item] = _ref;
  const _items = items === void 0 ? state[2] : items,
    _item = item === void 0 ? state[3] : item;
  switch (actionType) {
    case ACTION_CLOSE_OPTIONS:
      return _crNextState(state, [0, 0, _items, _item]);
    case ACTION_SHOW_OPTIONS:
      return _crNextState(state, [1, 0, _items, _item]);
    case ACTION_SHOW_OPTIONS_WITH_FOCUS:
      return _crNextState(state, [1, 1, _items, _item]);
    default:
      return state;
  }
};
const DF_INITIAL_ITEM = ['', ''];
const useOptionsPane = (options, initialItem) => (0, _uiApi.useReducer)(_reducer, [0, 0, options, initialItem || DF_INITIAL_ITEM]);
exports.useOptionsPane = useOptionsPane;
//# sourceMappingURL=useOptionsPane.js.map