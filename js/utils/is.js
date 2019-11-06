'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var is = {
  isTouchable: function isTouchable() {
    return document && 'ontouchstart' in document.documentElement;
  }
};

exports.default = is;
//# sourceMappingURL=is.js.map