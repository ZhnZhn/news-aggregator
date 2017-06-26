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

var _class, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this._handleKeyDown = function (event) {
      if (event.keyCode === 13) {
        _this.props.onClick();
      } else if (event.keyCode === 27) {
        _this.props.onClose({ target: _this.divNode });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          caption = _props.caption,
          onClick = _props.onClick;

      return _react2.default.createElement(
        "div",
        {
          ref: function ref(n) {
            return _this2.divNode = n;
          },
          className: className,
          tabIndex: "0",
          onClick: onClick,
          onKeyDown: this._handleKeyDown
        },
        caption
      );
    }
  }, {
    key: "focus",
    value: function focus() {
      this.divNode.focus();
    }
  }]);
  return MenuItem;
}(_react.Component), _class.defaultProps = {
  onClick: function onClick() {},
  onClose: function onClose() {}
}, _temp2);
exports.default = MenuItem;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\MenuItem.js.map