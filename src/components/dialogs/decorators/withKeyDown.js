
const _isFn = fn => typeof fn === 'function';

const _handleKeyDown = function(event){
  if (event.keyCode === 13){
    if (this && _isFn(this._handleLoad)){
      this._handleLoad()
    }
  } else if (event.keyCode === 27){
    if (this && _isFn(this._handleClose)){
      this._handleClose()
    }
  }
};

const withKeyDown = (target) => {
  target.prototype._handleKeyDownWith = _handleKeyDown
}

export default withKeyDown
