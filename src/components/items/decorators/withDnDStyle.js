
const BORDER_LEFT = 'border-left'
const DRAG_START_BORDER_LEFT = "4px solid #D64336"
let _node = undefined;

const _dragStart = function(ev){
  if (_node){
    _node.style.removeProperty(BORDER_LEFT)
  }
  _node = ev.currentTarget
  _node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
}

const _dragEnd = function(ev){
  _node.style.removeProperty(BORDER_LEFT)
  _node = undefined
}

const withDnDStyle = (target) => {
  const _proto = target.prototype;
  _proto.dragStartWithDnDStyle = _dragStart
  _proto.dragEndWithDnDStyle = _dragEnd
}

export default withDnDStyle
