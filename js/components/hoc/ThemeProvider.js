'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ThemeProvider, _Component);
  (0, _createClass3.default)(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { theme: this.theme };
    }
  }]);

  function ThemeProvider(props, context) {
    (0, _classCallCheck3.default)(this, ThemeProvider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call(this, props, context));

    _this.theme = props.theme;
    return _this;
  }

  (0, _createClass3.default)(ThemeProvider, [{
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);
  return ThemeProvider;
}(_react.Component), _class.childContextTypes = {
  theme: _propTypes2.default.object.isRequired
}, _temp);
ThemeProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  theme: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
} : {};
exports.default = ThemeProvider;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\hoc\ThemeProvider.js.map