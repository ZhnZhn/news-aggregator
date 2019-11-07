
let _node;
const BORDER_LEFT = 'border-left'
, DRAG_START_BORDER_LEFT = "4px solid #d64336"
, _dragStart = function(ev){
    if (_node) {
      _node.style.removeProperty(BORDER_LEFT)
    }
    _node = ev.currentTarget
    _node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
  }
, _dragEnd = function(ev){
    if (_node) {
      _node.style.removeProperty(BORDER_LEFT)
      _node = void 0
    }
  };

const withDnDStyle = (target) => {
  Object.assign(target.prototype, {
    dragStartWithDnDStyle: _dragStart,
    dragEndWithDnDStyle: _dragEnd
  })
};

export default withDnDStyle
