"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _has = require("../has");
var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SELECT = 'm-select',
  CL_LABEL = CL_SELECT + "__label",
  M_TEXTFIELD = 'm-textfield',
  CL_DIV = M_TEXTFIELD + "-input__div",
  CL_INPUT = M_TEXTFIELD + "-input",
  M_INPUT = 'm-input',
  CL_INPUT_LINE = M_INPUT + "__line",
  CL_INPUT_MSG_ERR = M_INPUT + "__msg-err",
  CL_BT_SVG_CLEAR = "bt-svg-clear";
const S_LABEL_TO_INPUT = {
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
const FN_TRUE = () => true;
const FN_NOOP = () => {};
const _getEventTargetValue = evt => evt.target.value;
const TextField = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    style,
    inputStyle,
    caption,
    id,
    initValue,
    maxLength = "20",
    autoCapitalize = "off",
    errorMsg = '',
    hasClear = true,
    children,
    onTest = FN_TRUE,
    onEnter = FN_NOOP,
    onBlur = FN_NOOP,
    onInputChange = FN_NOOP,
    onKeyDown = FN_NOOP
  } = _ref;
  const _refId = (0, _uiApi.useRef)(id || (0, _uiApi.crId)()),
    _refTf = (0, _uiApi.useRef)(),
    [value, setValue] = (0, _uiApi.useState)(initValue || ''),
    [isPassTest, setIsPassTest] = (0, _uiApi.useState)(() => onTest(initValue || '')),
    [isFocus, _focusInput, _blurInput] = (0, _useBool.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    [_onEvent, _clearInput] = (0, _uiApi.useMemo)(() => [(evt, onEvent) => {
      const _value = _getEventTargetValue(evt);
      if (onTest(_value)) {
        onEvent(_value.trim(), id, evt);
      }
    }, evt => {
      setValue('');
      onInputChange('', id);
    }], [])
    // onTest, onInputChange, id
    ,
    [_hBlurInput, _hInputChange, _hKeyDown] = (0, _uiApi.useMemo)(() => [evt => {
      _onEvent(evt, onBlur);
      _blurInput();
    }, evt => {
      const _value = _getEventTargetValue(evt),
        _isPassTest = onTest(_value);
      setValue(_value);
      setIsPassTest(_isPassTest);
      if (_isPassTest) {
        onInputChange(_value.trim(), id);
      }
    }, evt => {
      const key = evt.key;
      if (key === _uiApi.KEY_DELETE || key === _uiApi.KEY_ESCAPE) {
        _clearInput(evt);
      } else if (key === _uiApi.KEY_ENTER) {
        _onEvent(evt, onEnter);
      } else {
        onKeyDown(evt);
      }
    }], []);
  //onTest, onBlur, _blurInput, id
  //onTest, onInputChange
  //onTest, onEnter, onKeyDown, id
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(ref, () => ({
    getValue: () => String(value).trim(),
    setValue,
    focus: () => (0, _uiApi.focusRefElement)(_refTf)
  }), [value]);
  const _labelStyle = value || isFocus ? void 0 : S_LABEL_TO_INPUT,
    [_labelErrStyle, _lineStyle] = isPassTest ? [] : [S_LABEL_ON_ERROR, S_LINE_ERROR];
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_SELECT,
    style: style,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      style: {
        ..._labelStyle,
        ..._labelErrStyle
      },
      htmlFor: (0, _uiApi.getRefValue)(_refId),
      children: caption
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [(0, _jsxRuntime.jsx)("input", {
        ref: _refTf,
        id: (0, _uiApi.getRefValue)(_refId),
        type: "text",
        className: CL_INPUT,
        style: inputStyle,
        value: value
        //autoComplete="off"
        ,
        autoCorrect: "off",
        autoCapitalize: autoCapitalize,
        spellCheck: "false",
        translate: "false",
        maxLength: maxLength,
        onFocus: _focusInput,
        onBlur: _hBlurInput,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown
      }), _has.HAS_TOUCH_EVENTS && hasClear && value && (0, _jsxRuntime.jsx)(_SvgX.default, {
        color: "black",
        className: CL_BT_SVG_CLEAR,
        style: S_BT_CLEAR,
        onClick: _clearInput
      }), children, (0, _jsxRuntime.jsx)("div", {
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
exports.default = _default;
//# sourceMappingURL=TextField.js.map