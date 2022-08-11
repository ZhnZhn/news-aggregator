"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.stopDefaultFor = exports.render = exports.memo = exports.getRefValue = exports.getRefElementStyle = exports.forwardRef = exports.focusRefElement = exports.createElement = exports.createContext = exports.cloneElement = void 0;

var _compat = require("preact/compat");

exports.memo = _compat.memo;
exports.forwardRef = _compat.forwardRef;
exports.render = _compat.render;
exports.cloneElement = _compat.cloneElement;
exports.createElement = _compat.createElement;
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

var focusRefElement = function focusRefElement(ref) {
  var element = getRefValue(ref);

  if (element && _isFn(element.focus)) {
    element.focus();
  }
};

exports.focusRefElement = focusRefElement;

var getRefElementStyle = function getRefElementStyle(ref) {
  var element = getRefValue(ref);
  return (element || {}).style;
};

exports.getRefElementStyle = getRefElementStyle;

var stopDefaultFor = function stopDefaultFor(event) {
  event.stopPropagation();
  event.preventDefault();
};

exports.stopDefaultFor = stopDefaultFor;
//# sourceMappingURL=uiApi.js.map