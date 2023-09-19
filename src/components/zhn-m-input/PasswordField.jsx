import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  stopDefaultFor
} from '../uiApi';

import useRefInit from '../hooks/useRefInit';
import useProperty from '../hooks/useProperty';
import useRerender from '../hooks/useRerender';

import { HAS_TOUCH_EVENTS } from '../has';

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
, S_LABEL_ON_ERROR = {
   color: '#f44336'
}
, S_LINE_ERROR = {
   borderBottom: '2px solid #f44336'
}
, S_LINE_AFTER_ENTER = {
   borderBottom: '2px solid #80c040'
};


const _crId = (name) => name
  + '_'
  + Math.random().toString(36).substr(2, 6);

const _isValue = (
  input
) => input
  ? !!input.value
  : false;

const FN_NOOP = () => {};
const FN_TRUE = () => true;

const PasswordField = forwardRef(({
  style,
  caption,
  name='pwd',
  maxLength="32",
  errorMsg='',
  onTest=FN_TRUE,
  onEnter=FN_NOOP
}, ref) => {
  const _id = useRefInit(() => _crId(name))
  , _refInput = useRef()
  , [
    setWasEnter,
    getWasEnter
  ] = useProperty(false)
  , [
    setIsFocus,
    getIsFocus
  ] = useProperty(false)
  , [
    state,
    setState
  ] = useState({value: ''})
  , { value } = state
  , rerender = useRerender()[1]
  , _hFocusInput = () => {
    setIsFocus(true)
    rerender()
  }
  , _hBlurInput = () => {
    setIsFocus(false)
    rerender()
  }
  , _hInputChange = (event) => {
    setState({value: event.target.value.trim()})
  }
  , _hClear = (event) => {
    stopDefaultFor(event)
    setState({value: ''})
  }
  , _hKeyDown = (event) => {
    if (event.keyCode === 46){
      setState({ value: '' })
    } else if (event.keyCode === 13) {
      stopDefaultFor(event)
      onEnter(event.target.value)
      setWasEnter(true)
      rerender()
    }
  }


  useEffect(() => {
    const _clearId = setTimeout(()=>{
      const _input = _refInput.current;
      if (_input && _input.hasAttribute('value')) {
        _input.removeAttribute('value')
      }
    })
    return () => clearTimeout(_clearId);
  })
  useEffect(() => {
    if (getWasEnter()){
      setWasEnter(false)
    }
  })

  useImperativeHandle(ref, () => ({
    setWasEnter: () => {
      setWasEnter(true)
      rerender()
    },
    getValue: () => {
      const _input = _refInput.current;
      return _input && _input.value;
    },
    clear: () => {
      setWasEnter(true)
      setState({ value: '' })
    }
  }))

  const _labelStyle = _isValue(_refInput.current)
   || getIsFocus()
      ? void 0
      : S_LABEL_TO_INPUT
  , _isPassTest = onTest(value)
  , _labelErrStyle = _isPassTest
      ? void 0
      : S_LABEL_ON_ERROR
  , _lineStyle = _isPassTest
      ? getWasEnter()
           ? S_LINE_AFTER_ENTER
           : void 0
      : S_LINE_ERROR;

  return (
    <form
      className={CL_SELECT}
      style={style}
    >
      <label
        className={CL_SELECT_LABEL}
        style={{..._labelStyle, ..._labelErrStyle}}
        htmlFor={_id}
       >
        {caption}
      </label>
      <div className={CL_TEXTFIELD_INPUT_DIV}>
        <input
          hidden={true}
          autoComplete="username"
          value={name}
          readOnly={true}
        />
        <input
          ref = {_refInput}
          id={_id}
          type="password"
          autoComplete="current-password"
          className={CL_TEXTFIELD_INPUT}
          maxLength={maxLength}
          value={value}
          onChange={_hInputChange}
          onKeyDown={_hKeyDown}
          onFocus={_hFocusInput}
          onBlur={_hBlurInput}
        />
        {
          HAS_TOUCH_EVENTS && value && <button
            type="button"
            className={CL_BT_SVG_CLEAR}
            onClick={_hClear}
          >x</button>
        }
        <div className={CL_INPUT_LINE} style={_lineStyle} />
        {
          !_isPassTest && <div className={CL_INPUT_MSG_ERR}>
            {errorMsg}
          </div>
        }
      </div>
    </form>
  );
});

export default PasswordField
