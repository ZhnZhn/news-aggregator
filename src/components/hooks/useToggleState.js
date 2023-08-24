import {
  isFn,
  useReducer
} from '../uiApi';

const _initState = (
  fnOrInitialValue
) => isFn(fnOrInitialValue)
  ? fnOrInitialValue()
  : fnOrInitialValue
, _reducer = (
  state,
  propName
) => ({
  ...state,
  [propName]: !state[propName]
});

const useToggleState = (
  fnOrInitialValue
) => useReducer(
  _reducer,
  fnOrInitialValue || {},
  _initState
);

export default useToggleState
