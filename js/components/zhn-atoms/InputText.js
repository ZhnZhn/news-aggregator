'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var S = {
  INPUT_TEXT: {
    display: 'inline',
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '26px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#E1E1CB',
    marginLeft: '5px',
    marginRight: '5px'
  }
};

var InputText = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputText, _Component);

  function InputText(props) {
    (0, _classCallCheck3.default)(this, InputText);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(this));

    _this._handleInputChange = function (event) {
      _this.setState({ value: event.target.value });
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 27) {
        _this.setState({ value: '' });
      } else if (event.keyCode === 13 && _this.isOnEnter) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this.isOnEnter = typeof props.onEnter === "function" ? true : false;
    _this.state = {
      value: props.initValue ? props.initValue : ''
    };
    return _this;
  }

  (0, _createClass3.default)(InputText, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var onReg = this.props.onReg;

      if (typeof onReg === 'function') {
        onReg(this);
      }
    }
    /*
    componentWillReceiveProps(nextProps){
      if (nextProps !== this.props){
        this.setState({ value : nextProps.initValue });
      }
    }
    */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          rest = (0, _objectWithoutProperties3.default)(_props, ['style']),
          value = this.state.value;

      return _react2.default.createElement('input', (0, _extends3.default)({
        name: 'text',
        autoComplete: 'new-text',
        autoCorrect: 'off',
        autoCapitalize: 'off',
        spellCheck: false,
        type: 'text',
        style: Object.assign({}, S.INPUT_TEXT, style),
        value: value,
        translate: false,
        onChange: this._handleInputChange,
        onKeyDown: this._handleKeyDown
      }, rest));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value.trim();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);
  return InputText;
}(_react.Component), _class.defaultProps = {
  initValue: ''
}, _temp);
InputText.propTypes = process.env.NODE_ENV !== "production" ? {
  initValue: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onEnter: _propTypes2.default.func
} : {};
exports.default = InputText;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\InputText.js.map