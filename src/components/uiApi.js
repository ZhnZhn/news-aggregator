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

const _getValueFromRefOfFn = (
  refOrFn
) => _isFn(refOrFn)
  ? refOrFn()
  : getRefValue(refOrFn);
export const focusRefElement = (
  refOrFn1,
  refOrFn2
) => {
  _focusHtmlElement(
    _getValueFromRefOfFn(refOrFn1)
    || _getValueFromRefOfFn(refOrFn2)
  )
}

export const focusAsyncRefElement = (
  refOrFn,
  mls=1000
) => {
  setTimeout(
    () => focusRefElement(refOrFn),
    mls
  )
}

export const getFocusRef = (
  refFirst,
  refLast,
  lastIndex,
  index
) => index === 0
 ? refFirst
 : index === lastIndex
    ? refLast
    : void 0


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

export const toLink = (
  href,
  isHttp
) => {
  const protocol = (href || '')
   .split('://')[0];
  return protocol === 'https'
     || (isHttp && protocol === 'http')
   ? href
   : void 0;
}
