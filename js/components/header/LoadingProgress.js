"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));

var COLOR = {
  LOADING: '#2f7ed8',
  FAILED: '#ed5813'
};

var LoadingProgress = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(LoadingProgress, _Component);

  function LoadingProgress() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      completed: 0,
      color: COLOR.LOADING
    };

    _this._onStore = function (actionType) {
      var ACTIONS = _this.props.ACTIONS;

      if (actionType === ACTIONS.LOADING) {
        _this.setState({
          completed: 35,
          color: COLOR.LOADING
        });
      } else if (actionType === ACTIONS.LOADING_COMPLETE) {
        _this.setState({
          completed: 100,
          color: COLOR.LOADING
        });
      } else if (actionType === ACTIONS.LOADING_FAILED) {
        _this.setState({
          completed: 100,
          color: COLOR.FAILED
        });
      }
    };

    return _this;
  }

  var _proto = LoadingProgress.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$state = this.state,
        completed = _this$state.completed,
        color = _this$state.color;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressLine["default"], {
      color: color,
      completed: completed
    });
  };

  return LoadingProgress;
}(_react.Component);

var _default = LoadingProgress;
exports["default"] = _default;
//# sourceMappingURL=LoadingProgress.js.map