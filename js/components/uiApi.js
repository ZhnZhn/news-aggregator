"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.memo = exports.getRefValue = exports.getRefElementStyle = exports.forwardRef = exports.focusRefElement = exports.createContext = exports.cloneElement = void 0;

var _react = require("react");

exports.memo = _react.memo;
exports.cloneElement = _react.cloneElement;
exports.createContext = _react.createContext;
exports.forwardRef = _react.forwardRef;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useContext = _react.useContext;
exports.useCallback = _react.useCallback;
exports.useMemo = _react.useMemo;
exports.useEffect = _react.useEffect;
exports.useImperativeHandle = _react.useImperativeHandle;

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
//# sourceMappingURL=uiApi.js.map