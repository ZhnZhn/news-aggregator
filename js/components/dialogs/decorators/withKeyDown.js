"use strict";

exports.__esModule = true;
exports["default"] = void 0;

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

var _default = withKeyDown;
exports["default"] = _default;
//# sourceMappingURL=withKeyDown.js.map