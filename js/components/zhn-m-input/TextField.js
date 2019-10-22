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

var _crId = require('../../utils/crId');

var _crId2 = _interopRequireDefault(_crId);

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
    borderBottom: '2px solid #F44336'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var TextField = function (_Component) {
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
      var value = event.target.value;
      _this.setState({
        value: value,
        isPassTest: _this.isOnTest ? _this.props.onTest(value) : true
      });
    };

    _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 46 || keyCode === 27) {
        _this.setState({ value: '' });
      } else if (keyCode === 13 && _this.isOnEnter) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this._id = props.id || (0, _crId2.default)();
    _this.isFocus = false;
    _this.isOnTest = _isFn(props.onTest);
    _this.isOnEnter = _isFn(props.onEnter);
    var _value = props.initValue || '';
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
          _labelStyle = value || this.isFocus ? void 0 : S.LABEL_TO_INPUT,
          _labelErrStyle = isPassTest ? void 0 : S.LABEL_ON_ERROR,
          _lineStyle = isPassTest ? void 0 : S.LINE_ERROR;

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
            id: this._id,
            type: 'text',
            className: CL.INPUT,
            value: value,
            autoComplete: 'new-text',
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: false,
            translate: false,
            onFocus: this._hFocusInput,
            onBlur: this._hBlurInput,
            onChange: this._hInputChange,
            onKeyDown: this._hKeyDown
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