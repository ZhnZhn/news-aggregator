import React, { Component } from 'react'
//import PropTypes from 'prop-types'

const CL = {
  INIT : 'modal-root',
  SHOWING : 'modal-root show-modal',
  HIDING : 'modal-root hide-modal'
};

const STYLE = {
  SHOW : {
    display : 'block'
  },
  HIDE : {
    display : 'none'
  },
  HIDE_BACKGROUND : {
    backgroundColor : 'rgba(0,0,0, 0)'
  }
}

class WrapperModalDialog extends Component {
  /*
  static propTypes = {
    isShow  : PropTypes.bool,
    timeout : PropTypes.number,
    onClose : PropTypes.func
  }
  */
  static defaultProps = {
    timeout: 450
  }

  constructor(props){
    super(props);
    this._wasClosing = true;
  }


  componentDidMount(){
    this._wasClosing = false
  }

  _setNotWasClosing = () => {
    this.setState({},
      () => {
        this._wasClosing = false;
        this._timeID = void 0;
      }
    )
  }

  componentDidUpdate(prevProps, prevState){
    const { timeout, isShow } = this.props;
    if (this._wasClosing){
      if (!this._timeID) {
        this._timeID = setTimeout(
          this._setNotWasClosing,
          timeout
        )
      }
    } else {
      if (!isShow) {
        this._wasClosing = true
      }
    }
  }


  render(){
    const { isShow, children, onClose } = this.props;
    let _className, _style;
    if (this._wasClosing){
       _className = CL.INIT;
       _style = STYLE.HIDE;
    } else {
      _className = isShow ? CL.SHOWING : CL.HIDING;
      _style = isShow ? STYLE.SHOW : STYLE.HIDE_BACKGROUND;      
    }

    return (
      <div
        className={_className}
        style={_style}
        onClick={onClose}
      >
        {children}
      </div>
    )
  }
}

export default WrapperModalDialog
