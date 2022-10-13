import { useCallback } from '../uiApi';

import useToggle from '../hooks/useToggle';

const CL_CAPTION = 'open-close select-none'
, CL_SHOW_POPUP = 'show-popup'

, S_ROOT = {
  backgroundColor: '#4d4d4d',
  lineHeight: 2.5
}
, S_ROOT_CAPTION = { paddingLeft: 12 }
, S_CAPTION = {
  color: '#9e9e9e',
  paddingLeft: 4,
  verticalAlign: 'top',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer'
}
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };


const FILL_OPEN = '#9e9e9e'
, FILL_CLOSE = 'transparent'
, PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
, PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const OpenClose = ({
  isClose=true,
  style,
  itemStyle,
  captionStyle,
  caption,
  fillOpen=FILL_OPEN,
  fillClose=FILL_CLOSE,
  children
}) => {
  const [
    isOpen,
    toggleIsOpen
  ] = useToggle(!isClose)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(evt => {
    if (event.keyCode === 13 || event.keyCode === 27) {
      toggleIsOpen()
    }
  }, []);
  //toggleIsOpen
  /*esline-enable react-hooks/exhaustive-deps */

  let _pathV
  , _fillV
  , _styleCollapse
  , _classShow
  , _itemStyle;
  if (isOpen){
   _pathV = PATH_OPEN;
   _fillV = fillOpen;
   _styleCollapse = S_BLOCK;
   _classShow = CL_SHOW_POPUP;
   _itemStyle = null;
  } else {
   _pathV = PATH_CLOSE;
   _fillV = fillClose;
   _styleCollapse = S_NONE;
   _classShow = null;
   _itemStyle = itemStyle;
  }

  return (
    <div style={{...S_ROOT, ...style}}>
      <div
         role="button"
         className={CL_CAPTION}
         tabIndex="0"
         style={{...S_ROOT_CAPTION, ..._itemStyle}}
         onClick={toggleIsOpen}
         onKeyDown={_hKeyDown}
      >
        <svg
          viewBox="0 0 16 16" width="16" height="16"
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={_pathV}
            fill={_fillV}
            strokeWidth="1"
            stroke={fillOpen}
          />
        </svg>
        <span style={{...S_CAPTION, ...captionStyle}} >
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

export default OpenClose
