import { useState, useCallback } from 'react';
//import PropTypes from 'prop-types'

const CL_CAPTION = 'open-close not-selected';
const CL_SHOW_POPUP = 'show-popup';

const S = {
  ROOT: {
    backgroundColor: '#4d4d4d',
    lineHeight: 2.5
  },
  SVG: {
    display: 'inline-block',
    width: 16,
    height: 16,
  },
  ROOT_CAPTION: {
    paddingLeft: 12
  },
  CAPTION: {
    color: '#9e9e9e',
    paddingLeft: 4,
    verticalAlign: 'top',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  INLINE: {
    display: 'inline-block'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

const FILL_OPEN = '#9e9e9e'
, FILL_CLOSE = 'transparent'
, PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
, PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const OpenClose = ({
  isClose=true,
  style, itemStyle, captionStyle,
  caption,
  fillOpen=FILL_OPEN,
  fillClose=FILL_CLOSE,
  children
}) => {
  const [isOpen, setIsOpen] = useState(!isClose)
  , _hToggle = useCallback(() => setIsOpen(is=>!is), [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(evt => {
    if (event.keyCode === 13 || event.keyCode === 27 ) {
      _hToggle()
    }
  }, [])
  //_hToggle
  /*esline-enable react-hooks/exhaustive-deps */

  let _pathV, _fillV, _styleCollapse, _classShow, _itemStyle;
  if (isOpen){
   _pathV = PATH_OPEN;
   _fillV = fillOpen;
   _styleCollapse = S.BLOCK;
   _classShow = CL_SHOW_POPUP;
   _itemStyle = null;
  } else {
   _pathV = PATH_CLOSE;
   _fillV = fillClose;
   _styleCollapse = S.NONE;
   _classShow = null;
   _itemStyle = itemStyle;
  }

  return (
    <div style={{...S.ROOT, ...style}}>
      <div
         role="button"
         className={CL_CAPTION}
         tabIndex="0"
         style={{...S.ROOT_CAPTION, ..._itemStyle }}
         onClick={_hToggle}
         onKeyDown={_hKeyDown}
       >
        <div style={S.SVG}>
           <svg
              viewBox="0 0 16 16" width="100%" height="100%"
              preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
              style={S.INLINE}
            >
           <path
              d={_pathV}
              fill={_fillV}
              strokeWidth="1"
              stroke={fillOpen}
           />
           </svg>
       </div>
       <span style={{...S.CAPTION, ...captionStyle}} >
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
  );
};

/*
 OpenClose.propTypes = {
  isClose: PropTypes.bool,

  style: PropTypes.object,
  captionStyle: PropTypes.object,
  itemStyle: PropTypes.object,

  caption: PropTypes.string,
  fillOpen: PropTypes.string,
  fillClose: PropTypes.string,

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/

export default OpenClose
