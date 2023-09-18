import { useReducer } from '../uiApi';

export const EMPTY_OPTIONS = [["No similiar item in list"]]
, ACTION_CLOSE_OPTIONS = "c"
, ACTION_SHOW_OPTIONS = "s"
, ACTION_SHOW_OPTIONS_WITH_FOCUS = "f"

const _crNextState = (
  state,
  nextState
) => state[0] === nextState[0]
  && state[1] === nextState[1]
  ? state
  : nextState
const _reducer = (
  state,
  actionType
) => {
  switch (actionType) {
    case ACTION_CLOSE_OPTIONS:
      return _crNextState(state, [0, 0]);
    case ACTION_SHOW_OPTIONS:
      return _crNextState(state, [1, 0]);
    case ACTION_SHOW_OPTIONS_WITH_FOCUS:
      return _crNextState(state, [1, 1]);
    default: return state;
  }
};

export const useOptionsPane = () => useReducer(
  _reducer,
  [0, 0]
)
