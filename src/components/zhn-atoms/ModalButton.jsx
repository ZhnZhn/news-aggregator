import React, { Component } from 'react'

const CL_BT = 'bt-flat';
const CL_BT_SPAN = 'bt-flat__span';

class ModalButton extends Component {

  componentDidMount(){
    const { onReg } = this.props;
    if (typeof onReg === 'function'){
      onReg(this.rootNode)
    }
  }

  render(){
    const {
            rootStyle, clDiv, title, caption,
            children, onClick
          } = this.props;
    return (
      <button
        ref={n => this.rootNode = n}
        className={CL_BT}
        style={rootStyle}
        type="button"
        tabIndex={0}
        title={title}
        onClick={onClick}
      >
        <div className={clDiv}>
          <span className={CL_BT_SPAN}>
            {caption}
            {children}
          </span>
        </div>
      </button>
    );
  }
}

export default ModalButton
