import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle
} from '../uiApi';

import useBool from '../hooks/useBool';

import { HAS_TOUCH } from '../has';
import SvgX from '../zhn-atoms/SvgX';

import crId from '../../utils/crId';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, M_TEXTFIELD = 'm-textfield'
, CL_DIV = `${M_TEXTFIELD}-input__div`
, CL_INPUT = `${M_TEXTFIELD}-input`
, M_INPUT = 'm-input'
, CL_INPUT_LINE = `${M_INPUT}__line`
, CL_INPUT_MSG_ERR = `${M_INPUT}__msg-err`;

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
  event
) => event.target.value;

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
  onTest=FN_TRUE,
  onEnter=FN_NOOP,
  onBlur=FN_NOOP
}, ref) => {
  const _refId = useRef(id || crId())
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
    _hFocusInput,
    _blurInput
  ] = useBool()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hBlurInput = useCallback(event => {
    const _value = _getEventTargetValue(event);
    if (onTest(_value)) {
      onBlur(_value.trim(), id)
    }
    _blurInput()
  }, [])
  // onTest, onBlur, _hBlurInput, id
  /*eslint-enable react-hooks/exhaustive-deps */
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hInputChange = useCallback(event => {
    const _value = event.target.value;
    setValue(_value)
    setIsPastTest(onTest(_value))
  }, [])
  //onTest
  , _hKeyDown = useCallback(event => {
    const { keyCode } = event;
    if (keyCode === 46 || keyCode === 27){
      setValue('')
    } else if (keyCode === 13) {
      const _value = _getEventTargetValue(event);
      if (onTest(_value)) {
        onEnter(_value.trim(), id)
      }
    }
  }, [])
  //onTest, onEnter, id
  /*eslint-enable react-hooks/exhaustive-deps */
  , _hClear = useCallback(()=> setValue(''), []);

  useImperativeHandle(ref, ()=>({
    getValue: () => String(value).trim()
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
        htmlFor={_refId.current}
       >
        {caption}
      </label>
      <div className={CL_DIV}>
        <input
          id={_refId.current}
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
          onFocus={_hFocusInput}
          onBlur={_hBlurInput}
          onChange={_hInputChange}
          onKeyDown={_hKeyDown}
        />
        {HAS_TOUCH && hasClear && value && <SvgX
           color="black"
           className="svg-clear"
           style={S_BT_CLEAR}
           onClick={_hClear}
        />}
        <div className={CL_INPUT_LINE} style={_lineStyle} />
        { _lineStyle && <div className={CL_INPUT_MSG_ERR}>{errorMsg}</div>}
      </div>
    </div>
  );
})

export default TextField
