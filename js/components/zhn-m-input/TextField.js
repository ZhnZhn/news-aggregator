"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _has = require("../has");

var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));

var _crId = _interopRequireDefault(require("../../utils/crId"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_SELECT = 'm-select',
    CL_LABEL = CL_SELECT + "__label",
    M_TEXTFIELD = 'm-textfield',
    CL_DIV = M_TEXTFIELD + "-input__div",
    CL_INPUT = M_TEXTFIELD + "-input",
    M_INPUT = 'm-input',
    CL_INPUT_LINE = M_INPUT + "__line",
    CL_INPUT_MSG_ERR = M_INPUT + "__msg-err";
var S_LABEL_TO_INPUT = {
  transform: 'scale(1) translate(0px, -6px)'
},
    S_BT_CLEAR = {
  position: 'absolute',
  top: 25,
  right: 12
},
    S_LABEL_ON_ERROR = {
  color: '#f44336'
},
    S_LINE_ERROR = {
  borderBottom: '2px solid #f44336'
};

var DF_ON_TEST = function DF_ON_TEST() {
  return true;
};

var DF_ON_ENTER = function DF_ON_ENTER() {};

var TextField = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var style = _ref.style,
      inputStyle = _ref.inputStyle,
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

  var _refId = (0, _uiApi.useRef)(id || (0, _crId["default"])()),
      _useState = (0, _uiApi.useState)(initValue || ''),
      value = _useState[0],
      setValue = _useState[1],
      _useState2 = (0, _uiApi.useState)(function () {
    return onTest(initValue || '');
  }),
      isPassTest = _useState2[0],
      setIsPastTest = _useState2[1],
      _useBool = (0, _useBool2["default"])(),
      isFocus = _useBool[0],
      _hFocusInput = _useBool[1],
      _hBlurInput = _useBool[2],
      _hInputChange = (0, _uiApi.useCallback)(function (event) {
    var _value = event.target.value;
    setValue(_value);
    setIsPastTest(onTest(_value));
  }, []),
      _hKeyDown = (0, _uiApi.useCallback)(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 46 || keyCode === 27) {
      setValue('');
    } else if (keyCode === 13) {
      onEnter(event.target.value);
    }
  }, []),
      _hClear = (0, _uiApi.useCallback)(function () {
    return setValue('');
  }, []);

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return String(value).trim();
      }
    };
  }, [value]);

  var _labelStyle = value || isFocus ? void 0 : S_LABEL_TO_INPUT,
      _ref2 = isPassTest ? [] : [S_LABEL_ON_ERROR, S_LINE_ERROR],
      _labelErrStyle = _ref2[0],
      _lineStyle = _ref2[1];

  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_SELECT,
    style: style,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      style: (0, _extends2["default"])({}, _labelStyle, _labelErrStyle),
      htmlFor: _refId.current,
      children: caption
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [(0, _jsxRuntime.jsx)("input", {
        id: _refId.current,
        type: "text",
        className: CL_INPUT,
        style: inputStyle,
        value: value //autoComplete="off"
        ,
        autoCorrect: "off",
        autoCapitalize: autoCapitalize,
        spellCheck: "false",
        translate: "false",
        maxLength: maxLength,
        onFocus: _hFocusInput,
        onBlur: _hBlurInput,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown
      }), _has.HAS_TOUCH && hasClear && value && (0, _jsxRuntime.jsx)(_SvgX["default"], {
        color: "black",
        className: "svg-clear",
        style: S_BT_CLEAR,
        onClick: _hClear
      }), (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE,
        style: _lineStyle
      }), _lineStyle && (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
});
var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=TextField.js.map