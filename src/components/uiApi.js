export {
  bindTo,
  crId,
  toFirstUpperCase
} from '../utils';

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

export const KEY_ARROW_DOWN = "ArrowDown"
export const KEY_ARROW_UP = "ArrowUp"
export const KEY_ENTER = "Enter"
export const KEY_ESCAPE = "Escape"
export const KEY_TAB = "Tab"
export const KEY_DELETE = "Delete"

export const isFn = fn => typeof fn === 'function';

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
  if (element && isFn(element.focus)) {
    element.focus()
  }
  return element;
}

export const focusElementById = (
  id
) => {
  _focusHtmlElement(
    document.getElementById(id)
  )
}

const _getValueFromFnOrRef = (
  fnOrRef
) => isFn(fnOrRef)
  ? fnOrRef()
  : getRefValue(fnOrRef);
export const focusRefElement = (
  fnOrRef1,
  fnOrRef2
) => _focusHtmlElement(
  _getValueFromFnOrRef(fnOrRef1)
  || _getValueFromFnOrRef(fnOrRef2)
)

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


export const setRefInputValue = (
  refInput,
  value
) => {
  const _input = getRefValue(refInput);
  if (_input && isFn(_input.setValue)) {
    _input.setValue(value)
  }
}

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
