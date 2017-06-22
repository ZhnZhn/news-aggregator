import React, { Component } from 'react'

const CL_SELECT = 'm-select';
const CL_LABEL = 'm-select__label';
const CL_DIV = 'm-textfield-input__div';
const CL_INPUT = 'm-textfield-input';

const S = {
  ROOT: {
     width: '280px',
     display: 'block'
  },
  LABEL_TO_INPUT: {
     transform: 'scale(1) translate(0px, 0px)'
  },
  LABEL_ON_ERROR: {
    color: '#F44336'
  },
  LINE: {
    position: 'absolute',
    bottom: '6px',
    width: '100%',
    borderBottom: '2px solid black'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
  },
  MSG_ERROR: {
    position: 'absolute',
    bottom: '-18px',
    left: '4px',
    color: '#F44336'
  }
};

const _maskValue = (len=0) => {
  let i=0, str = ''
  for (i; i<len; i++){
    str = str + 'X'
  }
  return str;
};


class SecretField extends Component {
  constructor(props){
    super()
    this.isFocus = false
    this.isOnTest = (typeof props.onTest === 'function') ? true : false
    this.state = {
      value: '',
      isPassTest: true
    }
  }

  _handleFocusInput = () => {
    this.isFocus = true
    this.forceUpdate()
  }
  _handleBlurInput = () => {
    this.isFocus = false
    this.forceUpdate()
  }

  _handleChangeInput = (event) => {
    this.secret = event.target.value;
    const _value = _maskValue(this.secret.length)
    if (this.isOnTest) {
      const _isPassTest = this.props.onTest(_value)
      this.setState({
        value : _value,
        isPassTest: _isPassTest
      })
    } else {
      this.setState({ value : _value })
    }
  }

  _handleKeyDown = (event) => {
    if (event.keyCode === 27){
      this.secret = ''
      const _isPassTest = (this.isOnTest)
               ? this.props.onTest(this.secret)
               : true;
      this.setState({ value: '', isPassTest: _isPassTest })
    }
  }

  render(){
    const { caption, errorMsg='', maxLength } = this.props
        , { value, isPassTest } = this.state
        , _labelStyle = (value || this.isFocus)
            ? undefined
            : S.LABEL_TO_INPUT
        , _labelErrStyle = (isPassTest)
            ? undefined
            : S.LABEL_ON_ERROR
        , _lineStyle = (isPassTest)
            ? undefined
            : S.LINE_ERROR;

    console.log(value)
    return (
      <div
        className={CL_SELECT}
        style={S.ROOT}
      >
        <label
          className={CL_LABEL}
          style={{..._labelStyle, ..._labelErrStyle}}
         >
          {caption}
        </label>
        <div className={CL_DIV}>
          <input
             className={CL_INPUT}
             name="secret"
             autoComplete="new-secret"
             autoCorrect="off"
             autoCapitalize="off"
             spellCheck={false}
             type="password"
             translate={false}
             //placeholder={placeholder}
             maxLength={maxLength}
             value={value}
             defaultValue={value}

             onChange={this._handleChangeInput}
             onFocus={this._handleFocusInput}
             onBlur={this._handleBlurInput}
             onKeyDown={this._handleKeyDown}
          />
          <div style={{...S.LINE, ..._lineStyle}} />
          { _lineStyle && <div style={S.MSG_ERROR}>{errorMsg}</div>}
        </div>
      </div>
    );
  }

  getValue(){
    return this.secret;
  }
}

export default SecretField
