"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.stopDefaultFor = exports.setRefValue = exports.render = exports.memo = exports.getRefValue = exports.getRefElementStyle = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefNextSiblingFirstChildElement = exports.focusRefElement = exports.createContext = exports.cloneElement = void 0;
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
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
var getRefValue = function getRefValue(ref) {
  return (ref || {}).current;
};
exports.getRefValue = getRefValue;
var setRefValue = function setRefValue(ref, value) {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
var _focusHtmlElement = function _focusHtmlElement(element) {
  if (element && _isFn(element.focus)) {
    element.focus();
  }
};
var focusRefElement = function focusRefElement(ref1, ref2) {
  _focusHtmlElement(getRefValue(ref1) || getRefValue(ref2));
};
exports.focusRefElement = focusRefElement;
var focusRefNextSiblingFirstChildElement = function focusRefNextSiblingFirstChildElement(ref) {
  _focusHtmlElement(((getRefValue(ref) || {}).nextElementSibling || {}).firstElementChild);
};
exports.focusRefNextSiblingFirstChildElement = focusRefNextSiblingFirstChildElement;
var getRefElementStyle = function getRefElementStyle(ref) {
  return (getRefValue(ref) || {}).style;
};
exports.getRefElementStyle = getRefElementStyle;
var stopDefaultFor = function stopDefaultFor(evt) {
  evt.stopPropagation();
  evt.preventDefault();
};
exports.stopDefaultFor = stopDefaultFor;
var _getFirstTouches = function _getFirstTouches(touches) {
  return touches && touches[0] || {};
};
var _getTouchClientX = function _getTouchClientX(touches) {
  return _getFirstTouches(touches).clientX;
};
var _getTouchClientY = function _getTouchClientY(touches) {
  return _getFirstTouches(touches).clientY;
};
var getClientX = function getClientX(evt) {
  return evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
};
exports.getClientX = getClientX;
var getClientY = function getClientY(evt) {
  return evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
};
exports.getClientY = getClientY;
//# sourceMappingURL=uiApi.js.map