"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.toLink = exports.stopDefaultFor = exports.setRefValue = exports.render = exports.memo = exports.getRefValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefNextSiblingFirstChildElement = exports.focusRefElement = exports.focusElementById = exports.focusAsyncRefElement = exports.createContext = exports.cloneElement = exports.bindTo = void 0;
var _bindTo = require("../utils/bindTo");
exports.bindTo = _bindTo.bindTo;
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
const _isFn = fn => typeof fn === 'function';
const getRefValue = ref => (ref || {}).current;
exports.getRefValue = getRefValue;
const setRefValue = (ref, value) => {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
const _focusHtmlElement = element => {
  if (element && _isFn(element.focus)) {
    element.focus();
  }
};
const focusElementById = id => {
  _focusHtmlElement(document.getElementById(id));
};
exports.focusElementById = focusElementById;
const _getValueFromRefOfFn = refOrFn => _isFn(refOrFn) ? refOrFn() : getRefValue(refOrFn);
const focusRefElement = (refOrFn1, refOrFn2) => {
  _focusHtmlElement(_getValueFromRefOfFn(refOrFn1) || _getValueFromRefOfFn(refOrFn2));
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