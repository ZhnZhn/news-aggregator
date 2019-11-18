'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _handleKeyDown = function _handleKeyDown(event) {
  if (event.keyCode === 13) {
    if (this && _isFn(this._handleLoad)) {
      this._handleLoad();
    }
  } else if (event.keyCode === 27) {
    if (this && _isFn(this._handleClose)) {
      this._handleClose();
    }
  }
};

var withKeyDown = function withKeyDown(target) {
  target.prototype._handleKeyDownWith = _handleKeyDown;
};

exports.default = withKeyDown;
//# sourceMappingURL=withKeyDown.js.map