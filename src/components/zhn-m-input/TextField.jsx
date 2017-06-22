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

class TextField extends Component {
  constructor(props){
    super()
    this.isFocus = false;
    this.isOnTest = (typeof props.onTest === 'function') ? true : false
    this.isOnEnter = (typeof props.onEnter === 'function') ? true : false
    const _value = (props.initValue) ? props.initValue: '';
    this.state = {
      value: _value,
      isPassTest: (this.isOnTest) ? props.onTest(_value) : true
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

  _handleInputChange = (event) => {
    if (this.isOnTest) {
      const _isPassTest = this.props.onTest(event.target.value)
      this.setState({
        value : event.target.value,
        isPassTest: _isPassTest
      })
    } else {
      this.setState({ value : event.target.value })
    }
  }
 _handleKeyDown = (event) => {
   if (event.keyCode === 27){
     this.setState({ value: '' })
   } else if (event.keyCode === 13 && this.isOnEnter) {
     this.props.onEnter(event.target.value)
   }
 }

  render(){
    const { caption, errorMsg='' } = this.props
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
            type="text"
            className={CL_INPUT}
            value={value}
            autoComplete="new-text"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            translate={false}
            onFocus={this._handleFocusInput}
            onBlur={this._handleBlurInput}
            onChange={this._handleInputChange}
            onKeyDown={this._handleKeyDown}
          />
          <div style={{...S.LINE, ..._lineStyle}} />
          { _lineStyle && <div style={S.MSG_ERROR}>{errorMsg}</div>}
        </div>
      </div>
    );
  }

  getValue(){
    return (''+this.state.value).trim();
  }
}

export default TextField
