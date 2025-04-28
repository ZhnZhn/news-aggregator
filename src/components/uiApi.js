export {
  bindTo
} from '../utils';

export {
  isFn,
  isArr
} from '../utils/isTypeFn';
import {
  isFn,
  isArr
} from '../utils/isTypeFn';

export {
  memo,

  render,
  cloneElement,
  createContext,

  useId,
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

const TOUCH = "touch";
export const EVENT_TOUCH_START = `${TOUCH}start`
export const EVENT_TOUCH_MOVE = `${TOUCH}move`
export const EVENT_TOUCH_END = `${TOUCH}end`

export const EVENT_TOUCH_CANCEL = `${TOUCH}cancel`

export const FN_NOOP = () => {}
export const FN_TRUE = () => true

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

export const safeMap = (
  items,
  crElement
) => isArr(items)
  ? items.map(crElement)
  : null

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


const EVENT_TEST_PASSIVE = "testPassive"
, IS_SUPPORT_PASSIVE_EVENT = (() => {
    try {
      const options = Object.defineProperty({}, "passive", {
        get: function() {
          return options._r = true;
        }
      })
      window.addEventListener(EVENT_TEST_PASSIVE, null, options)
      window.removeEventListener(EVENT_TEST_PASSIVE, null, options)
      return options._r;
    } catch (e) {
      return false;
    }
})();

export const PASSIVE_EVENT_OPTIONS = IS_SUPPORT_PASSIVE_EVENT
  ? { passive: true }
  : false;

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
