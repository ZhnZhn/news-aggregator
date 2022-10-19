import {
  forwardRef,
  useRef,
  useCallback,
  useMemo
} from '../uiApi';
import { HAS_TOUCH } from '../has';

const BORDER_LEFT = 'border-left';
const DRAG_START_BORDER_LEFT = "4px solid #d64336";

const LONG_TOUCH = 1000;

const _preventDefault = evt => {
  if (!HAS_TOUCH) { evt.preventDefault() }
};

const _assign = Object.assign;

const _getTouchClietX = touches => touches
  && touches[0]
  && touches[0].clientX;

const _getClientX = (ev) => {
  if (ev.clientX) { return ev.clientX; }
  const { targetTouches, changedTouches } = ev;
  return _getTouchClietX(targetTouches)
    || _getTouchClietX(changedTouches)
    || 0;
};

const _styleNode = (node) => {
  node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
};
const _setMoveStyle = (node, dX) => {
  _assign(node.style, {
    right: dX + 'px',
    opacity: (1 - (0.5*Math.abs(dX))/60)
  })
};
const _setEndStyle = (node, isInitialStyle) => {
  node.style.removeProperty(BORDER_LEFT)
  if (isInitialStyle) {
    _assign(node.style, {
      right: 0,
      opacity: 1
    })
  }
};

const _noopFn = () => {};

const _setRefValue = (ref, value) => ref.current = value;
const _getRefValue = ref => ref.current;

const GestureSwipeX = forwardRef(({
  style,
  children,
  setTimeStamp=_noopFn,
  onGesture
}, ref) => {
  const _refClientX = useRef(0)
  , _refIsGestureStart = useRef(false)
  , _refIsMoveStart = useRef(false)
  , _refGestureId = useRef()
  , _gestureStartImpl = useCallback(node => {
    _setRefValue(_refIsGestureStart, true)
    _styleNode(node)
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _gestureStart = useCallback(evt => {
     if (evt.target.tagName !== 'A') {
       const node = evt.currentTarget;
       if (!_getRefValue(_refIsGestureStart)){
         _setRefValue(_refGestureId, setTimeout(
           () => _gestureStartImpl(node),
           LONG_TOUCH
         ))
       } else {
         clearTimeout(_getRefValue(_refGestureId))
         _setRefValue(_refIsGestureStart, false)
         _setEndStyle(node, true)
       }
     }
  }, [])
  //_gestureStartImpl
  /*eslint-enable react-hooks/exhaustive-deps */
  , _gestureMove = useCallback(evt => {
    _preventDefault(evt)
    if (_getRefValue(_refIsGestureStart)) {
      const _clientX = _getClientX(evt);
      if (_clientX) {
        if (!_getRefValue(_refIsMoveStart)) {
          _setRefValue(_refClientX, _clientX)
          _setRefValue(_refIsMoveStart, true)
        } else {
          const _dX = _getRefValue(_refClientX) - _clientX;
          if (_dX < 0) {
            _setMoveStyle(evt.currentTarget, _dX)
          }
        }
      }
    }
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _gestureEnd = useCallback(evt => {
    if (_getRefValue(_refIsGestureStart)) {
      let _isInitialStyle = false;
      if (_getRefValue(_refIsMoveStart)) {
        _preventDefault(evt)
        setTimeStamp(evt.timeStamp)
        const _clientX = _getClientX(evt)
        , _dX = _getRefValue(_refClientX) - _clientX;
        _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
        _setRefValue(_refIsMoveStart, false)
      }
      _setRefValue(_refIsGestureStart, false)
      _setEndStyle(evt.currentTarget, _isInitialStyle)
    } else {
      clearTimeout(_getRefValue(_refGestureId))
    }
  }, [])
  // setTimeStamp, onGesture
  , _handlers = useMemo(() => HAS_TOUCH ? {
      onTouchStart: _gestureStart,
      onTouchMove: _gestureMove,
      onTouchEnd: _gestureEnd
    } : {
      onMouseDown: _gestureStart,
      onMouseMove: _gestureMove,
      onMouseUp: _gestureEnd
   }, []);
   // _gestureStart, _gestureMove, _gestureEnd
   /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      ref={ref}
      role="presentation"
      style={style}
      {..._handlers}
    >
      {children}
    </div>
  );
})

export default GestureSwipeX
