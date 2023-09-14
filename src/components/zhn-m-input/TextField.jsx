import {
  crId,
  forwardRef,
  useRef,
  useState,
  useMemo,
  useImperativeHandle,
  KEY_ESCAPE,
  KEY_DELETE,
  KEY_ENTER,
  getRefValue,
  focusRefElement
} from '../uiApi';

import useBool from '../hooks/useBool';

import { HAS_TOUCH_EVENTS } from '../has';
import SvgX from '../zhn-atoms/SvgX';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, M_TEXTFIELD = 'm-textfield'
, CL_DIV = `${M_TEXTFIELD}-input__div`
, CL_INPUT = `${M_TEXTFIELD}-input`
, M_INPUT = 'm-input'
, CL_INPUT_LINE = `${M_INPUT}__line`
, CL_INPUT_MSG_ERR = `${M_INPUT}__msg-err`
, CL_SVG_CLEAR = "svg-clear";

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

const TextField = forwardRef(({
  style,
  inputStyle,
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
  onKeyDown=FN_NOOP
}, ref) => {
  const _refId = useRef(id || crId())
  , _refTf = useRef()
  , [
    value,
    setValue
  ] = useState(initValue || '')
  , [
    isPassTest,
    setIsPastTest
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
        onEvent(_value.trim(), id, evt)
      }
    },
    (evt) => {
      setValue('')
      onKeyDown('', id, evt)
    }
  ], [])
  // onTest, onKeyDown, id
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
      _onEvent(evt, onKeyDown)
      const _value = _getEventTargetValue(evt);
      setValue(_value)
      setIsPastTest(onTest(_value))
    },
    (evt) => {
      const key = evt.key;
      if (key === KEY_DELETE || key === KEY_ESCAPE){
        _clearInput(evt)
      } else if (key === KEY_ENTER) {
        _onEvent(evt, onEnter)
      }
    }
  ], [])
  //onTest, onBlur, _blurInput, id
  //onTest
  //onTest, onEnter, onKeyDown, id
  /*eslint-enable react-hooks/exhaustive-deps */

  useImperativeHandle(ref, ()=>({
    getValue: () => String(value).trim(),
    setValue,
    focus: () => focusRefElement(_refTf)
  }), [value])

  const  _labelStyle = value
   || isFocus
      ? void 0
      : S_LABEL_TO_INPUT
  , [
    _labelErrStyle,
    _lineStyle
  ] = isPassTest
    ? []
    : [S_LABEL_ON_ERROR, S_LINE_ERROR];

  return (
    <div
      className={CL_SELECT}
      style={style}
    >
      <label
        className={CL_LABEL}
        style={{..._labelStyle, ..._labelErrStyle}}
        htmlFor={getRefValue(_refId)}
       >
        {caption}
      </label>
      <div className={CL_DIV}>
        <input
          ref={_refTf}
          id={getRefValue(_refId)}
          type="text"
          className={CL_INPUT}
          style={inputStyle}
          value={value}
          //autoComplete="off"
          autoCorrect="off"
          autoCapitalize={autoCapitalize}
          spellCheck="false"
          translate="false"
          maxLength={maxLength}
          onFocus={_focusInput}
          onBlur={_hBlurInput}
          onChange={_hInputChange}
          onKeyDown={_hKeyDown}
        />
        {HAS_TOUCH_EVENTS && hasClear && value && <SvgX
           color="black"
           className={CL_SVG_CLEAR}
           style={S_BT_CLEAR}
           onClick={_clearInput}
        />}
        {children}
        <div className={CL_INPUT_LINE} style={_lineStyle} />
        { _lineStyle && <div className={CL_INPUT_MSG_ERR}>{errorMsg}</div>}
      </div>
    </div>
  );
})

export default TextField
