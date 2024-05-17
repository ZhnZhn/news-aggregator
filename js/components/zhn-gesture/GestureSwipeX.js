"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _usePassiveTouchEvent = _interopRequireDefault(require("../hooks/usePassiveTouchEvent"));
var _jsxRuntime = require("preact/jsx-runtime");
const BORDER_LEFT = "border-left";
const DRAG_START_BORDER_LEFT = "4px solid #d64336";
const TOUCH_ACTION = "touch-action";
const LONG_TOUCH = 1000;
const NOT_HAS_TOUCH_EVENTS = !_has.HAS_TOUCH_EVENTS;
const _preventDefault = evt => {
  if (NOT_HAS_TOUCH_EVENTS) {
    evt.preventDefault();
  }
};
const _assign = Object.assign,
  _getElementStyle = el => el.style;
const _setStartStyle = node => {
  const _nodeStyle = _getElementStyle(node);
  _nodeStyle.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
  if (_has.HAS_TOUCH_EVENTS) {
    _nodeStyle.setProperty(TOUCH_ACTION, "none");
  }
};
const _setMoveStyle = (node, dX) => {
  _assign(_getElementStyle(node), {
    right: dX + 'px',
    opacity: 1 - 0.5 * Math.abs(dX) / 60
  });
};
const _setEndStyle = (node, isInitialStyle) => {
  const _nodeStyle = _getElementStyle(node);
  _nodeStyle.removeProperty(BORDER_LEFT);
  if (_has.HAS_TOUCH_EVENTS) {
    _nodeStyle.removeProperty(TOUCH_ACTION);
  }
  if (isInitialStyle) {
    _assign(_nodeStyle, {
      right: 0,
      opacity: 1
    });
  }
};
const FN_NOOP = () => {},
  TOP_SCROLL_THRESHOLD = 15;
const GestureSwipeX = _ref2 => {
  let {
    refEl,
    className,
    style,
    children,
    setTimeStamp = FN_NOOP,
    onGesture
  } = _ref2;
  const _ref = (0, _uiApi.useRef)(),
    _refItem = refEl || _ref,
    _refClientX = (0, _uiApi.useRef)(0),
    _refClientY = (0, _uiApi.useRef)(0),
    _refNodeEl = (0, _uiApi.useRef)(null),
    _refIsGestureStart = (0, _uiApi.useRef)(false),
    _refIsMoveStart = (0, _uiApi.useRef)(false),
    _refGestureId = (0, _uiApi.useRef)(),
    _clearGestureId = (0, _uiApi.useCallback)(() => {
      clearTimeout((0, _uiApi.getRefValue)(_refGestureId));
      (0, _uiApi.setRefValue)(_refIsGestureStart, false);
      (0, _uiApi.setRefValue)(_refClientY, 0);
      const _nodeEl = (0, _uiApi.getRefValue)(_refNodeEl);
      if (_nodeEl) {
        _setEndStyle(_nodeEl, true);
        (0, _uiApi.setRefValue)(_refNodeEl, null);
      }
    }, []),
    _gestureStartImpl = (0, _uiApi.useCallback)(nodeEl => {
      (0, _uiApi.setRefValue)(_refIsGestureStart, true);
      _setStartStyle(nodeEl);
    }, [])

    /*eslint-disable react-hooks/exhaustive-deps */,
    _gestureStart = (0, _uiApi.useCallback)(evt => {
      if (evt.target.tagName !== 'A') {
        const node = evt.currentTarget;
        if (!(0, _uiApi.getRefValue)(_refIsGestureStart)) {
          (0, _uiApi.setRefValue)(_refClientY, (0, _uiApi.getClientY)(evt));
          (0, _uiApi.setRefValue)(_refNodeEl, node);
          (0, _uiApi.setRefValue)(_refGestureId, setTimeout(() => _gestureStartImpl(node), LONG_TOUCH));
        } else {
          _clearGestureId();
        }
      }
    }, [])
    //_gestureStartImpl
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _gestureMove = (0, _uiApi.useCallback)(evt => {
      _preventDefault(evt);
      if ((0, _uiApi.getRefValue)(_refIsGestureStart)) {
        const _clientX = (0, _uiApi.getClientX)(evt);
        if (_clientX) {
          if (!(0, _uiApi.getRefValue)(_refIsMoveStart)) {
            (0, _uiApi.setRefValue)(_refClientX, _clientX);
            (0, _uiApi.setRefValue)(_refIsMoveStart, true);
          } else {
            const _dX = (0, _uiApi.getRefValue)(_refClientX) - _clientX;
            if (_dX < 0) {
              _setMoveStyle(evt.currentTarget, _dX);
            }
          }
        }
      } else {
        const _clientYStart = (0, _uiApi.getRefValue)(_refClientY);
        if (_clientYStart && Math.abs(_clientYStart - (0, _uiApi.getClientY)(evt)) > TOP_SCROLL_THRESHOLD) {
          _clearGestureId();
        }
      }
    }, [])
    // _clearGestureId
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _gestureEnd = (0, _uiApi.useCallback)(evt => {
      if ((0, _uiApi.getRefValue)(_refIsGestureStart)) {
        let _isInitialStyle = false;
        if ((0, _uiApi.getRefValue)(_refIsMoveStart)) {
          _preventDefault(evt);
          setTimeStamp(evt.timeStamp);
          const _clientX = (0, _uiApi.getClientX)(evt),
            _dX = (0, _uiApi.getRefValue)(_refClientX) - _clientX;
          _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
          (0, _uiApi.setRefValue)(_refIsMoveStart, false);
        }
        (0, _uiApi.setRefValue)(_refIsGestureStart, false);
        _setEndStyle(evt.currentTarget, _isInitialStyle);
      } else {
        _clearGestureId();
      }
    }, [])
    // setTimeStamp, onGesture, _clearGestureId
    ,
    _handlers = (0, _uiApi.useMemo)(() => _has.HAS_TOUCH_EVENTS ? void 0 : {
      onMouseDown: _gestureStart,
      onMouseMove: _gestureMove,
      onMouseUp: _gestureEnd,
      onMouseLeave: _gestureEnd
    }, []);
  // _gestureStart, _gestureMove, _gestureEnd
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _usePassiveTouchEvent.default)(_refItem, _uiApi.EVENT_TOUCH_START, _gestureStart);
  (0, _usePassiveTouchEvent.default)(_refItem, _uiApi.EVENT_TOUCH_MOVE, _gestureMove);
  (0, _usePassiveTouchEvent.default)(_refItem, _uiApi.EVENT_TOUCH_END, _gestureEnd);
  return (0, _jsxRuntime.jsx)("div", {
    ref: _refItem,
    role: "presentation",
    className: className,
    style: style,
    ..._handlers,
    children: children
  });
};
var _default = exports.default = GestureSwipeX;
//# sourceMappingURL=GestureSwipeX.js.map