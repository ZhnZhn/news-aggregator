import React, { Component } from 'react'
import PropTypes from 'prop-types'

const STYLE = {
  ROOT: {
    backgroundColor: '#4D4D4D',
    lineHeight: 2.5
  },
  SVG: {
    width: '16px',
    height: '16px',
    display: 'inline-block'
  },
  ROOT_CAPTION: {
    paddingLeft: '12px'
  },
  CAPTION: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: '#9e9e9e',
    //color: '#8a8a8a',
    //color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  INLINE : {
    display: 'inline-block'
  },
  BLOCK : {
    display: 'block'
  },
  NONE : {
    display : 'none'
  }
};

const //FILL_OPEN = '#009688'
      FILL_OPEN = '#9e9e9e'
      //FILL_OPEN = '#8a8a8a'
    , FILL_CLOSE = '#4D4D4D'
    , PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
    , PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

class OpenClose extends Component {
  static propTypes = {
    isClose: PropTypes.bool,

    style: PropTypes.object,
    styleNotSelected: PropTypes.object,
    styleCaption: PropTypes.object,

    caption: PropTypes.string,
    fillOpen: PropTypes.string,
    fillClose: PropTypes.string,

    isDraggable: PropTypes.bool,
    option: PropTypes.object,
    onDragStart: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func,

    children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
    ])
  }

  static defaultProps = {
    isClose: true,
    fillOpen: FILL_OPEN,
    fillClose: FILL_CLOSE
  }

  constructor(props){
    super()
    this.state = {
      isOpen: !props.isClose
    }
  }

  _handleToggle = () => {
    this.setState({ isOpen : !this.state.isOpen })
  }

  render(){
    const {
            style, styleNotSelected, styleCaption, caption,
            fillOpen, fillClose,
            isDraggable, option, onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop,
            children
          } = this.props
          , _dragOption = (isDraggable)
               ? {
                     draggable : true,
                     onDragStart : onDragStart.bind(null, option),
                     onDrop : onDrop.bind(null, option),
                     onDragEnter : onDragEnter,
                     onDragOver : onDragOver,
                     onDragLeave : onDragLeave
                 }
              : undefined ;

    let _pathV, _fillV, _styleCollapse, _classShow, _styleNotSelected;
    if (this.state.isOpen){
      _pathV = PATH_OPEN;
      _fillV = fillOpen;
      _styleCollapse = STYLE.BLOCK;
      _classShow = 'show-popup';
      _styleNotSelected = null;
    } else {
      _pathV = PATH_CLOSE;
      _fillV = fillClose;
      _styleCollapse = STYLE.NONE;
      _classShow = null;
      _styleNotSelected = styleNotSelected;
    }

    return (
      <div style={{...STYLE.ROOT, ...style}}>
        <div
           className="not-selected"
           style={{...STYLE.ROOT_CAPTION, ..._styleNotSelected }}
           onClick={this._handleToggle}
           {..._dragOption}
         >
          <div style={STYLE.SVG}>
             <svg
                viewBox="0 0 16 16" width="100%" height="100%"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                style={STYLE.INLINE}
              >
             <path
                d={_pathV}
                fill={_fillV}
                strokeWidth="1" stroke={fillOpen}
             >
             </path>
             </svg>
         </div>
         <span style={{...STYLE.CAPTION, ...styleCaption}} >
            {caption}
         </span>
       </div>
      <div
         className={_classShow}
         style={_styleCollapse}
       >
        {children}
      </div>
     </div>
    )
  }
}

export default OpenClose
