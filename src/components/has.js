const INITIAL_WIDTH = 635
, _isInnerWidth = () => window && window.innerWidth
, _isTouchable = () => document
     && 'ontouchstart' in document.documentElement;

export const HAS_TOUCH_EVENTS = _isTouchable()
export const HAS_WIDE_SCREEN = window
  && window.innerWidth > 380

export const HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS
 || HAS_WIDE_SCREEN

const _wideWidth = () => _isInnerWidth()
  ? window.innerWidth > 700
  : true

const _getWidth = () => _isInnerWidth()
  ? window.innerWidth - 16
  : INITIAL_WIDTH

export const initWidthStyle = (
  initialWidth=INITIAL_WIDTH
) => ({
  width: !_wideWidth()
    ? _getWidth()
    : initialWidth
})
