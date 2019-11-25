'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('../has');

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "svg-resize";

var HAS_TOUCH = _has2.default.HAS_TOUCH;


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

var SvgHrzResize = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(SvgHrzResize, _Component);

  function SvgHrzResize(props) {
    (0, _classCallCheck3.default)(this, SvgHrzResize);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SvgHrzResize.__proto__ || Object.getPrototypeOf(SvgHrzResize)).call(this, props));

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
      onTouchStart: _this._hStartResize.bind(_this, _this._resizeLeft),
      onTouchEnd: _this._hStopResize.bind(_this, true)
    } : {
      onMouseDown: _this._hStartResize.bind(_this, _this._resizeLeft),
      onMouseUp: _this._hStopResize.bind(_this, true)
    };

    _this._rightBtHandlers = HAS_TOUCH ? {
      onTouchStart: _this._hStartResize.bind(_this, _this._resizeRight),
      onTouchEnd: _this._hStopResize.bind(_this, true)
    } : {
      onMouseDown: _this._hStartResize.bind(_this, _this._resizeRight),
      onMouseUp: _this._hStopResize.bind(_this, true)
    };

    _this.state = {};
    return _this;
  }
  /*
  static propTypes = {
    minWidth: PropTypes.number,
    maxWidth: PropTypes.number,
    getDomNode: PropTypes.func,
    onResizeAfter: PropTypes.func
  }
  */


  (0, _createClass3.default)(SvgHrzResize, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: S.ROOT_DIV },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({
            className: CL,
            style: S.BT_DIV,
            title: 'Resize container horizontal left'
          }, this._leftBtHandlers),
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 12 12', width: '100%', height: '100%',
              preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            _react2.default.createElement('path', {
              d: 'M 1,6 L 11,6',
              strokeWidth: '2',
              strokeLinecap: 'round'
            }),
            _react2.default.createElement('path', {
              d: 'M 6,2 L 1,6 6,10',
              strokeWidth: '2',
              strokeLinecap: 'round',
              fill: 'none'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({
            className: CL,
            style: S.BT_DIV,
            title: 'Resize container horizontal right'
          }, this._rightBtHandlers),
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 12 12', width: '100%', height: '100%',
              preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            _react2.default.createElement('path', {
              d: 'M 1,6 L 11,6',
              strokeWidth: '2',
              strokeLinecap: 'round'
            }),
            _react2.default.createElement('path', {
              d: 'M 6,2 L 11,6 6,10',
              strokeWidth: '2',
              strokeLinecap: 'round',
              fill: 'none'
            })
          )
        )
      );
    }
  }]);
  return SvgHrzResize;
}(_react.Component), _class.defaultProps = {
  getDomNode: function getDomNode() {}
}, _temp);
exports.default = SvgHrzResize;
//# sourceMappingURL=SvgHrzResize.js.map