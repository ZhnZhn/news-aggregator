import React, { Component } from 'react'
import PropTypes from 'prop-types'

const STYLE = {
  ROOT: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '250px'
  },
  INPUT: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  HR: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '230px'
  },
  HR_VALID : {
    borderColor: '#1B75BB'
  },
  HR_NOT_VALID : {
    borderColor: '#F44336'
  },
  ERR_MSG: {
    color: '#F44336',
    paddingLeft: '10px',
    paddingBottom: '5px',
    fontSize: '12px',
    fontWeight: 'bold'
  }
};

class InputDate extends Component {
  static propTypes = {
    initValue: PropTypes.string,
    errorMsg: PropTypes.string,
    onTest: PropTypes.func
  }
  static defaultProps = {
    initValue: '',
    onTest: () => {}
  }

  constructor(props){
    super()
    this.state = {
      value: props.initValue,
      errorInput: null,
      isValid: true
    }
  }

  setValue = (value) => {
    if (!this.props.onTest(value)) {
      this.setState({
         value : value,
         isValid : false
      });
    } else {
      this.setState({
        value: value,
        isValid : true,
        errorInput : null
      });
    }
  }

  _handleChangeValue = (event) => {
    this.setValue(event.target.value);
  }

  _handleBlurValue = () => {
    if (!this.props.onTest(this.state.value)) {
      this.setState({
          isValid : false,
          errorInput : this.props.errorMsg
      });
    } else {
      this.setState({
          isValid : true,
          errorInput : null
      });
    }
  }

  render(){
    const { value, isValid, errorInput } = this.state
        , _hrStyle = isValid ? STYLE.HR_VALID : STYLE.HR_NOT_VALID;

    return (
      <div style={STYLE.ROOT}>
        <input
           ref={c => this.inputComp = c}
           type="text"
           name="date"
           autoComplete="new-date"
           autoCorrect="off"
           autoCapitalize="off"
           spellCheck={false}
           style={STYLE.INPUT}
           placeholder="YYYY-MM-DD"
           value={value}
           onChange={this._handleChangeValue}
           onBlur={this._handleBlurValue}
        >
        </input>
        <hr style={{...STYLE.HR, ..._hrStyle}}></hr>
        <div style={STYLE.ERR_MSG}>
          {errorInput}
        </div>
      </div>
    );
  }

  getValue(){
    return this.state.value;
  }

  isValid(){
    return this.state.isValid;
  }

  focusInput(){
    this.inputComp.focus()
  }
}

export default InputDate
