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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootDiv: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '250px'
  },
  inputText: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

var _maskValue = function _maskValue() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var i = 0,
      str = '';
  for (i; i < len; i++) {
    str = str + 'X';
  }
  return str;
};

var InputSecret = function (_Component) {
  (0, _inherits3.default)(InputSecret, _Component);

  function InputSecret(props) {
    (0, _classCallCheck3.default)(this, InputSecret);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputSecret.__proto__ || Object.getPrototypeOf(InputSecret)).call(this));

    _this._handleChangeValue = function (event) {
      _this.secret = event.target.value;
      _this.setState({ value: _maskValue(_this.secret.length) });
    };

    _this.secret = '';
    _this.state = {
      value: ''
    };
    return _this;
  }

  (0, _createClass3.default)(InputSecret, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var onReg = this.props.onReg;

      if (typeof onReg === 'function') {
        onReg(this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          _props$maxLength = _props.maxLength,
          maxLength = _props$maxLength === undefined ? "32" : _props$maxLength,
          value = this.state.value;

      return _react2.default.createElement(
        'div',
        { style: styles.rootDiv },
        _react2.default.createElement('input', {
          name: 'secret',
          autoComplete: 'new-secret',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          spellCheck: false,
          type: 'password',
          style: styles.inputText,
          translate: false,
          placeholder: placeholder,
          maxLength: maxLength,
          defaultValue: value,
          onChange: this._handleChangeValue
        })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.secret.trim();
    }
  }]);
  return InputSecret;
}(_react.Component);

exports.default = InputSecret;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\InputSecret.js.map