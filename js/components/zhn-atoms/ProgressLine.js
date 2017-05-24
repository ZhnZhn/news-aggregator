'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSITION = {
  WIDTH: 'width 500ms ease-out',
  OPACITY: 'opacity 400ms linear'
};

var ProgressLine = function (_Component) {
  (0, _inherits3.default)(ProgressLine, _Component);

  function ProgressLine() {
    (0, _classCallCheck3.default)(this, ProgressLine);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProgressLine.__proto__ || Object.getPrototypeOf(ProgressLine)).call(this));

    _this.wasCompleted = false;
    _this.idCompleted = null;
    _this.wasOpacied = false;
    _this.idOpacied = null;
    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ProgressLine, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.idCompleted) {
        clearTimeout(this.idCompleted);
      }
      if (this.idOpacied) {
        clearTimeout(this.idOpacied);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.wasCompleted) {
        this.idCompleted = setTimeout(function () {
          _this2.idCompleted = null;
          _this2.forceUpdate();
        }, 800);
      } else if (this.wasOpacied) {
        this.idOpacied = setTimeout(function () {
          _this2.idOpacied = null;
          _this2.forceUpdate();
        }, 800);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          height = _props.height;

      var _style = void 0;

      if (this.wasOpacied) {
        _style = {
          backgroundColor: color,
          width: 0,
          opacity: 1,
          height: height
        };
        this.wasOpacied = false;
      } else if (this.wasCompleted) {
        _style = {
          backgroundColor: color,
          width: '100%',
          opacity: 0,
          transition: TRANSITION.OPACITY,
          height: height
        };
        this.wasCompleted = false;
        this.wasOpacied = true;
      } else {
        var completed = this.props.completed;

        if (completed < 0) {
          completed = 0;
        } else if (completed >= 100) {
          completed = 100;
          this.wasCompleted = true;
        }

        _style = {
          backgroundColor: color,
          opacity: 1,
          width: completed + '%',
          transition: TRANSITION.WIDTH,
          height: height
        };
      }

      return _react2.default.createElement('div', { className: 'progress-line', style: _style });
    }
  }]);
  return ProgressLine;
}(_react.Component);

ProgressLine.defaultProps = {
  color: '#2F7ED8',
  height: 3
};
ProgressLine.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.string,
  height: _propTypes2.default.number
} : {};
exports.default = ProgressLine;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\ProgressLine.js.map