"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.toLink = exports.toFirstUpperCase = exports.stopDefaultFor = exports.setRefValue = exports.render = exports.memo = exports.isFn = exports.getRefValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefNextSiblingFirstChildElement = exports.focusRefElement = exports.focusElementById = exports.focusAsyncRefElement = exports.createContext = exports.crId = exports.cloneElement = exports.bindTo = exports.KEY_TAB = exports.KEY_ESCAPE = exports.KEY_ENTER = exports.KEY_DELETE = exports.KEY_ARROW_UP = exports.KEY_ARROW_DOWN = void 0;
var _utils = require("../utils");
exports.bindTo = _utils.bindTo;
exports.crId = _utils.crId;
exports.toFirstUpperCase = _utils.toFirstUpperCase;
var _compat = require("preact/compat");
exports.memo = _compat.memo;
exports.forwardRef = _compat.forwardRef;
exports.render = _compat.render;
exports.cloneElement = _compat.cloneElement;
exports.createContext = _compat.createContext;
exports.useRef = _compat.useRef;
exports.useState = _compat.useState;
exports.useReducer = _compat.useReducer;
exports.useContext = _compat.useContext;
exports.useCallback = _compat.useCallback;
exports.useMemo = _compat.useMemo;
exports.useEffect = _compat.useEffect;
exports.useImperativeHandle = _compat.useImperativeHandle;
const KEY_ARROW_DOWN = "ArrowDown";
exports.KEY_ARROW_DOWN = KEY_ARROW_DOWN;
const KEY_ARROW_UP = "ArrowUp";
exports.KEY_ARROW_UP = KEY_ARROW_UP;
const KEY_ENTER = "Enter";
exports.KEY_ENTER = KEY_ENTER;
const KEY_ESCAPE = "Escape";
exports.KEY_ESCAPE = KEY_ESCAPE;
const KEY_TAB = "Tab";
exports.KEY_TAB = KEY_TAB;
const KEY_DELETE = "Delete";
exports.KEY_DELETE = KEY_DELETE;
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
const _focusHtmlElement = element => {
  if (element && isFn(element.focus)) {
    element.focus();
  }
};
const focusElementById = id => {
  _focusHtmlElement(document.getElementById(id));
};
exports.focusElementById = focusElementById;
const _getValueFromFnOrRef = fnOrRef => isFn(fnOrRef) ? fnOrRef() : getRefValue(fnOrRef);
const focusRefElement = (fnOrRef1, fnOrRef2) => {
  _focusHtmlElement(_getValueFromFnOrRef(fnOrRef1) || _getValueFromFnOrRef(fnOrRef2));
};
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
const stopDefaultFor = evt => {
  evt.stopPropagation();
  evt.preventDefault();
};
exports.stopDefaultFor = stopDefaultFor;
const _getFirstTouches = touches => touches && touches[0] || {},
  CLIENT_X = 'clientX',
  CLIENT_Y = 'clientY',
  _fGetTouch = propName => touches => _getFirstTouches(touches)[propName],
  _getTouchClientX = _fGetTouch(CLIENT_X),
  _getTouchClientY = _fGetTouch(CLIENT_Y),
  _fGetEvt = (propName, getTouch) => evt => evt[propName] || getTouch(evt.targetTouches) || getTouch(evt.changedTouches) || 0;
const getClientX = _fGetEvt(CLIENT_X, _getTouchClientX);
exports.getClientX = getClientX;
const getClientY = _fGetEvt(CLIENT_Y, _getTouchClientY);
exports.getClientY = getClientY;
const toLink = (href, isHttp) => {
  const protocol = (href || '').split('://')[0];
  return protocol === 'https' || isHttp && protocol === 'http' ? href : void 0;
};
exports.toLink = toLink;
//# sourceMappingURL=uiApi.js.map