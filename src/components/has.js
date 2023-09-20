const INITIAL_WIDTH = 635
, _hasWindowInnerWidth = () => window && window.innerWidth
, _hasDeviceTouchScreen = () => ('ontouchstart' in window)
  || !!(navigator && navigator.maxTouchPoints);

export const HAS_TOUCH_EVENTS = _hasDeviceTouchScreen()
export const HAS_WIDE_SCREEN = window
  && window.innerWidth > 380

export const HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS
 || HAS_WIDE_SCREEN

const _wideWidth = () => _hasWindowInnerWidth()
  ? window.innerWidth > 700
  : true

const _getWidth = () => _hasWindowInnerWidth()
  ? window.innerWidth - 16
  : INITIAL_WIDTH

export const initWidthStyle = (
  initialWidth=INITIAL_WIDTH
) => ({
  width: !_wideWidth()
    ? _getWidth()
    : initialWidth
})
