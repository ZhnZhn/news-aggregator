import { Component } from 'react';
import has from '../has';

const BORDER_LEFT = 'border-left';
const DRAG_START_BORDER_LEFT = "4px solid #d64336";

const LONG_TOUCH = 1000;

const _assign = Object.assign;

const _getTouchClietX = touches => touches
  && touches[0]
  && touches[0].clientX;

const _getClientX = (ev) => {
  if (ev.clientX) { return ev.clientX; }
  const { targetTouches, changedTouches } = ev;
  return _getTouchClietX(targetTouches)
    || _getTouchClietX(changedTouches)
    || 0;
};

const _styleNode = (node) => {
  node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
};
const _setMoveStyle = (node, dX) => {
  _assign(node.style, {
    right: dX + 'px',
    opacity: (1 - (0.5*Math.abs(dX))/60)
  })
};
const _setEndStyle = (node, isInitialStyle) => {
  node.style.removeProperty(BORDER_LEFT)
  if (isInitialStyle) {
    _assign(node.style, {
      right: 0,
      opacity: 1
    })
  }
};

const _noopFn = () => {};

class GestureSwipeX extends Component {
  /*
  static propTypes = {
    style: PropTypes.object,
    setTimeStamp: PropTypes.func,
    onGesture: PropTypes.func
  }
  */

  static defaultProps = {
    setTimeStamp: _noopFn
  }

  //_clientX = 0
  //_isGestureStart = false
  //_isMoveStart = false

  constructor(props){
    super(props)
    this._handlers = has.HAS_TOUCH ? {
        onTouchStart: this._gestureStart,
        onTouchMove: this._gestureMove,
        onTouchEnd: this._gestureEnd
      } : {
        onMouseDown: this._gestureStart,
        onMouseMove: this._gestureMove,
        onMouseUp: this._gestureEnd
     }
  }


  _gestureStartImpl = (node) => {
    this._isGestureStart = true
    _styleNode(node)
  }
   _gestureStart = (ev) => {
     const node = ev.currentTarget;
     if (!this._isGestureStart) {
      this._gestureId = setTimeout(
        () => this._gestureStartImpl(node),
        LONG_TOUCH
      )
     } else {
       clearTimeout(this._gestureId)
       this._isGestureStart = false
       _setEndStyle(node, true)
     }
   }

   _gestureMove = (ev) => {
     ev.preventDefault()
     if (this._isGestureStart) {
       const _clientX = _getClientX(ev);
       if (_clientX) {
         if (!this._isMoveStart){
           this._clientX = _clientX
           this._isMoveStart = true
         } else {
           const _dX = this._clientX - _clientX;
           if (_dX < 0) {
             _setMoveStyle(ev.currentTarget, _dX)
           }
         }
       }
     }
   }

   _gestureEnd = (ev) => {
     const { setTimeStamp, onGesture } = this.props;
     if (this._isGestureStart) {
       let _isInitialStyle = false;
       if (this._isMoveStart) {
         ev.preventDefault()
         setTimeStamp(ev.timeStamp)
         const _clientX = _getClientX(ev)
         , _dX = this._clientX - _clientX;
         _isInitialStyle = _dX < 0 && onGesture(Math.abs(_dX));
         this._isMoveStart = false
       }
       this._isGestureStart = false
       _setEndStyle(ev.currentTarget, _isInitialStyle)
     } else {
       clearTimeout(this._gestureId)
     }
   }

  render(){
    const { divRef, style, children } = this.props;
    return (
      <div
        ref={divRef}
        role="presentation"
        style={style}
        {...this._handlers}
      >
        {children}
      </div>
    );
  }
}

export default GestureSwipeX
