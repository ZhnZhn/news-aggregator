const _isFn = fn => typeof fn === 'function';

const _handleClose = function(){
  const _d = this.dialogComp;
  if (_d && _isFn(_d.focusPrevEl)) {
    _d.focusPrevEl()
  }
  if (_isFn(this.props.onClose)) {
    this.props.onClose()
  }
};

const withClose = target => {
  target.prototype._handleCloseWith = _handleClose
};

export default withClose
