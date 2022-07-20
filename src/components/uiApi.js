export {
  memo,
  cloneElement,
  createElement,
  createContext,  
  forwardRef,
  useRef,
  useState,
  useReducer,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useImperativeHandle
} from 'react';

const _isFn = fn => typeof fn === 'function'

export const getRefValue = ref => (ref || {}).current

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
