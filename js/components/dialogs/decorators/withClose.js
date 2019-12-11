"use strict";

exports.__esModule = true;
exports["default"] = void 0;

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

var _default = withClose;
exports["default"] = _default;
//# sourceMappingURL=withClose.js.map