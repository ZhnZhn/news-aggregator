"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _usePassiveTouchEvent = _interopRequireDefault(require("../hooks/usePassiveTouchEvent"));
var _jsxRuntime = require("preact/jsx-runtime");
const BORDER_LEFT = 'border-left';
const DRAG_START_BORDER_LEFT = "4px solid #d64336";
const LONG_TOUCH = 1000;
const NOT_HAS_TOUCH_EVENTS = !_has.HAS_TOUCH_EVENTS;
const _preventDefault = evt => {
  if (NOT_HAS_TOUCH_EVENTS) {
    evt.preventDefault();
  }
};
const _assign = Object.assign;
const _styleNode = node => {
  node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};
const _setMoveStyle = (node, dX) => {
  _assign(node.style, {
    right: dX + 'px',
    opacity: 1 - 0.5 * Math.abs(dX) / 60
  });
};
const _setEndStyle = (node, isInitialStyle) => {
  node.style.removeProperty(BORDER_LEFT);
  if (isInitialStyle) {
    _assign(node.style, {
      right: 0,
      opacity: 1
    });
  }
};
const FN_NOOP = () => {};
const GestureSwipeX = (0, _uiApi.forwardRef)((_ref2, ref) => {
  let {
    className,
    style,
    children,
    setTimeStamp = FN_NOOP,
    onGesture
  } = _ref2;
  const _ref = (0, _uiApi.useRef)(),
    _refItem = ref || _ref,
    _refClientX = (0, _uiApi.useRef)(0),
    _refIsGestureStart = (0, _uiApi.useRef)(false),
    _refIsMoveStart = (0, _uiApi.useRef)(false),
    _refGestureId = (0, _uiApi.useRef)(),
    _gestureStartImpl = (0, _uiApi.useCallback)(node => {
      (0, _uiApi.setRefValue)(_refIsGestureStart, true);
      _styleNode(node);
    }, [])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _gestureStart = (0, _uiApi.useCallback)(evt => {
      if (evt.target.tagName !== 'A') {
        const node = evt.currentTarget;
        if (!(0, _uiApi.getRefValue)(_refIsGestureStart)) {
          (0, _uiApi.setRefValue)(_refGestureId, setTimeout(() => _gestureStartImpl(node), LONG_TOUCH));
        } else {
          clearTimeout((0, _uiApi.getRefValue)(_refGestureId));
          (0, _uiApi.setRefValue)(_refIsGestureStart, false);
          _setEndStyle(node, true);
        }
      }
    }, [])
    //_gestureStartImpl
    /*eslint-enable react-hooks/exhaustive-deps */,
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
      }
    }, [])
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
        clearTimeout((0, _uiApi.getRefValue)(_refGestureId));
      }
    }, [])
    // setTimeStamp, onGesture
    ,
    _handlers = (0, _uiApi.useMemo)(() => _has.HAS_TOUCH_EVENTS ? void 0 : {
      onMouseDown: _gestureStart,
      onMouseMove: _gestureMove,
      onMouseUp: _gestureEnd
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
});
var _default = GestureSwipeX;
exports.default = _default;
//# sourceMappingURL=GestureSwipeX.js.map