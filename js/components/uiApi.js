"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useId = exports.useEffect = exports.useContext = exports.useCallback = exports.toLink = exports.toFirstUpperCase = exports.stopDefaultFor = exports.setRefValue = exports.setRefInputValue = exports.safeMap = exports.render = exports.memo = exports.isFn = exports.getRefValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefNextSiblingFirstChildElement = exports.focusRefElement = exports.focusElementById = exports.focusAsyncRefElement = exports.createContext = exports.crLazyValue = exports.crId = exports.cloneElement = exports.bindTo = exports.PASSIVE_EVENT_OPTIONS = exports.KEY_TAB = exports.KEY_ESCAPE = exports.KEY_ENTER = exports.KEY_DELETE = exports.KEY_ARROW_UP = exports.KEY_ARROW_DOWN = exports.FN_NOOP = exports.EVENT_TOUCH_START = exports.EVENT_TOUCH_MOVE = exports.EVENT_TOUCH_END = exports.EVENT_TOUCH_CANCEL = void 0;
var _utils = require("../utils");
exports.bindTo = _utils.bindTo;
exports.crId = _utils.crId;
exports.crLazyValue = _utils.crLazyValue;
exports.toFirstUpperCase = _utils.toFirstUpperCase;
var _compat = require("preact/compat");
exports.memo = _compat.memo;
exports.forwardRef = _compat.forwardRef;
exports.render = _compat.render;
exports.cloneElement = _compat.cloneElement;
exports.createContext = _compat.createContext;
exports.useId = _compat.useId;
exports.useRef = _compat.useRef;
exports.useState = _compat.useState;
exports.useReducer = _compat.useReducer;
exports.useContext = _compat.useContext;
exports.useCallback = _compat.useCallback;
exports.useMemo = _compat.useMemo;
exports.useEffect = _compat.useEffect;
exports.useImperativeHandle = _compat.useImperativeHandle;
const KEY_ARROW_DOWN = exports.KEY_ARROW_DOWN = "ArrowDown";
const KEY_ARROW_UP = exports.KEY_ARROW_UP = "ArrowUp";
const KEY_ENTER = exports.KEY_ENTER = "Enter";
const KEY_ESCAPE = exports.KEY_ESCAPE = "Escape";
const KEY_TAB = exports.KEY_TAB = "Tab";
const KEY_DELETE = exports.KEY_DELETE = "Delete";
const TOUCH = "touch";
const EVENT_TOUCH_START = exports.EVENT_TOUCH_START = TOUCH + "start";
const EVENT_TOUCH_MOVE = exports.EVENT_TOUCH_MOVE = TOUCH + "move";
const EVENT_TOUCH_END = exports.EVENT_TOUCH_END = TOUCH + "end";
const EVENT_TOUCH_CANCEL = exports.EVENT_TOUCH_CANCEL = TOUCH + "cancel";
const FN_NOOP = () => {};
exports.FN_NOOP = FN_NOOP;
const isFn = fn => typeof fn === 'function';
exports.isFn = isFn;
const getRefValue = ref => (ref || {}).current;
exports.getRefValue = getRefValue;
const setRefValue = (ref, value) => {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
const isArr = Array.isArray;
const safeMap = (items, crElement) => isArr(items) ? items.map(crElement) : null;
exports.safeMap = safeMap;
const _focusHtmlElement = element => {
  if (element && isFn(element.focus)) {
    element.focus();
  }
  return element;
};
const focusElementById = id => {
  _focusHtmlElement(document.getElementById(id));
};
exports.focusElementById = focusElementById;
const _getValueFromFnOrRef = fnOrRef => isFn(fnOrRef) ? fnOrRef() : getRefValue(fnOrRef);
const focusRefElement = (fnOrRef1, fnOrRef2) => _focusHtmlElement(_getValueFromFnOrRef(fnOrRef1) || _getValueFromFnOrRef(fnOrRef2));
exports.focusRefElement = focusRefElement;
const focusAsyncRefElement = function (refOrFn, mls) {
  if (mls === void 0) {
    mls = 1000;
  }
  setTimeout(() => focusRefElement(refOrFn), mls);
};
exports.focusAsyncRefElement = focusAsyncRefElement;
const focusRefNextSiblingFirstChildElement = ref => {
  _focusHtmlElement(((getRefValue(ref) || {}).nextElementSibling || {}).firstElementChild);
};
exports.focusRefNextSiblingFirstChildElement = focusRefNextSiblingFirstChildElement;
const getRefElementStyle = ref => (getRefValue(ref) || {}).style;
exports.getRefElementStyle = getRefElementStyle;
const setRefInputValue = (refInput, value) => {
  const _input = getRefValue(refInput);
  if (_input && isFn(_input.setValue)) {
    _input.setValue(value);
  }
};
exports.setRefInputValue = setRefInputValue;
const stopDefaultFor = evt => {
  evt.stopPropagation();
  evt.preventDefault();
};
exports.stopDefaultFor = stopDefaultFor;
const EVENT_TEST_PASSIVE = "testPassive",
  IS_SUPPORT_PASSIVE_EVENT = (() => {
    try {
      const options = Object.defineProperty({}, "passive", {
        get: function () {
          return options._r = true;
        }
      });
      window.addEventListener(EVENT_TEST_PASSIVE, null, options);
      window.removeEventListener(EVENT_TEST_PASSIVE, null, options);
      return options._r;
    } catch (e) {
      return false;
    }
  })();
const PASSIVE_EVENT_OPTIONS = exports.PASSIVE_EVENT_OPTIONS = IS_SUPPORT_PASSIVE_EVENT ? {
  passive: true
} : false;
const _getFirstTouches = touches => touches && touches[0] || {},
  CLIENT_X = 'clientX',
  CLIENT_Y = 'clientY',
  _fGetTouch = propName => touches => _getFirstTouches(touches)[propName],
  _getTouchClientX = _fGetTouch(CLIENT_X),
  _getTouchClientY = _fGetTouch(CLIENT_Y),
  _fGetEvt = (propName, getTouch) => evt => evt[propName] || getTouch(evt.targetTouches) || getTouch(evt.changedTouches) || 0;
const getClientX = exports.getClientX = _fGetEvt(CLIENT_X, _getTouchClientX);
const getClientY = exports.getClientY = _fGetEvt(CLIENT_Y, _getTouchClientY);
const toLink = (href, isHttp) => {
  const protocol = (href || '').split('://')[0];
  return protocol === 'https' || isHttp && protocol === 'http' ? href : void 0;
};
exports.toLink = toLink;
//# sourceMappingURL=uiApi.js.map