"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//import isKeyEnter from '../hooks/isKeyEnter';

var _isFn = function _isFn(fn) {
    return typeof fn === 'function';
  },
  _isNaN = Number.isNaN,
  _assign = Object.assign,
  _initResizeProperties = function _initResizeProperties(inst) {
    _assign(inst, {
      id: null,
      deltaStep: 1,
      countStep: 0
    });
  };
var ResizeElementImpl = function ResizeElementImpl(_ref) {
  var _this = this;
  var elementRef = _ref.elementRef,
    _initWidth = _ref.initWidth,
    _minWidth = _ref.minWidth,
    _maxWidth = _ref.maxWidth,
    _ref$step = _ref.step,
    _step = _ref$step === void 0 ? 10 : _ref$step,
    _onResizeAfter = _ref.onResizeAfter;
  this._increaseDeltaStep = function () {
    _this.countStep += 1;
    if (_this.countStep > 30) {
      _this.deltaStep = 3;
    } else if (_this.countStep > 15) {
      _this.deltaStep = 2;
    }
    if (_this.maxDelta - _this.delta < 20 || _this.delta - _this.minDelta < 20) {
      _this.deltaStep = 1;
    }
  };
  this._getElementStyle = function () {
    var _ref2 = _this.elementRef || {},
      current = _ref2.current,
      _ref3 = current || {},
      style = _ref3.style;
    return style || {};
  };
  this._setElementWidth = function (width) {
    _this._getElementStyle().width = width + 'px';
  };
  this._getElementWidth = function () {
    return parseInt(_this._getElementStyle().width, 10);
  };
  this._onResizeAfter = function () {
    var onResizeAfter = _this.onResizeAfter;
    if (_isFn(onResizeAfter)) {
      onResizeAfter(_this._getElementWidth());
    }
  };
  this.clearInterval = function () {
    clearInterval(_this.id);
  };
  this.toWidth = function (width, isOnResizeAfter) {
    var minWidth = _this.minWidth,
      maxWidth = _this.maxWidth,
      initWidth = _this.initWidth;
    if (width >= minWidth && width <= maxWidth) {
      _this.delta = width - initWidth;
      _this._setElementWidth(width);
      if (isOnResizeAfter) {
        _this._onResizeAfter();
      }
    }
  };
  this.resizeBy = function (step) {
    if (step < 0 && _this.delta > _this.minDelta || step > 0 && _this.delta < _this.maxDelta) {
      _this.delta += step;
      _this._setElementWidth(_this.initWidth + _this.delta);
    } else {
      _this.hStopResize();
    }
  };
  this._resizeLeft = function () {
    _this.resizeBy(-_this.deltaStep);
    _this._increaseDeltaStep();
  };
  this._resizeRight = function () {
    _this.resizeBy(_this.deltaStep);
    _this._increaseDeltaStep();
  };
  this._updateDelta = function () {
    var w = parseInt(_this._getElementStyle().width, 10);
    if (!_isNaN(w)) {
      _this.delta = w - _this.initWidth;
    }
  };
  this._startResize = function (fnResize) {
    if (_this.id !== null) {
      _this._stopResize();
    }
    _this._updateDelta();
    _this.id = setInterval(fnResize, 5);
  };
  this._stopResize = function () {
    _this.clearInterval();
    _initResizeProperties(_this);
  };
  this.hStopResize = function () {
    _this._stopResize();
    _this._onResizeAfter();
  };
  this.elementRef = elementRef;
  this.step = _step;
  this.onResizeAfter = _onResizeAfter;
  this.initWidth = _initWidth;
  this.minWidth = _minWidth;
  this.maxWidth = _maxWidth;
  this.minDelta = _minWidth - _initWidth;
  this.maxDelta = _maxWidth - _initWidth;
  this.delta = 0;
  _initResizeProperties(this);
  this.hStartResizeLeft = this._startResize.bind(null, this._resizeLeft);
  this.hStartResizeRight = this._startResize.bind(null, this._resizeRight);
};
var _default = ResizeElementImpl;
exports["default"] = _default;
//# sourceMappingURL=ResizeElementImpl.js.map