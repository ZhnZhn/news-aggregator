"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

//import PropTypes from 'prop-types'
var TRANSITION = {
  WIDTH: 'width 500ms ease-out',
  OPACITY: 'opacity 400ms linear'
};

var ProgressLine = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ProgressLine, _Component);

  function ProgressLine() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.wasCompleted = false;
    _this.idCompleted = null;
    _this.wasOpacied = false;
    _this.idOpacied = null;
    _this.state = {};
    return _this;
  }

  var _proto = ProgressLine.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.idCompleted) {
      clearTimeout(this.idCompleted);
    }

    if (this.idOpacied) {
      clearTimeout(this.idOpacied);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
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
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color;

    var _style;

    if (this.wasOpacied) {
      _style = {
        backgroundColor: color,
        width: 0,
        opacity: 1
      };
      this.wasOpacied = false;
    } else if (this.wasCompleted) {
      _style = {
        backgroundColor: color,
        width: '100%',
        opacity: 0,
        transition: TRANSITION.OPACITY
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
        transition: TRANSITION.WIDTH
      };
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: className,
      style: _style
    });
  };

  return ProgressLine;
}(_react.Component);

ProgressLine.defaultProps = {
  className: 'progress-line',
  color: '#2f7ed8'
};
var _default = ProgressLine;
exports["default"] = _default;
//# sourceMappingURL=ProgressLine.js.map