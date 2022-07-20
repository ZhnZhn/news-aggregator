"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));

var _useProperty3 = _interopRequireDefault(require("../hooks/useProperty"));

var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));

var _has = _interopRequireDefault(require("../has"));

var _jsxRuntime = require("react/jsx-runtime");

var HAS_TOUCH = _has["default"].HAS_TOUCH,
    CL_SELECT = 'm-select',
    CL_LABEL = CL_SELECT + "__label",
    M_TEXTFIELD = 'm-textfield',
    CL_DIV = M_TEXTFIELD + "-input__div",
    CL_INPUT = M_TEXTFIELD + "-input",
    CL_BT_CLEAR = M_TEXTFIELD + "__bt-clear",
    M_INPUT = 'm-input',
    CL_INPUT_LINE = M_INPUT + "__line",
    CL_INPUT_MSG_ERR = M_INPUT + "__msg-err",
    S_LABEL_TO_INPUT = {
  transform: 'scale(1) translate(0px, -6px)'
},
    S_LABEL_ON_ERROR = {
  color: '#f44336'
},
    S_LINE_ERROR = {
  borderBottom: '2px solid #f44336'
},
    S_LINE_AFTER_ENTER = {
  borderBottom: '2px solid #80c040'
};

var _crId = function _crId(name) {
  return name + '_' + Math.random().toString(36).substr(2, 6);
};

var _isValue = function _isValue(input) {
  return input ? !!input.value : false;
};

var FN_NOOP = function FN_NOOP() {};

var FN_TRUE = function FN_TRUE() {
  return true;
};

var PasswordField = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var style = _ref.style,
      caption = _ref.caption,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'pwd' : _ref$name,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? "32" : _ref$maxLength,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? '' : _ref$errorMsg,
      _ref$onTest = _ref.onTest,
      onTest = _ref$onTest === void 0 ? FN_TRUE : _ref$onTest,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? FN_NOOP : _ref$onEnter;

  var _id = (0, _useRefInit["default"])(function () {
    return _crId(name);
  }),
      _refInput = (0, _react.useRef)(),
      _useProperty = (0, _useProperty3["default"])(false),
      _setWasEnter = _useProperty[0],
      getWasEnter = _useProperty[1],
      _useProperty2 = (0, _useProperty3["default"])(false),
      setIsFocus = _useProperty2[0],
      getIsFocus = _useProperty2[1],
      _useState = (0, _react.useState)({
    value: ''
  }),
      state = _useState[0],
      setState = _useState[1],
      value = state.value,
      rerender = (0, _useRerender["default"])()[1],
      _hFocusInput = function _hFocusInput() {
    setIsFocus(true);
    rerender();
  },
      _hBlurInput = function _hBlurInput() {
    setIsFocus(false);
    rerender();
  },
      _hInputChange = function _hInputChange(event) {
    setState({
      value: event.target.value.trim()
    });
  },
      _hClear = function _hClear() {
    setState({
      value: ''
    });
  },
      _hKeyDown = function _hKeyDown(event) {
    if (event.keyCode === 46) {
      setState({
        value: ''
      });
    } else if (event.keyCode === 13) {
      event.stopPropagation();
      event.preventDefault();
      onEnter(event.target.value);

      _setWasEnter(true);

      rerender();
    }
  };

  (0, _react.useEffect)(function () {
    var _clearId = setTimeout(function () {
      var _input = _refInput.current;

      if (_input && _input.hasAttribute('value')) {
        _input.removeAttribute('value');
      }
    });

    return function () {
      return clearTimeout(_clearId);
    };
  });
  (0, _react.useEffect)(function () {
    if (getWasEnter()) {
      _setWasEnter(false);
    }
  });
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      setWasEnter: function setWasEnter() {
        _setWasEnter(true);

        rerender();
      },
      getValue: function getValue() {
        var _input = _refInput.current;
        return _input && _input.value;
      },
      clear: function clear() {
        _setWasEnter(true);

        setState({
          value: ''
        });
      }
    };
  });

  var _labelStyle = _isValue(_refInput.current) || getIsFocus() ? void 0 : S_LABEL_TO_INPUT,
      _isPassTest = onTest(value),
      _labelErrStyle = _isPassTest ? void 0 : S_LABEL_ON_ERROR,
      _lineStyle = _isPassTest ? getWasEnter() ? S_LINE_AFTER_ENTER : void 0 : S_LINE_ERROR;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_SELECT,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      style: (0, _extends2["default"])({}, _labelStyle, _labelErrStyle),
      htmlFor: _id,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        hidden: true,
        autoComplete: "username",
        value: name,
        readOnly: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: _refInput,
        id: _id,
        type: "password",
        autoComplete: "current-password",
        className: CL_INPUT,
        maxLength: maxLength,
        value: value,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown,
        onFocus: _hFocusInput,
        onBlur: _hBlurInput
      }), HAS_TOUCH && value && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: CL_BT_CLEAR,
        onClick: _hClear,
        children: "x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE,
        style: _lineStyle
      }), !_isPassTest && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
});
var _default = PasswordField;
exports["default"] = _default;
//# sourceMappingURL=PasswordField.js.map