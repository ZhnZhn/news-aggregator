import {
  forwardRef,

  useRef,
  useCallback,
  useMemo,

  EVENT_TOUCH_START,
  EVENT_TOUCH_MOVE,
  EVENT_TOUCH_END,

  getRefValue,
  setRefValue,

  getClientX
} from '../uiApi';

import { HAS_TOUCH_EVENTS } from '../has';

import usePassiveTouchEvent from '../hooks/usePassiveTouchEvent';

const BORDER_LEFT = "border-left";
const DRAG_START_BORDER_LEFT = "4px solid #d64336";
const TOUCH_ACTION = "touch-action";

const LONG_TOUCH = 1000;
const NOT_HAS_TOUCH_EVENTS = !HAS_TOUCH_EVENTS

const _preventDefault = evt => {
  if (NOT_HAS_TOUCH_EVENTS) {
    evt.preventDefault()
  }
};

const _assign = Object.assign
, _getElementStyle = el => el.style;

const _setStartStyle = (node) => {
  const _nodeStyle = _getElementStyle(node);
  _nodeStyle.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
  if (HAS_TOUCH_EVENTS) {
    _nodeStyle.setProperty(TOUCH_ACTION, "none")
  }
};
const _setMoveStyle = (node, dX) => {
  _assign(_getElementStyle(node), {
    right: dX + 'px',
    opacity: (1 - (0.5*Math.abs(dX))/60)
  })
};
const _setEndStyle = (node, isInitialStyle) => {
  const _nodeStyle = _getElementStyle(node);
  _nodeStyle.removeProperty(BORDER_LEFT)
  if (HAS_TOUCH_EVENTS) {
    _nodeStyle.removeProperty(TOUCH_ACTION)
  }

  if (isInitialStyle) {
    _assign(_nodeStyle, {
      right: 0,
      opacity: 1
    })
  }
};

const FN_NOOP = () => {}
, TOP_SCROLL_THRESHOLD = 15;

const GestureSwipeX = forwardRef(({
  refScrollPane,
  className,
  style,
  children,
  setTimeStamp=FN_NOOP,
  onGesture
}, ref) => {
  const _ref = useRef()
  , _refItem = ref || _ref
  , _refClientX = useRef(0)
  , _refIsGestureStart = useRef(false)
  , _refIsMoveStart = useRef(false)
  , _refGestureId = useRef()

  /*eslint-disable react-hooks/exhaustive-deps */
  , _gestureStartImpl = useCallback((node, scrollTopPrev) => {
    const { scrollTop } = getRefValue(refScrollPane) || {};
    if (Math.abs(scrollTop - scrollTopPrev) < TOP_SCROLL_THRESHOLD) {
      setRefValue(_refIsGestureStart, true)
      _setStartStyle(node)
    }
  }, [])
  //refScrollPane
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _gestureStart = useCallback(evt => {
     if (evt.target.tagName !== 'A') {
       const node = evt.currentTarget
       , { scrollTop } = getRefValue(refScrollPane) || {}
       if (!getRefValue(_refIsGestureStart)){
         setRefValue(_refGestureId, setTimeout(
           () => _gestureStartImpl(node, scrollTop),
           LONG_TOUCH
         ))
       } else {
         clearTimeout(getRefValue(_refGestureId))
         setRefValue(_refIsGestureStart, false)
         _setEndStyle(node, true)
       }
     }
  }, [])
  //_gestureStartImpl
  /*eslint-enable react-hooks/exhaustive-deps */
  , _gestureMove = useCallback(evt => {
    _preventDefault(evt)
    if (getRefValue(_refIsGestureStart)) {
      const _clientX = getClientX(evt);
      if (_clientX) {
        if (!getRefValue(_refIsMoveStart)) {
          setRefValue(_refClientX, _clientX)
          setRefValue(_refIsMoveStart, true)
        } else {
          const _dX = getRefValue(_refClientX) - _clientX;
          if (_dX < 0) {
            _setMoveStyle(evt.currentTarget, _dX)
          }
        }
      }
    }
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _gestureEnd = useCallback(evt => {
    if (getRefValue(_refIsGestureStart)) {
      let _isInitialStyle = false;
      if (getRefValue(_refIsMoveStart)) {
        _preventDefault(evt)
        setTimeStamp(evt.timeStamp)
        const _clientX = getClientX(evt)
        , _dX = getRefValue(_refClientX) - _clientX;
        _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
        setRefValue(_refIsMoveStart, false)
      }
      setRefValue(_refIsGestureStart, false)
      _setEndStyle(evt.currentTarget, _isInitialStyle)
    } else {
      clearTimeout(getRefValue(_refGestureId))
    }
  }, [])
  // setTimeStamp, onGesture
  , _handlers = useMemo(() => HAS_TOUCH_EVENTS
       ? void 0
       : {
           onMouseDown: _gestureStart,
           onMouseMove: _gestureMove,
           onMouseUp: _gestureEnd,
           onMouseLeave: _gestureEnd
       }, []);
   // _gestureStart, _gestureMove, _gestureEnd
   /*eslint-enable react-hooks/exhaustive-deps */

  usePassiveTouchEvent(_refItem, EVENT_TOUCH_START, _gestureStart)
  usePassiveTouchEvent(_refItem, EVENT_TOUCH_MOVE, _gestureMove)
  usePassiveTouchEvent(_refItem, EVENT_TOUCH_END, _gestureEnd)

  return (
    <div
      ref={_refItem}
      role="presentation"
      className={className}
      style={style}
      {..._handlers}
    >
      {children}
    </div>
  );
})

export default GestureSwipeX
