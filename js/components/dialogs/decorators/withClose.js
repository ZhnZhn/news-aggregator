'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _handleClose = function _handleClose() {
  var _d = this.dialogComp;
  if (_d && _isFn(_d.focusPrevEl)) {
    _d.focusPrevEl();
  }
  if (_isFn(this.props.onClose)) {
    this.props.onClose();
  }
};

var withClose = function withClose(target) {
  target.prototype._handleCloseWith = _handleClose;
};

exports.default = withClose;
//# sourceMappingURL=withClose.js.map