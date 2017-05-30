"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BORDER_LEFT = 'border-left';
var DRAG_START_BORDER_LEFT = "4px solid #D64336";
var _node = undefined;

var _dragStart = function _dragStart(ev) {
  if (_node) {
    _node.style.removeProperty(BORDER_LEFT);
  }
  _node = ev.currentTarget;
  _node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};

var _dragEnd = function _dragEnd(ev) {
  _node.style.removeProperty(BORDER_LEFT);
  _node = undefined;
};

var withDnDStyle = function withDnDStyle(target) {
  var _proto = target.prototype;
  _proto.dragStartWithDnDStyle = _dragStart;
  _proto.dragEndWithDnDStyle = _dragEnd;
};

exports.default = withDnDStyle;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\items\decorators\withDnDStyle.js.map