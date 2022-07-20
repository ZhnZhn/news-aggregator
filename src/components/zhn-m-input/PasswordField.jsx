import { Component } from 'react';

import has from '../has';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, M_TEXTFIELD = 'm-textfield'
, CL_DIV = `${M_TEXTFIELD}-input__div`
, CL_INPUT = `${M_TEXTFIELD}-input`
, CL_BT_CLEAR = `${M_TEXTFIELD}__bt-clear`
, M_INPUT = 'm-input'
, CL_INPUT_LINE = `${M_INPUT}__line`
, CL_INPUT_MSG_ERR = `${M_INPUT}__msg-err`

, S_LABEL_TO_INPUT = {
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


const _crId = ({ name }) => name
  + '_'
  + Math.random().toString(36).substr(2, 6);

const _isValue = (
  input
) => input
  ? !!input.value
  : false;

const FN_NOOP = () => {};
const FN_TRUE = () => true;

class PasswordField extends Component {
  static defaultProps = {
    name: 'pwd',
    maxLength: "32",
    errorMsg: '',
    onTest: FN_TRUE,
    onEnter: FN_NOOP
  }

  constructor(props){
    super(props)
    this._wasEnter = false
    this.isFocus = false
    this._id = _crId(props)
    this.state = {
      value: ''
    }
  }

  componentWillUnmound() {
    clearTimeout(this._clearId)
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
    this.setState({
      value: event.target.value.trim(),
    })
  }
  _hClear = () => {
    this.setState({ value: '' })
  }

  _clearAttrValue = () => {
    this._clearId = setTimeout(() => {
      const _input = this._input;
      if (_input && _input.hasAttribute('value')) {
        _input.removeAttribute('value')
      }
    })
  }

  _clearWasEnter = () => {
    this._wasEnter = false
  }

 _hKeyDown = (event) => {
   if (event.keyCode === 46){
     this.setState({ value: '' })
   } else if (event.keyCode === 13) {
     event.stopPropagation()
     event.preventDefault()
     this.props.onEnter(event.target.value)
     this._wasEnter = true
     this.forceUpdate(this._clearWasEnter)
   }
 }

 _refInput = node => this._input = node

  render(){
    const {
        style,
        caption,
        name,
        maxLength,
        errorMsg,
        onTest
      } = this.props
    , { value } = this.state
    , _isPassTest = onTest(value)
    , _labelStyle = _isValue(this._input) || this.isFocus
        ? void 0
        : S_LABEL_TO_INPUT
    , _labelErrStyle = _isPassTest
        ? void 0
        : S_LABEL_ON_ERROR
    , _lineStyle = _isPassTest
        ? this._wasEnter
             ? S_LINE_AFTER_ENTER
             : void 0
        : S_LINE_ERROR;
    return (
      <div
        className={CL_SELECT}
        style={style}
      >
        <label
          className={CL_LABEL}
          style={{..._labelStyle, ..._labelErrStyle}}
          htmlFor={this._id}
         >
          {caption}
        </label>
        <div className={CL_DIV}>
          <input
            hidden={true}
            autoComplete="username"
            value={name}
            readOnly={true}
          />
          <input
            ref = {this._refInput}
            id={this._id}
            type="password"
            autoComplete="current-password"
            className={CL_INPUT}
            maxLength={maxLength}
            value={value}
            onChange={this._hInputChange}
            onKeyDown={this._hKeyDown}
            onFocus={this._hFocusInput}
            onBlur={this._hBlurInput}
          />
          {
            has.HAS_TOUCH && value && <button
             className={CL_BT_CLEAR}
             onClick={this._hClear}
            >x</button>
          }
          <div className={CL_INPUT_LINE} style={_lineStyle} />
          {
             !_isPassTest && <div className={CL_INPUT_MSG_ERR}>
                 {errorMsg}
               </div>
          }
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    this._clearAttrValue()
  }

  setWasEnter(){
    this._wasEnter = true
    this.forceUpdate(this._clearWasEnter)
  }

  getValue(){
    return this._input && this._input.value;
  }

  clear(){
    this.setState({ value: ''}, this.setWasEnter)
  }
}

export default PasswordField
