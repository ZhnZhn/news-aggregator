"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.stopDefaultFor = exports.setRefValue = exports.render = exports.memo = exports.getRefValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefNextSiblingFirstChildElement = exports.focusRefElement = exports.focusElementById = exports.focusAsyncRefElement = exports.createContext = exports.cloneElement = void 0;
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
const _getFirstTouches = touches => touches && touches[0] || {};
const _getTouchClientX = touches => _getFirstTouches(touches).clientX;
const _getTouchClientY = touches => _getFirstTouches(touches).clientY;
const getClientX = evt => evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
exports.getClientX = getClientX;
const getClientY = evt => evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
exports.getClientY = getClientY;
//# sourceMappingURL=uiApi.js.map