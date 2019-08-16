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

var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-textfield-input__div',
  INPUT: 'm-textfield-input',
  INPUT_LINE: 'm-input__line',
  INPUT_MSG_ERR: 'm-input__msg-err'
};

var S = {
  LABEL_TO_INPUT: {
    transform: 'scale(1) translate(0px, -6px)'
  },
  LABEL_ON_ERROR: {
    color: '#F44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
  }
};

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField(props) {
    (0, _classCallCheck3.default)(this, TextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this));

    _this._handleFocusInput = function () {
      _this.isFocus = true;
      _this.forceUpdate();
    };

    _this._handleBlurInput = function () {
      _this.isFocus = false;
      _this.forceUpdate();
    };

    _this._handleInputChange = function (event) {
      if (_this.isOnTest) {
        var _isPassTest = _this.props.onTest(event.target.value);
        _this.setState({
          value: event.target.value,
          isPassTest: _isPassTest
        });
      } else {
        _this.setState({ value: event.target.value });
      }
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 27) {
        _this.setState({ value: '' });
      } else if (event.keyCode === 13 && _this.isOnEnter) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this.isFocus = false;
    _this.isOnTest = typeof props.onTest === 'function' ? true : false;
    _this.isOnEnter = typeof props.onEnter === 'function' ? true : false;
    var _value = props.initValue ? props.initValue : '';
    _this.state = {
      value: _value,
      isPassTest: _this.isOnTest ? props.onTest(_value) : true
    };
    return _this;
  }

  (0, _createClass3.default)(TextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootStyle = _props.rootStyle,
          caption = _props.caption,
          _props$errorMsg = _props.errorMsg,
          errorMsg = _props$errorMsg === undefined ? '' : _props$errorMsg,
          _state = this.state,
          value = _state.value,
          isPassTest = _state.isPassTest,
          _labelStyle = value || this.isFocus ? undefined : S.LABEL_TO_INPUT,
          _labelErrStyle = isPassTest ? undefined : S.LABEL_ON_ERROR,
          _lineStyle = isPassTest ? undefined : S.LINE_ERROR;

      return _react2.default.createElement(
        'div',
        {
          className: CL.SELECT,
          style: rootStyle
        },
        _react2.default.createElement(
          'label',
          {
            className: CL.LABEL,
            style: (0, _extends3.default)({}, _labelStyle, _labelErrStyle)
          },
          caption
        ),
        _react2.default.createElement(
          'div',
          { className: CL.DIV },
          _react2.default.createElement('input', {
            type: 'text',
            className: CL.INPUT,
            value: value,
            autoComplete: 'new-text',
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: false,
            translate: false,
            onFocus: this._handleFocusInput,
            onBlur: this._handleBlurInput,
            onChange: this._handleInputChange,
            onKeyDown: this._handleKeyDown
          }),
          _react2.default.createElement('div', { className: CL.INPUT_LINE, style: _lineStyle }),
          _lineStyle && _react2.default.createElement(
            'div',
            { className: CL.INPUT_MSG_ERR },
            errorMsg
          )
        )
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return String(this.state.value).trim();
    }
  }]);
  return TextField;
}(_react.Component);

exports.default = TextField;
//# sourceMappingURL=TextField.js.map