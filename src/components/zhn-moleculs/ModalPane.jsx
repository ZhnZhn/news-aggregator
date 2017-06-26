import React, { Component } from 'react'

class ModalPane extends Component {
  static defaultProps = {
    onClose: () => {}
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps ){
      if (nextProps.isShow){
        document.addEventListener('click', this._handleClickOutside, true)
      } else {
        document.removeEventListener('click', this._handleClickOutside, true)
      }
    }
  }

  _handleClickOutside = (event) => {
    const { onClose } = this.props;
    if (!this.rootNode.contains(event.target)) {
      onClose(event)
    }
  }

  render(){
    const { style, children } = this.props;
    return (
      <div
        style={style}
        ref={n => this.rootNode = n}
      >
        {children}
      </div>
    );
  }
}

export default ModalPane
