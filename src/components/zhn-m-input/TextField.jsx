import React, { Component } from 'react'

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
  LABEL_ON_ERROR: {
    color: '#F44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
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
    const { rootStyle, caption, errorMsg='' } = this.props
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
        className={CL.SELECT}
        style={rootStyle}
      >
        <label
          className={CL.LABEL}
          style={{..._labelStyle, ..._labelErrStyle}}
         >
          {caption}
        </label>
        <div className={CL.DIV}>
          <input
            type="text"
            className={CL.INPUT}
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
