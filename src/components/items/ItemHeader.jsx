import React, { Component } from 'react'

import SvgX from '../zhn-atoms/SvgX'

class ItemHeader extends Component {
  _handleClose = (event) => {
    event.stopPropagation()
    this.props.onClose()
  }

  _handleKeyDown = (event) => {
    const keyCode = event.keyCode;
    const { isShow, onClick, onClose, onHide } = this.props;
    if (keyCode === 13) {
      if (!isShow) {
        onClick()
      } else {
        onHide()
      }
    } else if (keyCode === 27 && isShow) {
      onClick()
    } else if (keyCode === 8 || keyCode === 46) {
      onClose()
    }
  }

 _refRoot = node => this.rootNode = node

  render(){
    const {
            className,
            style, captionStyle, btCloseStyle,
            title,
            onClick
          } = this.props;
    return (
      <div
        role="button"
        ref={this._refRoot}
        tabIndex="0"
        className={className}
        style={style}
        onClick={onClick}
        onKeyDown={this._handleKeyDown}
      >
        <span
           className="not-selected"
           style={captionStyle}
        >
           {title}
        </span>
        <SvgX
            style={btCloseStyle}
            onClick={this._handleClose}
        />
      </div>
    );
  }

  focus() {
    if (this.rootNode && this.rootNode.focus) {
      this.rootNode.focus()
    }
  }
}

export default ItemHeader
