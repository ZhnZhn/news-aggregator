'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _has = require('../../has');

var _has2 = _interopRequireDefault(_has);

var _withDnDStyle = require('./withDnDStyle');

var _withDnDStyle2 = _interopRequireDefault(_withDnDStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HAS_TOUCH = _has2.default.HAS_TOUCH,
    DELTA = HAS_TOUCH ? {
  MARK_REMOVE: 50,
  REMOVE_ITEM: 90,
  REMOVE_UNDER: 150
} : {
  MARK_REMOVE: 25,
  REMOVE_ITEM: 35,
  REMOVE_UNDER: 150
};


var _getTouchesClientX = function _getTouchesClientX(ev) {
  return (((ev || {}).touches || [])[0] || {}).clientX || 0;
};
var _getChangedTouches = function _getChangedTouches(ev) {
  return (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;
};

var _dragStart = function _dragStart(ev) {
  ev.persist();
  this.clientX = ev.clientX;
  this.dragStartWithDnDStyle(ev);
  ev.dataTransfer.effectAllowed = "move";
  ev.dataTransfer.dropEffect = "move";
};
var _onTouchStart = function _onTouchStart(ev) {
  ev.persist();
  var _clientX = _getTouchesClientX(ev);
  if (_clientX) {
    this._clientX = _clientX;
  }
};
var _onTouchMove = function _onTouchMove(ev) {
  ev.persist();
  var _clientX = _getTouchesClientX(ev);
  if (_clientX && Math.abs(this._clientX - _clientX) > DELTA.MARK_REMOVE) {
    this.dragStartWithDnDStyle(ev);
  }
};

var _dragEnd = function _dragEnd(ev) {
  ev.preventDefault();
  ev.persist();
  this.dragEndWithDnDStyle();
  var _deltaX = Math.abs(this.clientX - ev.clientX),
      _props = this.props,
      item = _props.item,
      onRemoveUnder = _props.onRemoveUnder;

  if (_deltaX > DELTA.REMOVE_UNDER) {
    onRemoveUnder(item);
  } else if (_deltaX > DELTA.REMOVE_ITEM) {
    this._handleClose();
  }
};
var _onTouchEnd = function _onTouchEnd(ev) {
  //ev.preventDefault()
  ev.persist();
  this.dragEndWithDnDStyle();
  var _clientX = _getChangedTouches(ev);
  if (_clientX) {
    var _deltaX = Math.abs(this._clientX - _clientX),
        _props2 = this.props,
        item = _props2.item,
        onRemoveUnder = _props2.onRemoveUnder;

    if (_deltaX > DELTA.REMOVE_UNDER) {
      onRemoveUnder(item);
    } else if (_deltaX > DELTA.REMOVE_ITEM) {
      this._handleClose();
    }
  }
};
var _preventDefault = function _preventDefault(ev) {
  ev.preventDefault();
};

var _crDnDHandlers = function _crDnDHandlers() {
  return HAS_TOUCH ? {
    onTouchStart: this._onTouchStart.bind(this),
    onTouchMove: this._onTouchMove.bind(this),
    onTouchEnd: this._onTouchEnd.bind(this)
  } : {
    draggable: true,
    onDragStart: this._dragStart.bind(this),
    onDragEnd: this._dragEnd.bind(this),
    onDrop: this._preventDefault,
    onDragOver: this._preventDefault,
    onDragEnter: this._preventDefault,
    onDragLeave: this._preventDefault
  };
};

var withDnD = function withDnD(target) {
  (0, _withDnDStyle2.default)(target);
  Object.assign(target.prototype, {
    _dragStart: _dragStart,
    _onTouchStart: _onTouchStart,
    _onTouchMove: _onTouchMove,
    _dragEnd: _dragEnd,
    _onTouchEnd: _onTouchEnd,
    _preventDefault: _preventDefault,
    _crDnDHandlers: _crDnDHandlers
  });
};

exports.default = withDnD;
//# sourceMappingURL=withDnD.js.map