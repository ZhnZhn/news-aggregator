
const _handleKeyDown = function(event){
  if (event.keyCode === 13){
    if (this && typeof this._handleLoad === 'function'){
      this._handleLoad()
    }
  } else if (event.keyCode === 27){
    if (this && typeof this._handleClose === 'function'){
      this._handleClose()
    }
  }
}

const withKeyDown = (target) => {
  target.prototype._handleKeyDownWith = _handleKeyDown
}

export default withKeyDown
