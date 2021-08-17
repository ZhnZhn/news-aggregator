"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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
    borderBottom: '2px solid #f44336'
  }
};

var DF_ON_TEST = function DF_ON_TEST() {
  return true;
};

var DF_ON_ENTER = function DF_ON_ENTER() {};

var TextField = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var style = _ref.style,
      caption = _ref.caption,
      id = _ref.id,
      initValue = _ref.initValue,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? "20" : _ref$maxLength,
      _ref$autoCapitalize = _ref.autoCapitalize,
      autoCapitalize = _ref$autoCapitalize === void 0 ? "off" : _ref$autoCapitalize,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? '' : _ref$errorMsg,
      _ref$hasClear = _ref.hasClear,
      hasClear = _ref$hasClear === void 0 ? true : _ref$hasClear,
      _ref$onTest = _ref.onTest,
      onTest = _ref$onTest === void 0 ? DF_ON_TEST : _ref$onTest,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? DF_ON_ENTER : _ref$onEnter;

  var _refId = (0, _react.useRef)(id || (0, _crId["default"])()),
      _useState = (0, _react.useState)(initValue || ''),
      value = _useState[0],
      setValue = _useState[1],
      _useState2 = (0, _react.useState)(function () {
    return onTest(initValue || '');
  }),
      isPassTest = _useState2[0],
      setIsPastTest = _useState2[1],
      _useState3 = (0, _react.useState)(false),
      isFocus = _useState3[0],
      setIsFocus = _useState3[1],
      _hFocusInput = (0, _react.useCallback)(function () {
    return setIsFocus(true);
  }, []),
      _hBlurInput = (0, _react.useCallback)(function () {
    return setIsFocus(false);
  }, []),
      _hInputChange = (0, _react.useCallback)(function (event) {
    var _value = event.target.value;
    setValue(_value);
    setIsPastTest(onTest(_value));
  }, []),
      _hKeyDown = (0, _react.useCallback)(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 46 || keyCode === 27) {
      setValue('');
    } else if (keyCode === 13) {
      onEnter(event.target.value);
    }
  }, []),
      _hClear = (0, _react.useCallback)(function () {
    return setValue('');
  }, []);

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return String(value).trim();
      }
    };
  }, [value]);

  var _labelStyle = value || isFocus ? void 0 : S.LABEL_TO_INPUT,
      _labelErrStyle = isPassTest ? void 0 : S.LABEL_ON_ERROR,
      _lineStyle = isPassTest ? void 0 : S.LINE_ERROR;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL.SELECT,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: CL.LABEL,
      style: (0, _extends2["default"])({}, _labelStyle, _labelErrStyle),
      htmlFor: _refId.current,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL.DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: _refId.current,
        type: "text",
        className: CL.INPUT,
        value: value,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: autoCapitalize,
        spellCheck: "false",
        translate: "false",
        maxLength: maxLength,
        onFocus: _hFocusInput,
        onBlur: _hBlurInput,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown
      }), HAS_TOUCH && hasClear && value && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgX["default"], {
        color: "black",
        className: "svg-clear",
        style: S.BT_CLEAR,
        onClick: _hClear
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL.INPUT_LINE,
        style: _lineStyle
      }), _lineStyle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL.INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
});
var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=TextField.js.map