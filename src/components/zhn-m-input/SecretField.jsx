import React, { Component } from 'react'

const CL_SELECT = 'm-select';
const CL_LABEL = 'm-select__label';
const CL_DIV = 'm-textfield-input__div';
const CL_INPUT = 'm-textfield-input';

const S = {
  ROOT: {
     display: 'block',
     width: 280
  },
  LABEL_TO_INPUT: {
     transform: 'scale(1) translate(0px, 0px)'
  },
  LABEL_ON_ERROR: {
    color: '#f44336'
  },
  LINE: {
    position: 'absolute',
    bottom: 6,
    width: '100%',
    borderBottom: '2px solid black'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #f44336'
  },
  LINE_AFTER_ENTER: {
    borderBottom: '2px solid greenyellow'
  },
  MSG_ERROR: {
    position: 'absolute',
    bottom: -18,
    left: 4,
    color: '#f44336'
  }
};

const _isFn = fn => typeof fn === 'function';

const _maskValue = (len=0) => {
  let i=0, str = '';
  for (i; i<len; i++){
    str = str + 'X'
  }
  return str;
};


const _crInitialState = () => ({
  value: '',
  isPassTest: true
});

class SecretField extends Component {

  static defaultProps = {
    onEnter: () => {}
  }

  constructor(props){
    super(props)
    this.isFocus = false
    this.isOnTest = _isFn(props.onTest) ? true : false
    this.state = _crInitialState()
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
    this.secret = event.target.value
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

  _clearWasEnter = () => {
    this._wasEnter = false
  }

  _handleKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      event.preventDefault()
      this.props.onEnter(this.secret)
      this._wasEnter = true
      this.forceUpdate(this._clearWasEnter)
    } else if (keyCode === 46) {
      this.secret = ''
      this.setState(_crInitialState())
    } else if (keyCode === 27){
      this.secret = ''
      const _isPassTest = this.isOnTest
        ? this.props.onTest(this.secret)
        : true;
      this.setState({ value: '', isPassTest: _isPassTest })
    }
  }

  render(){
    const { rootStyle, caption, errorMsg='', maxLength } = this.props
        , { value, isPassTest } = this.state
        , _labelStyle = (value || this.isFocus)
            ? void 0
            : S.LABEL_TO_INPUT
        , _labelErrStyle = isPassTest
            ? void 0
            : S.LABEL_ON_ERROR
        , _lineStyle = isPassTest
            ? this._wasEnter
                 ? S.LINE_AFTER_ENTER
                 : void 0
            : S.LINE_ERROR;

    return (
      <div
        className={CL_SELECT}
        style={rootStyle}
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
             spellCheck="false"
             type="password"
             translate="false"
             maxLength={maxLength}
             value={value}
             onChange={this._handleChangeInput}
             onFocus={this._handleFocusInput}
             onBlur={this._handleBlurInput}
             onKeyDown={this._handleKeyDown}
          />
          <div style={{...S.LINE, ..._lineStyle}} />
          {
            !isPassTest && <div
               style={S.MSG_ERROR}>{errorMsg}
             </div>
           }
        </div>
      </div>
    );
  }

  getValue(){
    return this.secret;
  }
}

export default SecretField
