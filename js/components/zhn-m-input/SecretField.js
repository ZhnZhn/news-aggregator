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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_SELECT = 'm-select';
var CL_LABEL = 'm-select__label';
var CL_DIV = 'm-textfield-input__div';
var CL_INPUT = 'm-textfield-input';

var S = {
  ROOT: {
    display: 'block',
    width: 280
  },
  LABEL_TO_INPUT: {
    transform: 'scale(1) translate(0px, 0px)'
  },
  LABEL_ON_ERROR: {
    color: '#f44336'
  },
  LINE: {
    position: 'absolute',
    bottom: 6,
    width: '100%',
    borderBottom: '2px solid black'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #f44336'
  },
  LINE_AFTER_ENTER: {
    borderBottom: '2px solid greenyellow'
  },
  MSG_ERROR: {
    position: 'absolute',
    bottom: -18,
    left: 4,
    color: '#f44336'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
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

var _crInitialState = function _crInitialState() {
  return {
    value: '',
    isPassTest: true
  };
};

var SecretField = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(SecretField, _Component);

  function SecretField(props) {
    (0, _classCallCheck3.default)(this, SecretField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SecretField.__proto__ || Object.getPrototypeOf(SecretField)).call(this, props));

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

    _this._clearWasEnter = function () {
      _this._wasEnter = false;
    };

    _this._handleKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        event.preventDefault();
        _this.props.onEnter(_this.secret);
        _this._wasEnter = true;
        _this.forceUpdate(_this._clearWasEnter);
      } else if (keyCode === 46) {
        _this.secret = '';
        _this.setState(_crInitialState());
      } else if (keyCode === 27) {
        _this.secret = '';
        var _isPassTest = _this.isOnTest ? _this.props.onTest(_this.secret) : true;
        _this.setState({ value: '', isPassTest: _isPassTest });
      }
    };

    _this.isFocus = false;
    _this.isOnTest = _isFn(props.onTest) ? true : false;
    _this.state = _crInitialState();
    return _this;
  }

  (0, _createClass3.default)(SecretField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootStyle = _props.rootStyle,
          caption = _props.caption,
          _props$errorMsg = _props.errorMsg,
          errorMsg = _props$errorMsg === undefined ? '' : _props$errorMsg,
          maxLength = _props.maxLength,
          _state = this.state,
          value = _state.value,
          isPassTest = _state.isPassTest,
          _labelStyle = value || this.isFocus ? void 0 : S.LABEL_TO_INPUT,
          _labelErrStyle = isPassTest ? void 0 : S.LABEL_ON_ERROR,
          _lineStyle = isPassTest ? this._wasEnter ? S.LINE_AFTER_ENTER : void 0 : S.LINE_ERROR;

      return _react2.default.createElement(
        'div',
        {
          className: CL_SELECT,
          style: rootStyle
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
          !isPassTest && _react2.default.createElement(
            'div',
            {
              style: S.MSG_ERROR },
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
}(_react.Component), _class.defaultProps = {
  onEnter: function onEnter() {}
}, _temp);
exports.default = SecretField;
//# sourceMappingURL=SecretField.js.map