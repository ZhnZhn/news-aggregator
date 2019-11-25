import has from '../../has'
import withDnDStyle from './withDnDStyle'

const { HAS_TOUCH } = has
, DELTA = HAS_TOUCH ? {
    MARK_REMOVE: 50,
    REMOVE_ITEM: 90,
    REMOVE_UNDER: 150
  } : {
    MARK_REMOVE: 25,
    REMOVE_ITEM: 35,
    REMOVE_UNDER: 150
  };

const _getTouchesClientX = (ev) =>
  (((ev || {}).touches || [])[0] || {}).clientX || 0;
const _getChangedTouches = (ev) =>
  (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;

const _dragStart = function(ev) {
  ev.persist()
  this.clientX = ev.clientX
  this.dragStartWithDnDStyle(ev)
  ev.dataTransfer.effectAllowed="move"
  ev.dataTransfer.dropEffect="move"
};
const _onTouchStart = function(ev) {
  ev.persist()
  const _clientX = _getTouchesClientX(ev);
  if (_clientX) {
    this._clientX = _clientX
  }
};
const _onTouchMove = function(ev) {
  ev.persist()
  const _clientX = _getTouchesClientX(ev);
  if (_clientX
     && Math.abs(this._clientX -  _clientX) > DELTA.MARK_REMOVE) {
    this.dragStartWithDnDStyle(ev)
  }
};

const _dragEnd = function(ev) {
  ev.preventDefault()
  ev.persist()
  this.dragEndWithDnDStyle()
  const _deltaX = Math.abs(this.clientX - ev.clientX)
      , { item, onRemoveUnder } = this.props;
  if (_deltaX > DELTA.REMOVE_UNDER) {
    onRemoveUnder(item)
  } else if (_deltaX > DELTA.REMOVE_ITEM){
    this._handleClose()
  }
};
const _onTouchEnd = function(ev) {
  //ev.preventDefault()
  ev.persist()
  this.dragEndWithDnDStyle()
  const _clientX = _getChangedTouches(ev);
  if (_clientX) {
    const _deltaX = Math.abs(this._clientX - _clientX)
        , { item, onRemoveUnder } = this.props;
    if (_deltaX > DELTA.REMOVE_UNDER) {
      onRemoveUnder(item)
    } else if (_deltaX > DELTA.REMOVE_ITEM){
      this._handleClose()
    }
  }
};
const _preventDefault = function(ev) {
  ev.preventDefault()
};

const _crDnDHandlers = function(){
  return HAS_TOUCH
   ? {
      onTouchStart: this._onTouchStart.bind(this),
      onTouchMove: this._onTouchMove.bind(this),
      onTouchEnd: this._onTouchEnd.bind(this)
     }
   : {
      draggable: true,
      onDragStart: this._dragStart.bind(this),
      onDragEnd: this._dragEnd.bind(this),
      onDrop: this._preventDefault,
      onDragOver: this._preventDefault,
      onDragEnter: this._preventDefault,
      onDragLeave: this._preventDefault
    };
};


const withDnD = (target) => {
  withDnDStyle(target)
  Object.assign(target.prototype, {
     _dragStart,
     _onTouchStart,
     _onTouchMove,
     _dragEnd,
     _onTouchEnd,
     _preventDefault,
     _crDnDHandlers
  })
};


export default withDnD
