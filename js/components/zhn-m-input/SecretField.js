"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

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

var _crId = function _crId(_ref) {
  var name = _ref.name;
  return name + '_sf';
};

var TextField =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(TextField, _Component);

  function TextField(props) {
    var _this;

    _this = _Component.call(this, props) || this;

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

    _this._clearAttrValue = function () {
      _this._clearId = setTimeout(function () {
        var _input = _this._input;

        if (_input && _input.hasAttribute('value')) {
          _input.removeAttribute('value');
        }
      });
    };

    _this._clearWasEnter = function () {
      _this._wasEnter = false;
    };

    _this._hKeyDown = function (event) {
      if (event.keyCode === 46) {
        _this.setState({
          value: ''
        });
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
    _this._id = _crId(props);
    _this.state = {
      value: ''
    };
    return _this;
  }

  var _proto = TextField.prototype;

  _proto.componentWillUnmound = function componentWillUnmound() {
    clearTimeout(this._clearId);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        rootStyle = _this$props.rootStyle,
        caption = _this$props.caption,
        name = _this$props.name,
        maxLength = _this$props.maxLength,
        _this$props$errorMsg = _this$props.errorMsg,
        errorMsg = _this$props$errorMsg === void 0 ? '' : _this$props$errorMsg,
        onTest = _this$props.onTest,
        value = this.state.value,
        isPassTest = onTest(value),
        _labelStyle = this._isValue() || this.isFocus ? null : S.LABEL_TO_INPUT,
        _labelErrStyle = isPassTest ? null : S.LABEL_ON_ERROR,
        _lineStyle = isPassTest ? this._wasEnter ? S.LINE_AFTER_ENTER : void 0 : S.LINE_ERROR;

    return _react["default"].createElement("div", {
      className: CL.SELECT,
      style: rootStyle
    }, _react["default"].createElement("label", {
      className: CL.LABEL,
      style: (0, _extends2["default"])({}, _labelStyle, {}, _labelErrStyle),
      htmlFor: this._id
    }, caption), _react["default"].createElement("div", {
      className: CL.DIV
    }, _react["default"].createElement("input", {
      hidden: true,
      autoComplete: "username",
      value: name,
      readOnly: true
    }), _react["default"].createElement("input", {
      ref: this._refInput,
      id: this._id,
      type: "password",
      autoComplete: "current-password",
      className: CL.INPUT,
      maxLength: maxLength,
      value: value,
      onChange: this._hInputChange,
      onKeyDown: this._hKeyDown,
      onFocus: this._hFocusInput,
      onBlur: this._hBlurInput
    }), _react["default"].createElement("div", {
      className: CL.INPUT_LINE,
      style: _lineStyle
    }), !isPassTest && _react["default"].createElement("div", {
      className: CL.INPUT_MSG_ERR
    }, errorMsg)));
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this._clearAttrValue();
  };

  _proto.getValue = function getValue() {
    return this._input && this._input.value;
  };

  return TextField;
}(_react.Component);

TextField.defaultProps = {
  name: 'pwd',
  maxLength: "32",
  onTest: function onTest() {
    return true;
  },
  onEnter: function onEnter() {}
};
var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=SecretField.js.map