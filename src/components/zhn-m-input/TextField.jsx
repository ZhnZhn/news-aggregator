import { Component } from 'react'

import has from '../has'
import SvgX from '../zhn-atoms/SvgX'

import crId from '../../utils/crId'

const { HAS_TOUCH } = has

const CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-textfield-input__div',
  INPUT: 'm-textfield-input',
  INPUT_LINE: 'm-input__line',
  INPUT_MSG_ERR: 'm-input__msg-err'
};

const S = {
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

const _isFn = fn => typeof fn === 'function';

class TextField extends Component {
  static defaultProps = {
    maxLength: "20",
    autoCapitalize: "off",
    hasClear: true
  }

  constructor(props){
    super(props)
    const { id, initValue, onTest, onEnter } = props;
    this._id = id || crId()
    this.isFocus = false;
    this.isOnTest = _isFn(onTest)
    this.isOnEnter = _isFn(onEnter)
    const _value = initValue || '';
    this.state = {
      value: _value,
      isPassTest: this.isOnTest ? onTest(_value) : true
    }
  }

  _hFocusInput = () => {
    this.isFocus = true
    this.forceUpdate()
  }
  _hBlurInput = () => {
    this.isFocus = false
    this.forceUpdate()
  }

  _hInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      value,
      isPassTest: this.isOnTest
        ? this.props.onTest(value)
        : true
    })
  }
 _hKeyDown = (event) => {
   const { keyCode } = event;
   if (keyCode === 46 || keyCode === 27){
     this.setState({ value: '' })
   } else if (keyCode === 13 && this.isOnEnter) {
     this.props.onEnter(event.target.value)
   }
 }

 _hClear = () => {
   this.setState({ value: '' })
 }

  render(){
    const {
      style, maxLength, hasClear,
      autoCapitalize,
      caption, errorMsg=''
    } = this.props
    , { value, isPassTest } = this.state
    , _labelStyle = (value || this.isFocus)
        ? void 0
        : S.LABEL_TO_INPUT
    , _labelErrStyle = isPassTest
        ? void 0
        : S.LABEL_ON_ERROR
    , _lineStyle = isPassTest
        ? void 0
        : S.LINE_ERROR;

    return (
      <div
        className={CL.SELECT}
        style={style}
      >
        <label
          className={CL.LABEL}
          style={{..._labelStyle, ..._labelErrStyle}}
          htmlFor={this._id}
         >
          {caption}
        </label>
        <div className={CL.DIV}>
          <input
            id={this._id}
            type="text"
            className={CL.INPUT}
            value={value}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize={autoCapitalize}
            spellCheck="false"
            translate="false"
            maxLength={maxLength}
            onFocus={this._hFocusInput}
            onBlur={this._hBlurInput}
            onChange={this._hInputChange}
            onKeyDown={this._hKeyDown}
          />
          {HAS_TOUCH && hasClear && value && <SvgX
             color="black"
             className="svg-clear"
             style={S.BT_CLEAR}
             onClick={this._hClear}
          />}
          <div className={CL.INPUT_LINE} style={_lineStyle} />
          { _lineStyle && <div className={CL.INPUT_MSG_ERR}>{errorMsg}</div>}
        </div>
      </div>
    );
  }

  getValue(){
    return String(this.state.value).trim();
  }
}

export default TextField
