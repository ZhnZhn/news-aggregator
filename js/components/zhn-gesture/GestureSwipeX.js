"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var _jsxRuntime = require("react/jsx-runtime");

var BORDER_LEFT = 'border-left';
var DRAG_START_BORDER_LEFT = "4px solid #d64336";
var LONG_TOUCH = 1000;
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

var GestureSwipeX = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(GestureSwipeX, _Component);

  /*
  static propTypes = {
    style: PropTypes.object,
    setTimeStamp: PropTypes.func,
    onGesture: PropTypes.func
  }
  */
  //_clientX = 0
  //_isGestureStart = false
  //_isMoveStart = false
  function GestureSwipeX(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._gestureStartImpl = function (node) {
      _this._isGestureStart = true;

      _styleNode(node);
    };

    _this._gestureStart = function (ev) {
      var node = ev.currentTarget;

      if (!_this._isGestureStart) {
        _this._gestureId = setTimeout(function () {
          return _this._gestureStartImpl(node);
        }, LONG_TOUCH);
      } else {
        clearTimeout(_this._gestureId);
        _this._isGestureStart = false;

        _setEndStyle(node, true);
      }
    };

    _this._gestureMove = function (ev) {
      ev.preventDefault();

      if (_this._isGestureStart) {
        var _clientX = _getClientX(ev);

        if (_clientX) {
          if (!_this._isMoveStart) {
            _this._clientX = _clientX;
            _this._isMoveStart = true;
          } else {
            var _dX = _this._clientX - _clientX;

            if (_dX < 0) {
              _setMoveStyle(ev.currentTarget, _dX);
            }
          }
        }
      }
    };

    _this._gestureEnd = function (ev) {
      var _this$props = _this.props,
          setTimeStamp = _this$props.setTimeStamp,
          onGesture = _this$props.onGesture;

      if (_this._isGestureStart) {
        var _isInitialStyle = false;

        if (_this._isMoveStart) {
          ev.preventDefault();
          setTimeStamp(ev.timeStamp);

          var _clientX = _getClientX(ev),
              _dX = _this._clientX - _clientX;

          _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
          _this._isMoveStart = false;
        }

        _this._isGestureStart = false;

        _setEndStyle(ev.currentTarget, _isInitialStyle);
      } else {
        clearTimeout(_this._gestureId);
      }
    };

    _this._handlers = _has["default"].HAS_TOUCH ? {
      onTouchStart: _this._gestureStart,
      onTouchMove: _this._gestureMove,
      onTouchEnd: _this._gestureEnd
    } : {
      onMouseDown: _this._gestureStart,
      onMouseMove: _this._gestureMove,
      onMouseUp: _this._gestureEnd
    };
    return _this;
  }

  var _proto = GestureSwipeX.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        divRef = _this$props2.divRef,
        style = _this$props2.style,
        children = _this$props2.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
      ref: divRef,
      role: "presentation",
      style: style
    }, this._handlers, {
      children: children
    }));
  };

  return GestureSwipeX;
}(_react.Component);

GestureSwipeX.defaultProps = {
  setTimeStamp: _noopFn
};
var _default = GestureSwipeX;
exports["default"] = _default;
//# sourceMappingURL=GestureSwipeX.js.map