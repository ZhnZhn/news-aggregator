"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _useId = _interopRequireDefault(require("../hooks/useId"));
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _has = require("../has");
var _AsyncSvgX = _interopRequireDefault(require("./AsyncSvgX"));
var _Input = require("./Input.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_LABEL_TO_INPUT = {
    transform: 'scale(1) translate(0px, -6px)'
  },
  S_LABEL_ON_ERROR = {
    color: '#f44336'
  },
  S_LINE_ERROR = {
    borderBottom: '2px solid #f44336'
  };
const _getEventTargetValue = evt => evt.target.value;
const _crValue = (isTrimValue, value) => isTrimValue ? value.trim() : value;
const TextField = _ref => {
  let {
    refEl,
    style,
    inputStyle,
    inputCn,
    caption,
    id,
    isTrimValue = true,
    initValue,
    maxLength = "20",
    autoCapitalize = "off",
    errorMsg = '',
    hasClear = true,
    children,
    onTest = _uiApi.FN_TRUE,
    onEnter = _uiApi.FN_NOOP,
    onBlur = _uiApi.FN_NOOP,
    onInputChange = _uiApi.FN_NOOP,
    onKeyDown = _uiApi.FN_NOOP,
    ...restInputProps
  } = _ref;
  const _inputId = (0, _useId.default)(id),
    _refTf = (0, _uiApi.useRef)(),
    [value, setValue] = (0, _uiApi.useState)(initValue || ''),
    [isPassTest, setIsPassTest] = (0, _uiApi.useState)(() => onTest(initValue || '')),
    [isFocus, _focusInput, _blurInput] = (0, _useBool.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    [_onEvent, _clearInput] = (0, _uiApi.useMemo)(() => [(evt, onEvent) => {
      const _value = _getEventTargetValue(evt);
      if (onTest(_value)) {
        onEvent(_crValue(isTrimValue, _value), id, evt);
      }
    }, evt => {
      setValue('');
      onInputChange('', id);
    }], [isTrimValue, onInputChange])
    // onTest, id
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
        onInputChange(_crValue(isTrimValue, _value), id);
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
    }], [isTrimValue, onInputChange]);
  //onTest, onBlur, _blurInput, id
  //onTest,
  //onTest, onEnter, onKeyDown, id
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => _crValue(isTrimValue, String(value)),
    setValue,
    focus: () => (0, _uiApi.focusRefElement)(_refTf)
  }), [isTrimValue, value]);
  const _labelStyle = value || isFocus ? void 0 : S_LABEL_TO_INPUT,
    [_labelErrStyle, _lineStyle] = isPassTest ? [] : [S_LABEL_ON_ERROR, S_LINE_ERROR],
    _isShowSvgX = _has.HAS_TOUCH_EVENTS && hasClear && value;
  return (0, _jsxRuntime.jsxs)("div", {
    className: _Input.CL_SELECT,
    style: style,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: _Input.CL_SELECT_LABEL,
      style: {
        ..._labelStyle,
        ..._labelErrStyle
      },
      htmlFor: _inputId,
      children: caption
    }), (0, _jsxRuntime.jsxs)("div", {
      className: _Input.CL_TEXTFIELD_INPUT_DIV,
      children: [(0, _jsxRuntime.jsx)("input", {
        ref: _refTf,
        id: _inputId,
        type: "text",
        className: (0, _crStyle.crCn)(_Input.CL_TEXTFIELD_INPUT, inputCn),
        style: inputStyle,
        value: value,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: autoCapitalize,
        spellCheck: "false",
        translate: "no",
        maxLength: maxLength,
        onFocus: _focusInput,
        onBlur: _hBlurInput,
        onChange: _hInputChange,
        onKeyDown: _hKeyDown,
        ...restInputProps
      }), (0, _jsxRuntime.jsx)(_AsyncSvgX.default, {
        is: _isShowSvgX,
        onClick: _clearInput
      }), children, (0, _jsxRuntime.jsx)("div", {
        className: _Input.CL_INPUT_LINE,
        style: _lineStyle
      }), _lineStyle && (0, _jsxRuntime.jsx)("div", {
        className: _Input.CL_INPUT_MSG_ERR,
        children: errorMsg
      })]
    })]
  });
};
var _default = exports.default = TextField;
//# sourceMappingURL=TextField.js.map