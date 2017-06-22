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

var CL_SELECT = 'm-select';
var CL_LABEL = 'm-select__label';
var CL_DIV = 'm-textfield-input__div';
var CL_INPUT = 'm-textfield-input';

var S = {
  ROOT: {
    width: '280px',
    display: 'block'
  },
  LABEL_TO_INPUT: {
    transform: 'scale(1) translate(0px, 0px)'
  },
  LABEL_ON_ERROR: {
    color: '#F44336'
  },
  LINE: {
    position: 'absolute',
    bottom: '6px',
    width: '100%',
    borderBottom: '2px solid black'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
  },
  MSG_ERROR: {
    position: 'absolute',
    bottom: '-18px',
    left: '4px',
    color: '#F44336'
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

var SecretField = function (_Component) {
  (0, _inherits3.default)(SecretField, _Component);

  function SecretField(props) {
    (0, _classCallCheck3.default)(this, SecretField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SecretField.__proto__ || Object.getPrototypeOf(SecretField)).call(this));

    _this._handleFocusInput = function () {
      _this.isFocus = true;
      _this.forceUpdate();
    };

    _this._handleBlurInput = function () {
      _this.isFocus = false;
      _this.forceUpdate();
    };

    _this._handleChangeInput = function (event) {
      _this.secret = event.target.value;
      var _value = _maskValue(_this.secret.length);
      if (_this.isOnTest) {
        var _isPassTest = _this.props.onTest(_value);
        _this.setState({
          value: _value,
          isPassTest: _isPassTest
        });
      } else {
        _this.setState({ value: _value });
      }
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 27) {
        _this.secret = '';
        var _isPassTest = _this.isOnTest ? _this.props.onTest(_this.secret) : true;
        _this.setState({ value: '', isPassTest: _isPassTest });
      }
    };

    _this.isFocus = false;
    _this.isOnTest = typeof props.onTest === 'function' ? true : false;
    _this.state = {
      value: '',
      isPassTest: true
    };
    return _this;
  }

  (0, _createClass3.default)(SecretField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          _props$errorMsg = _props.errorMsg,
          errorMsg = _props$errorMsg === undefined ? '' : _props$errorMsg,
          maxLength = _props.maxLength,
          _state = this.state,
          value = _state.value,
          isPassTest = _state.isPassTest,
          _labelStyle = value || this.isFocus ? undefined : S.LABEL_TO_INPUT,
          _labelErrStyle = isPassTest ? undefined : S.LABEL_ON_ERROR,
          _lineStyle = isPassTest ? undefined : S.LINE_ERROR;

      console.log(value);
      return _react2.default.createElement(
        'div',
        {
          className: CL_SELECT,
          style: S.ROOT
        },
        _react2.default.createElement(
          'label',
          {
            className: CL_LABEL,
            style: (0, _extends3.default)({}, _labelStyle, _labelErrStyle)
          },
          caption
        ),
        _react2.default.createElement(
          'div',
          { className: CL_DIV },
          _react2.default.createElement('input', {
            className: CL_INPUT,
            name: 'secret',
            autoComplete: 'new-secret',
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: false,
            type: 'password',
            translate: false
            //placeholder={placeholder}
            , maxLength: maxLength,
            value: value,
            defaultValue: value,

            onChange: this._handleChangeInput,
            onFocus: this._handleFocusInput,
            onBlur: this._handleBlurInput,
            onKeyDown: this._handleKeyDown
          }),
          _react2.default.createElement('div', { style: (0, _extends3.default)({}, S.LINE, _lineStyle) }),
          _lineStyle && _react2.default.createElement(
            'div',
            { style: S.MSG_ERROR },
            errorMsg
          )
        )
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.secret;
    }
  }]);
  return SecretField;
}(_react.Component);

exports.default = SecretField;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-m-input\SecretField.js.map