import React, { Component } from 'react'

class MenuItem extends Component {
   static defaultProps = {
     onClick: () => {},
     onClose: () => {}
   }

  _handleKeyDown = (event) => {
    if (event.keyCode === 13 ) {
      this.props.onClick()
    } else if (event.keyCode === 27 ) {
      this.props.onClose({ target: this.divNode })
    }
  }

  render(){
    const { className, caption, onClick } = this.props;
    return (
      <div
        ref={n => this.divNode = n}
        className={className}
        tabIndex="0"
        onClick={onClick}
        onKeyDown={this._handleKeyDown}
      >
        {caption}
      </div>
    );
  }

  focus(){
    this.divNode.focus()
  }
}

export default MenuItem
