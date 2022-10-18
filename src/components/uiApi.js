export {
  memo,
  forwardRef,

  render,
  cloneElement,
  createContext,

  useRef,
  useState,
  useReducer,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useImperativeHandle
} from 'preact/compat';

const _isFn = fn => typeof fn === 'function'

export const getRefValue = ref => (ref || {}).current
export const setRefValue = (
  ref,
  value
) => {
  if (ref) {
    ref.current = value
  }
}

export const focusRefElement = ref => {
  const element = getRefValue(ref);
  if (element && _isFn(element.focus)) {
    element.focus()
  }
}

export const getRefElementStyle = ref => {
  const element = getRefValue(ref);
  return (element || {}).style;
}

export const stopDefaultFor = event => {
  event.stopPropagation()
  event.preventDefault()
}
