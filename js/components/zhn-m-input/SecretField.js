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
    color: '#f44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #f44336'
  },
  LINE_AFTER_ENTER: {
    borderBottom: '2px solid greenyellow'
  }
};

var TextField = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField(props) {
    (0, _classCallCheck3.default)(this, TextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this._hFocusInput = function () {
      _this.isFocus = true;
      _this.forceUpdate();
    };

    _this._hBlurInput = function () {
      _this.isFocus = false;
      _this.forceUpdate();
    };

    _this._hInputChange = function (event) {
      _this.setState({
        value: event.target.value.trim()
      });
    };

    _this._clearWasEnter = function () {
      _this._wasEnter = false;
    };

    _this._hKeyDown = function (event) {
      if (event.keyCode === 46) {
        _this.setState({ value: '' });
      } else if (event.keyCode === 13) {
        event.preventDefault();
        _this.props.onEnter(event.target.value);
        _this._wasEnter = true;
        _this.forceUpdate(_this._clearWasEnter);
      }
    };

    _this._isValue = function () {
      return _this._input ? !!_this._input.value : false;
    };

    _this._refInput = function (node) {
      return _this._input = node;
    };

    _this._wasEnter = false;
    _this.isFocus = false;
    var name = props.name;

    _this._id = name + '_sf';
    _this.state = {
      value: ''
    };
    return _this;
  }

  (0, _createClass3.default)(TextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootStyle = _props.rootStyle,
          caption = _props.caption,
          name = _props.name,
          maxLength = _props.maxLength,
          _props$errorMsg = _props.errorMsg,
          errorMsg = _props$errorMsg === undefined ? '' : _props$errorMsg,
          onTest = _props.onTest,
          value = this.state.value,
          isPassTest = onTest(value),
          _labelStyle = this._isValue() || this.isFocus ? null : S.LABEL_TO_INPUT,
          _labelErrStyle = isPassTest ? null : S.LABEL_ON_ERROR,
          _lineStyle = isPassTest ? this._wasEnter ? S.LINE_AFTER_ENTER : void 0 : S.LINE_ERROR;

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
            style: (0, _extends3.default)({}, _labelStyle, _labelErrStyle),
            htmlFor: this._id
          },
          caption
        ),
        _react2.default.createElement(
          'div',
          { className: CL.DIV },
          _react2.default.createElement('input', {
            hidden: true,
            autoComplete: 'username',
            value: name,
            readOnly: true
          }),
          _react2.default.createElement('input', {
            ref: this._refInput,
            id: this._id,
            type: 'password',
            autoComplete: 'current-password',
            className: CL.INPUT,
            maxLength: maxLength,
            value: value,
            onChange: this._hInputChange,
            onKeyDown: this._hKeyDown,
            onFocus: this._hFocusInput,
            onBlur: this._hBlurInput
          }),
          _react2.default.createElement('div', { className: CL.INPUT_LINE, style: _lineStyle }),
          !isPassTest && _react2.default.createElement(
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
      return this._input && this._input.value;
    }
  }]);
  return TextField;
}(_react.Component), _class.defaultProps = {
  name: 'pwd',
  maxLength: "32",
  onTest: function onTest() {
    return true;
  },
  onEnter: function onEnter() {}
}, _temp);
exports.default = TextField;
//# sourceMappingURL=SecretField.js.map