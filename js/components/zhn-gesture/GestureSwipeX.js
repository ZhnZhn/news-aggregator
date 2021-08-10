"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var _jsxRuntime = require("react/jsx-runtime");

var BORDER_LEFT = 'border-left';
var DRAG_START_BORDER_LEFT = "4px solid #d64336";
var LONG_TOUCH = 1000;
var HAS_TOUCH = _has["default"].HAS_TOUCH;

var _preventDefault = function _preventDefault(evt) {
  if (!HAS_TOUCH) {
    evt.preventDefault();
  }
};

var _assign = Object.assign;

var _getTouchClietX = function _getTouchClietX(touches) {
  return touches && touches[0] && touches[0].clientX;
};

var _getClientX = function _getClientX(ev) {
  if (ev.clientX) {
    return ev.clientX;
  }

  var targetTouches = ev.targetTouches,
      changedTouches = ev.changedTouches;
  return _getTouchClietX(targetTouches) || _getTouchClietX(changedTouches) || 0;
};

var _styleNode = function _styleNode(node) {
  node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};

var _setMoveStyle = function _setMoveStyle(node, dX) {
  _assign(node.style, {
    right: dX + 'px',
    opacity: 1 - 0.5 * Math.abs(dX) / 60
  });
};

var _setEndStyle = function _setEndStyle(node, isInitialStyle) {
  node.style.removeProperty(BORDER_LEFT);

  if (isInitialStyle) {
    _assign(node.style, {
      right: 0,
      opacity: 1
    });
  }
};

var _noopFn = function _noopFn() {};

var _setRefValue = function _setRefValue(ref, value) {
  return ref.current = value;
};

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var GestureSwipeX = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var style = _ref.style,
      children = _ref.children,
      _ref$setTimeStamp = _ref.setTimeStamp,
      setTimeStamp = _ref$setTimeStamp === void 0 ? _noopFn : _ref$setTimeStamp,
      onGesture = _ref.onGesture;

  var _refClientX = (0, _react.useRef)(0),
      _refIsGestureStart = (0, _react.useRef)(false),
      _refIsMoveStart = (0, _react.useRef)(false),
      _refGestureId = (0, _react.useRef)(),
      _gestureStartImpl = (0, _react.useCallback)(function (node) {
    _setRefValue(_refIsGestureStart, true);

    _styleNode(node);
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      _gestureStart = (0, _react.useCallback)(function (evt) {
    if (evt.target.tagName !== 'A') {
      var node = evt.currentTarget;

      if (!_getRefValue(_refIsGestureStart)) {
        _setRefValue(_refGestureId, setTimeout(function () {
          return _gestureStartImpl(node);
        }, LONG_TOUCH));
      } else {
        clearTimeout(_getRefValue(_refGestureId));

        _setRefValue(_refIsGestureStart, false);

        _setEndStyle(node, true);
      }
    }
  }, []) //_gestureStartImpl

  /*eslint-enable react-hooks/exhaustive-deps */
  ,
      _gestureMove = (0, _react.useCallback)(function (evt) {
    _preventDefault(evt);

    if (_getRefValue(_refIsGestureStart)) {
      var _clientX = _getClientX(evt);

      if (_clientX) {
        if (!_getRefValue(_refIsMoveStart)) {
          _setRefValue(_refClientX, _clientX);

          _setRefValue(_refIsMoveStart, true);
        } else {
          var _dX = _getRefValue(_refClientX) - _clientX;

          if (_dX < 0) {
            _setMoveStyle(evt.currentTarget, _dX);
          }
        }
      }
    }
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      _gestureEnd = (0, _react.useCallback)(function (evt) {
    if (_getRefValue(_refIsGestureStart)) {
      var _isInitialStyle = false;

      if (_getRefValue(_refIsMoveStart)) {
        _preventDefault(evt);

        setTimeStamp(evt.timeStamp);

        var _clientX = _getClientX(evt),
            _dX = _getRefValue(_refClientX) - _clientX;

        _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));

        _setRefValue(_refIsMoveStart, false);
      }

      _setRefValue(_refIsGestureStart, false);

      _setEndStyle(evt.currentTarget, _isInitialStyle);
    } else {
      clearTimeout(_getRefValue(_refGestureId));
    }
  }, []) // setTimeStamp, onGesture
  ,
      _handlers = (0, _react.useMemo)(function () {
    return HAS_TOUCH ? {
      onTouchStart: _gestureStart,
      onTouchMove: _gestureMove,
      onTouchEnd: _gestureEnd
    } : {
      onMouseDown: _gestureStart,
      onMouseMove: _gestureMove,
      onMouseUp: _gestureEnd
    };
  }, []); // _gestureStart, _gestureMove, _gestureEnd

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    ref: ref,
    role: "presentation",
    style: style
  }, _handlers, {
    children: children
  }));
});
var _default = GestureSwipeX;
exports["default"] = _default;
//# sourceMappingURL=GestureSwipeX.js.map