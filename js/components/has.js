"use strict";

exports.__esModule = true;
exports.initWidthStyle = exports.HAS_TOUCH = void 0;

var INITIAL_WIDTH = 635,
    _isInnerWidth = function _isInnerWidth() {
  return window && window.innerWidth;
},
    _isTouchable = function _isTouchable() {
  return document && 'ontouchstart' in document.documentElement;
};

var HAS_TOUCH = _isTouchable();

exports.HAS_TOUCH = HAS_TOUCH;

var _wideWidth = function _wideWidth() {
  return _isInnerWidth() ? window.innerWidth > 700 : true;
};

var _getWidth = function _getWidth() {
  return _isInnerWidth() ? window.innerWidth - 16 : INITIAL_WIDTH;
};

var initWidthStyle = function initWidthStyle(initialWidth) {
  if (initialWidth === void 0) {
    initialWidth = INITIAL_WIDTH;
  }

  return {
    width: !_wideWidth() ? _getWidth() : initialWidth
  };
};

exports.initWidthStyle = initWidthStyle;
//# sourceMappingURL=has.js.map