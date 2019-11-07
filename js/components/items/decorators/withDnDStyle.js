"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = void 0;
var BORDER_LEFT = 'border-left',
    DRAG_START_BORDER_LEFT = "4px solid #d64336",
    _dragStart = function _dragStart(ev) {
  if (_node) {
    _node.style.removeProperty(BORDER_LEFT);
  }
  _node = ev.currentTarget;
  _node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
},
    _dragEnd = function _dragEnd(ev) {
  if (_node) {
    _node.style.removeProperty(BORDER_LEFT);
    _node = void 0;
  }
};

var withDnDStyle = function withDnDStyle(target) {
  Object.assign(target.prototype, {
    dragStartWithDnDStyle: _dragStart,
    dragEndWithDnDStyle: _dragEnd
  });
};

exports.default = withDnDStyle;
//# sourceMappingURL=withDnDStyle.js.map