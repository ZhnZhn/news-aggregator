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
  BADGE: {
    display: 'inline-block',
    color: 'grey',
    //backgroundColor: 'rgb(63, 81, 181)',
    backgroundColor: '#3f5178',
    float: 'right',
    width: '32px',
    paddingRight: '5px',
    paddingLeft: '5px',
    borderRadius: '30%',
    textAlign: 'center'
  },
  CLOSE: {
    color: 'black'
  }
};

var MenuItemBadge = function (_Component) {
  (0, _inherits3.default)(MenuItemBadge, _Component);

  function MenuItemBadge() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItemBadge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItemBadge.__proto__ || Object.getPrototypeOf(MenuItemBadge)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          itemConf = _this$props.itemConf,
          onClick = _this$props.onClick;

      onClick(itemConf);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuItemBadge, [{
    key: 'render',
    value: function render() {
      var _props$itemBadge = this.props.itemBadge,
          itemBadge = _props$itemBadge === undefined ? {} : _props$itemBadge,
          isOpen = itemBadge.isOpen,
          _badgeStyle = isOpen ? S.BADGE : (0, _extends3.default)({}, S.BADGE, S.CLOSE);

      return _react2.default.createElement(
        'span',
        { style: _badgeStyle, onClick: this._handleClick },
        'V'
      );
    }
  }]);
  return MenuItemBadge;
}(_react.Component);

exports.default = MenuItemBadge;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-moleculs\MenuItemBadge.js.map