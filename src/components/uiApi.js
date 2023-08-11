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

const _focusHtmlElement = (element) => {
  if (element && _isFn(element.focus)) {
    element.focus()
  }
}

export const focusElementById = (id) => {
  _focusHtmlElement(
    document.getElementById(id)
  )
}

export const focusRefElement = (
  ref1,
  ref2
) => {
  _focusHtmlElement(getRefValue(ref1) || getRefValue(ref2));
}

export const focusRefNextSiblingFirstChildElement = (
  ref
) => {
  _focusHtmlElement(((getRefValue(ref) || {})
     .nextElementSibling || {})
     .firstElementChild
  )
}

export const getRefElementStyle = (
  ref
) => (getRefValue(ref) || {}).style


export const stopDefaultFor = (evt) => {
  evt.stopPropagation()
  evt.preventDefault()
}

const _getFirstTouches = (
  touches
) => (touches && touches[0]) || {};

const _getTouchClientX = (
  touches
) => _getFirstTouches(touches).clientX;

const _getTouchClientY = (
  touches
) => _getFirstTouches(touches).clientY;

export const getClientX = (
  evt
) => evt.clientX
  || _getTouchClientX(evt.targetTouches)
  || _getTouchClientX(evt.changedTouches)
  || 0;

export const getClientY = (
  evt
) => evt.clientY
  || _getTouchClientY(evt.targetTouches)
  || _getTouchClientY(evt.changedTouches)
  || 0;
