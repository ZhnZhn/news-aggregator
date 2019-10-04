import React, { Component } from 'react'

class MenuItem extends Component {
   static defaultProps = {
     onClick: () => {},
     onClose: () => {}
   }

  _hKeyDown = (event) => {
    if (event.keyCode === 13 ) {
      this.props.onClick()
    } else if (event.keyCode === 27 ) {
      this.props.onClose({ target: this.divNode })
    }
  }

  _refDivNode = node => this.divNode = node

  render(){
    const { className, caption, onClick } = this.props;
    return (
      <div
        ref={this._refDivNode}
        className={className}
        tabIndex="0"
        onClick={onClick}
        onKeyDown={this._hKeyDown}
      >
        {caption}
      </div>
    );
  }

  focus(){
    if (this.divNode) {
       this.divNode.focus()
    }
  }
}

export default MenuItem
