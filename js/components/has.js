"use strict";

exports.__esModule = true;
exports.initWidthStyle = exports.HAS_WIDE_SCREEN = exports.HAS_TOUCH_EVENTS = exports.HAS_KEYBOARD_FOCUS = void 0;
const INITIAL_WIDTH = 635,
  _isInnerWidth = () => window && window.innerWidth,
  _isTouchable = () => document && 'ontouchstart' in document.documentElement;
const HAS_TOUCH_EVENTS = _isTouchable();
exports.HAS_TOUCH_EVENTS = HAS_TOUCH_EVENTS;
const HAS_WIDE_SCREEN = window && window.innerWidth > 380;
exports.HAS_WIDE_SCREEN = HAS_WIDE_SCREEN;
const HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS || HAS_WIDE_SCREEN;
exports.HAS_KEYBOARD_FOCUS = HAS_KEYBOARD_FOCUS;
const _wideWidth = () => _isInnerWidth() ? window.innerWidth > 700 : true;
const _getWidth = () => _isInnerWidth() ? window.innerWidth - 16 : INITIAL_WIDTH;
const initWidthStyle = function (initialWidth) {
  if (initialWidth === void 0) {
    initialWidth = INITIAL_WIDTH;
  }
  return {
    width: !_wideWidth() ? _getWidth() : initialWidth
  };
};
exports.initWidthStyle = initWidthStyle;
//# sourceMappingURL=has.js.map