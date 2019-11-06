import React, { Component } from 'react';
//import PropTypes from "prop-types";

import has from '../has'

const CL = "svg-resize";

const { HAS_TOUCH } = has;

const _isFn = fn => typeof fn === 'function';
const _isNaN = Number.isNaN || isNaN;

const S = {
  ROOT_DIV : {
    display : 'inline-block',
    lineHeight: '24px'
  },
  BT_DIV : {
    marginLeft : 10
  }
};

class SvgHrzResize extends Component {
  /*
  static propTypes = {
    minWidth: PropTypes.number,
    maxWidth: PropTypes.number,
    getDomNode: PropTypes.func,
    onResizeAfter: PropTypes.func
  }
  */
  static defaultProps = {
     getDomNode: () => {}
  }

  constructor(props){
    super(props)
    this.id = null
    this.domNode = null
    this.delta = 0
    this.step = 1
    this.countStep = 0
    this.isResizeAfter = _isFn(props.onResizeAfter)

    this._leftBtHandlers = HAS_TOUCH ? {
      onTouchStart: this._hStartResize.bind(this, this._resizeLeft),
      onTouchEnd: this._hStopResize.bind(this, true)
    } : {
      onMouseDown: this._hStartResize.bind(this, this._resizeLeft),
      onMouseUp: this._hStopResize.bind(this, true),
    }

    this._rightBtHandlers = HAS_TOUCH ? {
      onTouchStart: this._hStartResize.bind(this, this._resizeRight),
      onTouchEnd: this._hStopResize.bind(this, true)
    } : {
      onMouseDown: this._hStartResize.bind(this, this._resizeRight),
      onMouseUp: this._hStopResize.bind(this, true)
    }


    this.state = {}
  }

  _initDomNode = () => {
    if (!this.domNode) {
      const { minWidth, maxWidth, getDomNode } = this.props;
      this.domNode = getDomNode();
      this.initWidth = this.domNode.getBoundingClientRect().width;
      this.currentWidth = this.initWidth;
      this.minDelta = minWidth - this.initWidth;
      this.maxDelta = maxWidth - this.initWidth;
    }
  }

  _increaseStepValue = () => {
    this.countStep +=1;
    if ( this.countStep > 30){
      this.step = 3;
    } else if ( this.countStep > 15){
      this.step = 2;
    }
    if ( (this.maxDelta - this.delta) < 20 ||
         (this.delta - this.minDelta) < 20    ){
      this.step = 1;
    }
  }

  _resizeLeft = () => {
    if (this.delta > this.minDelta){
      this.delta -= this.step;
      this.currentWidth = this.initWidth + this.delta;
      this.domNode.style.width = this.currentWidth + 'px';
      this._increaseStepValue();
    }
  }
  _resizeRight = () => {
    if (this.delta < this.maxDelta){
      this.delta += this.step;
      this.currentWidth = this.initWidth + this.delta;
      this.domNode.style.width = this.currentWidth + 'px';
      this._increaseStepValue();
    }
  }

  _updateDelta = () => {
    const w = parseInt(this.domNode.style.width);
    if (!_isNaN(w)) {
      this.delta = w - this.initWidth
    }
  }
  _hStartResize = (fnResize) => {
    //evt.preventDefault()
    this._initDomNode()
    this._updateDelta()
    if (this.id !== null){
      this._hStopResize(false);
    }
    this.id = setInterval(fnResize, 5);
  }
  _hStopResize = (isOnResizeAfter, evt) => {
    evt.preventDefault()
    clearInterval(this.id);
    this._initDomNode()
    this.id = null;
    this.step = 1;
    this.countStep = 0;

    if (isOnResizeAfter && this.isResizeAfter){
      this.props.onResizeAfter(this.currentWidth);
    }
  }

  render(){
    return (
      <div style={S.ROOT_DIV}>
        <div
           className={CL}
           style={S.BT_DIV}
           title="Resize container horizontal left"
           {...this._leftBtHandlers}
        >
           <svg viewBox="0 0 12 12" width="100%" height="100%"
               preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path
                   d="M 1,6 L 11,6"
                   strokeWidth="2"
                   strokeLinecap="round"
                />
               <path
                   d="M 6,2 L 1,6 6,10"
                   strokeWidth="2"
                   strokeLinecap="round"
                   fill="none"
               />
          </svg>
      </div>
      <div
         className={CL}
         style={S.BT_DIV}
         title="Resize container horizontal right"
         {...this._rightBtHandlers}
      >
        <svg viewBox="0 0 12 12" width="100%" height="100%"
             preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
             <path
                   d="M 1,6 L 11,6"
                   strokeWidth="2"
                   strokeLinecap="round"
            />
            <path
                  d="M 6,2 L 11,6 6,10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
           />
        </svg>
      </div>
    </div>
  );
  }
}

export default SvgHrzResize
