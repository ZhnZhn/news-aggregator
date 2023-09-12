"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _jsxRuntime = require("preact/jsx-runtime");
const BORDER_LEFT = 'border-left';
const DRAG_START_BORDER_LEFT = "4px solid #d64336";
const LONG_TOUCH = 1000;
const _preventDefault = evt => {
  if (!_has.HAS_TOUCH_EVENTS) {
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
const _noopFn = () => {};
const _setRefValue = (ref, value) => ref.current = value;
const _getRefValue = ref => ref.current;
const GestureSwipeX = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    className,
    style,
    children,
    setTimeStamp = _noopFn,
    onGesture
  } = _ref;
  const _refClientX = (0, _uiApi.useRef)(0),
    _refIsGestureStart = (0, _uiApi.useRef)(false),
    _refIsMoveStart = (0, _uiApi.useRef)(false),
    _refGestureId = (0, _uiApi.useRef)(),
    _gestureStartImpl = (0, _uiApi.useCallback)(node => {
      _setRefValue(_refIsGestureStart, true);
      _styleNode(node);
    }, [])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _gestureStart = (0, _uiApi.useCallback)(evt => {
      if (evt.target.tagName !== 'A') {
        const node = evt.currentTarget;
        if (!_getRefValue(_refIsGestureStart)) {
          _setRefValue(_refGestureId, setTimeout(() => _gestureStartImpl(node), LONG_TOUCH));
        } else {
          clearTimeout(_getRefValue(_refGestureId));
          _setRefValue(_refIsGestureStart, false);
          _setEndStyle(node, true);
        }
      }
    }, [])
    //_gestureStartImpl
    /*eslint-enable react-hooks/exhaustive-deps */,
    _gestureMove = (0, _uiApi.useCallback)(evt => {
      _preventDefault(evt);
      if (_getRefValue(_refIsGestureStart)) {
        const _clientX = (0, _uiApi.getClientX)(evt);
        if (_clientX) {
          if (!_getRefValue(_refIsMoveStart)) {
            _setRefValue(_refClientX, _clientX);
            _setRefValue(_refIsMoveStart, true);
          } else {
            const _dX = _getRefValue(_refClientX) - _clientX;
            if (_dX < 0) {
              _setMoveStyle(evt.currentTarget, _dX);
            }
          }
        }
      }
    }, [])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _gestureEnd = (0, _uiApi.useCallback)(evt => {
      if (_getRefValue(_refIsGestureStart)) {
        let _isInitialStyle = false;
        if (_getRefValue(_refIsMoveStart)) {
          _preventDefault(evt);
          setTimeStamp(evt.timeStamp);
          const _clientX = (0, _uiApi.getClientX)(evt),
            _dX = _getRefValue(_refClientX) - _clientX;
          _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
          _setRefValue(_refIsMoveStart, false);
        }
        _setRefValue(_refIsGestureStart, false);
        _setEndStyle(evt.currentTarget, _isInitialStyle);
      } else {
        clearTimeout(_getRefValue(_refGestureId));
      }
    }, [])
    // setTimeStamp, onGesture
    ,
    _handlers = (0, _uiApi.useMemo)(() => _has.HAS_TOUCH_EVENTS ? {
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

  return (0, _jsxRuntime.jsx)("div", {
    ref: ref,
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