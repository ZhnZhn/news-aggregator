import {
  useRef,
  useState,
  useMemo,
  useImperativeHandle,

  KEY_ESCAPE,
  KEY_DELETE,
  KEY_ENTER,

  focusRefElement
} from '../uiApi';

import { crCn } from '../crStyle';

import useId from '../hooks/useId';
import useBool from '../hooks/useBool';

import { HAS_TOUCH_EVENTS } from '../has';
import AsyncShowComponent from '../zhn-moleculs/AsyncShowComponent';
import SvgX from '../zhn/SvgX';

import {
  CL_SELECT,
  CL_SELECT_LABEL,
  CL_TEXTFIELD_INPUT_DIV,
  CL_TEXTFIELD_INPUT,
  CL_INPUT_LINE,
  CL_INPUT_MSG_ERR,
  CL_BT_SVG_CLEAR
} from './Input.Style';

const S_LABEL_TO_INPUT = {
  transform: 'scale(1) translate(0px, -6px)'
}
, S_BT_CLEAR = {
  position: 'absolute',
  top: 25,
  right: 12
}
, S_LABEL_ON_ERROR = {
  color: '#f44336'
}
, S_LINE_ERROR = {
  borderBottom: '2px solid #f44336'
};

const FN_TRUE = () => true;
const FN_NOOP = () => {};

const _getEventTargetValue = (
  evt
) => evt.target.value;

const _crValue = str => str.trim();

const TextField = ({
  refEl,
  style,
  inputStyle,
  inputCn,
  caption,
  id,
  initValue,
  maxLength="20",
  autoCapitalize="off",
  errorMsg='',
  hasClear=true,
  children,
  onTest=FN_TRUE,
  onEnter=FN_NOOP,
  onBlur=FN_NOOP,
  onInputChange=FN_NOOP,
  onKeyDown=FN_NOOP,
  ...restInputProps
}) => {
  const _inputId = useId(id)
  , _refTf = useRef()
  , [
    value,
    setValue
  ] = useState(initValue || '')
  , [
    isPassTest,
    setIsPassTest
  ] = useState(
    () => onTest(initValue || '')
  )
  , [
    isFocus,
    _focusInput,
    _blurInput
  ] = useBool()
  /*eslint-disable react-hooks/exhaustive-deps */
  , [
    _onEvent,
    _clearInput
  ] = useMemo(() => [
    (evt, onEvent) => {
      const _value = _getEventTargetValue(evt);
      if (onTest(_value)) {
        onEvent(_crValue(_value), id, evt)
      }
    },
    (evt) => {
      setValue('')
      onInputChange('', id)
    }
  ], [onInputChange])
  // onTest, id
  , _compSvgX = useMemo(() => <SvgX
     color="black"
     className={CL_BT_SVG_CLEAR}
     style={S_BT_CLEAR}
     onClick={_clearInput}
  />, [])
  // _clearInput
  , [
    _hBlurInput,
    _hInputChange,
    _hKeyDown
  ] = useMemo(() => [
    (evt) => {
      _onEvent(evt, onBlur)
      _blurInput()
    },
    (evt) => {
      const _value = _getEventTargetValue(evt)
      , _isPassTest = onTest(_value);
      setValue(_value)
      setIsPassTest(_isPassTest)
      if (_isPassTest) {
        onInputChange(_crValue(_value), id)
      }
    },
    (evt) => {
      const key = evt.key;
      if (key === KEY_DELETE || key === KEY_ESCAPE){
        _clearInput(evt)
      } else if (key === KEY_ENTER) {
        _onEvent(evt, onEnter)
      } else {
        onKeyDown(evt)
      }
    }
  ], [onInputChange])
  //onTest, onBlur, _blurInput, id
  //onTest,
  //onTest, onEnter, onKeyDown, id
  /*eslint-enable react-hooks/exhaustive-deps */

  useImperativeHandle(refEl, ()=>({
    getValue: () => _crValue(String(value)),
    setValue,
    focus: () => focusRefElement(_refTf)
  }), [value])

  const _labelStyle = value || isFocus
    ? void 0
    : S_LABEL_TO_INPUT
  , [
    _labelErrStyle,
    _lineStyle
  ] = isPassTest
    ? []
    : [S_LABEL_ON_ERROR, S_LINE_ERROR]
  , _isShowSvgX = HAS_TOUCH_EVENTS
      && hasClear
      && value;

  return (
    <div
      className={CL_SELECT}
      style={style}
    >
      <label
        className={CL_SELECT_LABEL}
        style={{..._labelStyle, ..._labelErrStyle}}
        htmlFor={_inputId}
       >
        {caption}
      </label>
      <div className={CL_TEXTFIELD_INPUT_DIV}>
        <input
          ref={_refTf}
          id={_inputId}
          type="text"
          className={crCn(CL_TEXTFIELD_INPUT, inputCn)}
          style={inputStyle}
          value={value}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize={autoCapitalize}
          spellCheck="false"
          translate="no"
          maxLength={maxLength}
          onFocus={_focusInput}
          onBlur={_hBlurInput}
          onChange={_hInputChange}
          onKeyDown={_hKeyDown}
          {...restInputProps}
        />
        <AsyncShowComponent
          is={_isShowSvgX}
          mls={700}
        >
          {_compSvgX}
        </AsyncShowComponent>
        {children}
        <div className={CL_INPUT_LINE} style={_lineStyle} />
        { _lineStyle && <div className={CL_INPUT_MSG_ERR}>{errorMsg}</div>}
      </div>
    </div>
  );
}

export default TextField
