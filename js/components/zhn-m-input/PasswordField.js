"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-textfield-input__div',
  INPUT: 'm-textfield-input',
  BT_CLEAR: 'm-textfield__bt-clear',
  INPUT_LINE: 'm-input__line',
  INPUT_MSG_ERR: 'm-input__msg-err'
};
var S = {
  LABEL_TO_INPUT: {
    transform: 'scale(1) translate(0px, -6px)'
  },
  BT_CLEAR: {
    position: 'absolute',
    top: 28,
    right: 12,
    color: '#2f7ed8',
    fontWeight: 'bold'
  },
  LABEL_ON_ERROR: {
    color: '#f44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #f44336'
  },
  LINE_AFTER_ENTER: {
    borderBottom: '2px solid #80c040'
  }
};

var _crId = function _crId(_ref) {
  var name = _ref.name;
  return name + '_' + Math.random().toString(36).substr(2, 6);
};

var _fnNoop = function _fnNoop() {};

var _fnTrue = function _fnTrue() {
  return true;
};

var PasswordField = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(PasswordField, _Component);

  function PasswordField(props) {
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

    _this._hClear = function () {
      _this.setState({
        value: ''
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
        event.stopPropagation();
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

  var _proto = PasswordField.prototype;

  _proto.componentWillUnmound = function componentWillUnmound() {
    clearTimeout(this._clearId);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        caption = _this$props.caption,
        name = _this$props.name,
        maxLength = _this$props.maxLength,
        errorMsg = _this$props.errorMsg,
        onTest = _this$props.onTest,
        value = this.state.value,
        _isPassTest = onTest(value),
        _labelStyle = this._isValue() || this.isFocus ? void 0 : S.LABEL_TO_INPUT,
        _labelErrStyle = _isPassTest ? void 0 : S.LABEL_ON_ERROR,
        _lineStyle = _isPassTest ? this._wasEnter ? S.LINE_AFTER_ENTER : void 0 : S.LINE_ERROR;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL.SELECT,
      style: style,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: CL.LABEL,
        style: (0, _extends2["default"])({}, _labelStyle, _labelErrStyle),
        htmlFor: this._id,
        children: caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: CL.DIV,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          hidden: true,
          autoComplete: "username",
          value: name,
          readOnly: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
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
        }), _has["default"].HAS_TOUCH && value && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: CL.BT_CLEAR,
          onClick: this._hClear,
          children: "x"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.INPUT_LINE,
          style: _lineStyle
        }), !_isPassTest && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.INPUT_MSG_ERR,
          children: errorMsg
        })]
      })]
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this._clearAttrValue();
  };

  _proto.setWasEnter = function setWasEnter() {
    this._wasEnter = true;
    this.forceUpdate(this._clearWasEnter);
  };

  _proto.getValue = function getValue() {
    return this._input && this._input.value;
  };

  _proto.clear = function clear() {
    this.setState({
      value: ''
    }, this.setWasEnter);
  };

  return PasswordField;
}(_react.Component);

PasswordField.defaultProps = {
  name: 'pwd',
  maxLength: "32",
  errorMsg: '',
  onTest: _fnTrue,
  onEnter: _fnNoop
};
var _default = PasswordField;
exports["default"] = _default;
//# sourceMappingURL=PasswordField.js.map