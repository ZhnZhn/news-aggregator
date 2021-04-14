"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _has = _interopRequireDefault(require("../has"));

var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));

var _crId = _interopRequireDefault(require("../../utils/crId"));

var _jsxRuntime = require("react/jsx-runtime");

var HAS_TOUCH = _has["default"].HAS_TOUCH;
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
  BT_CLEAR: {
    position: 'absolute',
    top: 25,
    right: 12
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

var TextField = /*#__PURE__*/function (_Component) {
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
      var value = event.target.value;

      _this.setState({
        value: value,
        isPassTest: _this.isOnTest ? _this.props.onTest(value) : true
      });
    };

    _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 46 || keyCode === 27) {
        _this.setState({
          value: ''
        });
      } else if (keyCode === 13 && _this.isOnEnter) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this._hClear = function () {
      _this.setState({
        value: ''
      });
    };

    var id = props.id,
        initValue = props.initValue,
        onTest = props.onTest,
        onEnter = props.onEnter;
    _this._id = id || (0, _crId["default"])();
    _this.isFocus = false;
    _this.isOnTest = _isFn(onTest);
    _this.isOnEnter = _isFn(onEnter);

    var _value = initValue || '';

    _this.state = {
      value: _value,
      isPassTest: _this.isOnTest ? onTest(_value) : true
    };
    return _this;
  }

  var _proto = TextField.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        maxLength = _this$props.maxLength,
        hasClear = _this$props.hasClear,
        autoCapitalize = _this$props.autoCapitalize,
        caption = _this$props.caption,
        _this$props$errorMsg = _this$props.errorMsg,
        errorMsg = _this$props$errorMsg === void 0 ? '' : _this$props$errorMsg,
        _this$state = this.state,
        value = _this$state.value,
        isPassTest = _this$state.isPassTest,
        _labelStyle = value || this.isFocus ? void 0 : S.LABEL_TO_INPUT,
        _labelErrStyle = isPassTest ? void 0 : S.LABEL_ON_ERROR,
        _lineStyle = isPassTest ? void 0 : S.LINE_ERROR;

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
          id: this._id,
          type: "text",
          className: CL.INPUT,
          value: value,
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: autoCapitalize,
          spellCheck: "false",
          translate: "false",
          maxLength: maxLength,
          onFocus: this._hFocusInput,
          onBlur: this._hBlurInput,
          onChange: this._hInputChange,
          onKeyDown: this._hKeyDown
        }), HAS_TOUCH && hasClear && value && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgX["default"], {
          color: "black",
          className: "svg-clear",
          style: S.BT_CLEAR,
          onClick: this._hClear
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.INPUT_LINE,
          style: _lineStyle
        }), _lineStyle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.INPUT_MSG_ERR,
          children: errorMsg
        })]
      })]
    });
  };

  _proto.getValue = function getValue() {
    return String(this.state.value).trim();
  };

  return TextField;
}(_react.Component);

TextField.defaultProps = {
  maxLength: "20",
  autoCapitalize: "off",
  hasClear: true
};
var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=TextField.js.map