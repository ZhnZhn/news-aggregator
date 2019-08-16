"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var ComponentHrzContainer = function (_Component) {
  (0, _inherits3.default)(ComponentHrzContainer, _Component);

  function ComponentHrzContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ComponentHrzContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ComponentHrzContainer.__proto__ || Object.getPrototypeOf(ComponentHrzContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containers: []
    }, _this._onStore = function (actionType, option) {
      if (actionType === _this.props.addAction && option.Comp) {
        _this.setState(function (prevState) {
          prevState.containers.unshift(option.Comp);
          return prevState;
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    addAction: PropTypes.string
  }
  */


  (0, _createClass3.default)(ComponentHrzContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.props.store;

      this.unsubscribe = store.listen(this._onStore);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "_renderContainers",
    value: function _renderContainers(containers) {
      return containers.map(function (container) {
        return _react2.default.cloneElement(container);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var containers = this.state.containers;

      return _react2.default.createElement(
        "div",
        { className: "hrz-container" },
        this._renderContainers(containers)
      );
    }
  }]);
  return ComponentHrzContainer;
}(_react.Component);

exports.default = ComponentHrzContainer;
//# sourceMappingURL=ComponentHrzContainer.js.map