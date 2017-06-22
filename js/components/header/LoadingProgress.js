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

var _ProgressLine = require('../zhn-atoms/ProgressLine');

var _ProgressLine2 = _interopRequireDefault(_ProgressLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLOR = {
  LOADING: '#2F7ED8',
  FAILED: 'rgb(237, 88, 19)'
};

var LoadingProgress = function (_Component) {
  (0, _inherits3.default)(LoadingProgress, _Component);

  function LoadingProgress(props) {
    (0, _classCallCheck3.default)(this, LoadingProgress);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadingProgress.__proto__ || Object.getPrototypeOf(LoadingProgress)).call(this));

    _this._onStore = function (actionType) {
      var ACTIONS = _this.props.ACTIONS;

      if (actionType === ACTIONS.LOADING) {
        _this.setState({ completed: 35, color: COLOR.LOADING });
      } else if (actionType === ACTIONS.LOADING_COMPLETE) {
        _this.setState({ completed: 100, color: COLOR.LOADING });
      } else if (actionType === ACTIONS.LOADING_FAILED) {
        _this.setState({ completed: 100, color: COLOR.FAILED });
      }
    };

    _this.state = {
      completed: 0,
      color: COLOR.LOADING
    };
    return _this;
  }

  (0, _createClass3.default)(LoadingProgress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextState, nextProps) {
      if (this.props !== nextProps) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          completed = _state.completed,
          color = _state.color;

      return _react2.default.createElement(_ProgressLine2.default, {
        height: 3,
        color: color,
        completed: completed
      });
    }
  }]);
  return LoadingProgress;
}(_react.Component);

exports.default = LoadingProgress;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\LoadingProgress.js.map