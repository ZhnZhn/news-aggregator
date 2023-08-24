export { bindTo } from '../utils/bindTo';

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

const _isFn = fn => typeof fn === 'function';

export const getRefValue = (
  ref
) => (ref || {}).current

export const setRefValue = (
  ref,
  value
) => {
  if (ref) {
    ref.current = value
  }
}

const _focusHtmlElement = (
  element
) => {
  if (element && _isFn(element.focus)) {
    element.focus()
  }
}

export const focusElementById = (
  id
) => {
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


export const stopDefaultFor = (
  evt
) => {
  evt.stopPropagation()
  evt.preventDefault()
}

const _getFirstTouches = (
  touches
) => (touches && touches[0]) || {}
, CLIENT_X = 'clientX'
, CLIENT_Y = 'clientY'
, _fGetTouch = (propName) => (
  touches
) => _getFirstTouches(touches)[propName]
, _getTouchClientX = _fGetTouch(CLIENT_X)
, _getTouchClientY = _fGetTouch(CLIENT_Y)
, _fGetEvt = (propName, getTouch) => (
  evt
) => evt[propName]
  || getTouch(evt.targetTouches)
  || getTouch(evt.changedTouches)
  || 0;

export const getClientX = _fGetEvt(CLIENT_X, _getTouchClientX)
export const getClientY = _fGetEvt(CLIENT_Y, _getTouchClientY)

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
