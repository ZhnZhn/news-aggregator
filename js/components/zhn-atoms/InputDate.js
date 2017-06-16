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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '250px'
  },
  INPUT: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  HR: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '230px'
  },
  HR_VALID: {
    borderColor: '#1B75BB'
  },
  HR_NOT_VALID: {
    borderColor: '#F44336'
  },
  ERR_MSG: {
    color: '#F44336',
    paddingLeft: '10px',
    paddingBottom: '5px',
    fontSize: '12px',
    fontWeight: 'bold'
  }
};

var InputDate = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputDate, _Component);

  function InputDate(props) {
    (0, _classCallCheck3.default)(this, InputDate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputDate.__proto__ || Object.getPrototypeOf(InputDate)).call(this));

    _this.setValue = function (value) {
      if (!_this.props.onTest(value)) {
        _this.setState({
          value: value,
          isValid: false
        });
      } else {
        _this.setState({
          value: value,
          isValid: true,
          errorInput: null
        });
      }
    };

    _this._handleChangeValue = function (event) {
      _this.setValue(event.target.value);
    };

    _this._handleBlurValue = function () {
      if (!_this.props.onTest(_this.state.value)) {
        _this.setState({
          isValid: false,
          errorInput: _this.props.errorMsg
        });
      } else {
        _this.setState({
          isValid: true,
          errorInput: null
        });
      }
    };

    _this.state = {
      value: props.initValue,
      errorInput: null,
      isValid: true
    };
    return _this;
  }

  (0, _createClass3.default)(InputDate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid,
          errorInput = _state.errorInput,
          _hrStyle = isValid ? STYLE.HR_VALID : STYLE.HR_NOT_VALID;

      return _react2.default.createElement(
        'div',
        { style: STYLE.ROOT },
        _react2.default.createElement('input', {
          ref: function ref(c) {
            return _this2.inputComp = c;
          },
          type: 'text',
          name: 'date',
          autoComplete: 'new-date',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          spellCheck: false,
          style: STYLE.INPUT,
          placeholder: 'YYYY-MM-DD',
          value: value,
          onChange: this._handleChangeValue,
          onBlur: this._handleBlurValue
        }),
        _react2.default.createElement('hr', { style: (0, _extends3.default)({}, STYLE.HR, _hrStyle) }),
        _react2.default.createElement(
          'div',
          { style: STYLE.ERR_MSG },
          errorInput
        )
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      return this.state.isValid;
    }
  }, {
    key: 'focusInput',
    value: function focusInput() {
      this.inputComp.focus();
    }
  }]);
  return InputDate;
}(_react.Component), _class.defaultProps = {
  initValue: '',
  onTest: function onTest() {}
}, _temp);
InputDate.propTypes = process.env.NODE_ENV !== "production" ? {
  initValue: _propTypes2.default.string,
  errorMsg: _propTypes2.default.string,
  onTest: _propTypes2.default.func
} : {};
exports.default = InputDate;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\InputDate.js.map