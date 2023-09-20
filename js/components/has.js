"use strict";

exports.__esModule = true;
exports.initWidthStyle = exports.HAS_WIDE_SCREEN = exports.HAS_TOUCH_EVENTS = exports.HAS_KEYBOARD_FOCUS = void 0;
const INITIAL_WIDTH = 635,
  _hasWindowInnerWidth = () => window && window.innerWidth,
  _hasDeviceTouchScreen = () => 'ontouchstart' in window || !!(navigator && navigator.maxTouchPoints);
const HAS_TOUCH_EVENTS = _hasDeviceTouchScreen();
exports.HAS_TOUCH_EVENTS = HAS_TOUCH_EVENTS;
const HAS_WIDE_SCREEN = window && window.innerWidth > 380;
exports.HAS_WIDE_SCREEN = HAS_WIDE_SCREEN;
const HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS || HAS_WIDE_SCREEN;
exports.HAS_KEYBOARD_FOCUS = HAS_KEYBOARD_FOCUS;
const _wideWidth = () => _hasWindowInnerWidth() ? window.innerWidth > 700 : true;
const _getWidth = () => _hasWindowInnerWidth() ? window.innerWidth - 16 : INITIAL_WIDTH;
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