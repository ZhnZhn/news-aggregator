"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

//import PropTypes from "prop-types";
var CL = "svg-resize";
var HAS_TOUCH = _has["default"].HAS_TOUCH;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _isNaN = Number.isNaN || isNaN;

var S = {
  ROOT_DIV: {
    display: 'inline-block',
    lineHeight: '24px'
  },
  BT_DIV: {
    marginLeft: 10
  }
};

var SvgHrzResize = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(SvgHrzResize, _Component);

  /*
  static propTypes = {
    minWidth: PropTypes.number,
    maxWidth: PropTypes.number,
    getDomNode: PropTypes.func,
    onResizeAfter: PropTypes.func
  }
  */
  function SvgHrzResize(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._initDomNode = function () {
      if (!_this.domNode) {
        var _this$props = _this.props,
            minWidth = _this$props.minWidth,
            maxWidth = _this$props.maxWidth,
            getDomNode = _this$props.getDomNode;
        _this.domNode = getDomNode();
        _this.initWidth = _this.domNode.getBoundingClientRect().width;
        _this.currentWidth = _this.initWidth;
        _this.minDelta = minWidth - _this.initWidth;
        _this.maxDelta = maxWidth - _this.initWidth;
      }
    };

    _this._increaseStepValue = function () {
      _this.countStep += 1;

      if (_this.countStep > 30) {
        _this.step = 3;
      } else if (_this.countStep > 15) {
        _this.step = 2;
      }

      if (_this.maxDelta - _this.delta < 20 || _this.delta - _this.minDelta < 20) {
        _this.step = 1;
      }
    };

    _this._resizeLeft = function () {
      if (_this.delta > _this.minDelta) {
        _this.delta -= _this.step;
        _this.currentWidth = _this.initWidth + _this.delta;
        _this.domNode.style.width = _this.currentWidth + 'px';

        _this._increaseStepValue();
      }
    };

    _this._resizeRight = function () {
      if (_this.delta < _this.maxDelta) {
        _this.delta += _this.step;
        _this.currentWidth = _this.initWidth + _this.delta;
        _this.domNode.style.width = _this.currentWidth + 'px';

        _this._increaseStepValue();
      }
    };

    _this._updateDelta = function () {
      var w = parseInt(_this.domNode.style.width);

      if (!_isNaN(w)) {
        _this.delta = w - _this.initWidth;
      }
    };

    _this._hStartResize = function (fnResize) {
      //evt.preventDefault()
      _this._initDomNode();

      _this._updateDelta();

      if (_this.id !== null) {
        _this._hStopResize(false);
      }

      _this.id = setInterval(fnResize, 5);
    };

    _this._hStopResize = function (isOnResizeAfter, evt) {
      if (evt) {
        evt.preventDefault();
      }

      clearInterval(_this.id);

      _this._initDomNode();

      _this.id = null;
      _this.step = 1;
      _this.countStep = 0;

      if (isOnResizeAfter && _this.isResizeAfter) {
        _this.props.onResizeAfter(_this.currentWidth);
      }
    };

    _this.id = null;
    _this.domNode = null;
    _this.delta = 0;
    _this.step = 1;
    _this.countStep = 0;
    _this.isResizeAfter = _isFn(props.onResizeAfter);
    _this._leftBtHandlers = HAS_TOUCH ? {
      onTouchStart: _this._hStartResize.bind((0, _assertThisInitialized2["default"])(_this), _this._resizeLeft),
      onTouchEnd: _this._hStopResize.bind((0, _assertThisInitialized2["default"])(_this), true)
    } : {
      onMouseDown: _this._hStartResize.bind((0, _assertThisInitialized2["default"])(_this), _this._resizeLeft),
      onMouseUp: _this._hStopResize.bind((0, _assertThisInitialized2["default"])(_this), true)
    };
    _this._rightBtHandlers = HAS_TOUCH ? {
      onTouchStart: _this._hStartResize.bind((0, _assertThisInitialized2["default"])(_this), _this._resizeRight),
      onTouchEnd: _this._hStopResize.bind((0, _assertThisInitialized2["default"])(_this), true)
    } : {
      onMouseDown: _this._hStartResize.bind((0, _assertThisInitialized2["default"])(_this), _this._resizeRight),
      onMouseUp: _this._hStopResize.bind((0, _assertThisInitialized2["default"])(_this), true)
    };
    _this.state = {};
    return _this;
  }

  var _proto = SvgHrzResize.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.ROOT_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
        className: CL,
        style: S.BT_DIV,
        title: "Resize container horizontal left"
      }, this._leftBtHandlers, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
          viewBox: "0 0 12 12",
          width: "100%",
          height: "100%",
          preserveAspectRatio: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M 1,6 L 11,6",
            strokeWidth: "2",
            strokeLinecap: "round"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M 6,2 L 1,6 6,10",
            strokeWidth: "2",
            strokeLinecap: "round",
            fill: "none"
          })]
        })
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
        className: CL,
        style: S.BT_DIV,
        title: "Resize container horizontal right"
      }, this._rightBtHandlers, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
          viewBox: "0 0 12 12",
          width: "100%",
          height: "100%",
          preserveAspectRatio: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M 1,6 L 11,6",
            strokeWidth: "2",
            strokeLinecap: "round"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M 6,2 L 11,6 6,10",
            strokeWidth: "2",
            strokeLinecap: "round",
            fill: "none"
          })]
        })
      }))]
    });
  };

  return SvgHrzResize;
}(_react.Component);

SvgHrzResize.defaultProps = {
  getDomNode: function getDomNode() {}
};
var _default = SvgHrzResize;
exports["default"] = _default;
//# sourceMappingURL=SvgHrzResize.js.map