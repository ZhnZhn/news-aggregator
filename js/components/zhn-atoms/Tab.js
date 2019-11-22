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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  LI: {
    display: 'inline-block',
    color: '#9e9e9e',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    fontWeight: 'bold',
    borderBottom: '3px solid #9e9e9e',
    cursor: 'pointer'
  },
  SELECTED: {
    color: '#434348',
    borderBottom: '3px solid #2f7ed8'
  }
};

var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    (0, _classCallCheck3.default)(this, Tab);
    return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          isSelected = _props.isSelected,
          selectedStyle = _props.selectedStyle,
          onClick = _props.onClick;

      var _selectedStyle = isSelected ? (0, _extends3.default)({}, S.SELECTED, selectedStyle) : null;
      return _react2.default.createElement(
        'li',
        {
          style: (0, _extends3.default)({}, S.LI, _selectedStyle),
          onClick: onClick
        },
        _react2.default.createElement(
          'span',
          null,
          title
        )
      );
    }
  }]);
  return Tab;
}(_react.Component);

exports.default = Tab;
//# sourceMappingURL=Tab.js.map