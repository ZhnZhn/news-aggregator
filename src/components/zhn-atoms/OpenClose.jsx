import {
  S_BLOCK,
  S_NONE
} from '../zhn-utils/crStyle';

import useToggle from '../hooks/useToggle';
import useKeyEnter from '../hooks/useKeyEnter';

const CL_CAPTION = 'open-close select-none'
, CL_SHOW_POPUP = 'show-popup'

, S_ROOT = {
  backgroundColor: '#4d4d4d',
  lineHeight: 2.5
}
, S_ROOT_CAPTION = {
  paddingLeft: 12
}
, S_CAPTION = {
  color: '#9e9e9e',
  paddingLeft: 4,
  verticalAlign: 'top',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer'
};

const FILL_OPEN = '#9e9e9e'
, FILL_CLOSE = 'transparent'
, PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
, PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const OpenClose = ({
  refBt,
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
  , _hKeyDown = useKeyEnter(toggleIsOpen)
  , [
    _pathV,
    _fillV,
    _styleCollapse,
    _classShow,
    _itemStyle
  ] = isOpen
    ? [
        PATH_OPEN,
        fillOpen,
        S_BLOCK,
        CL_SHOW_POPUP
    ] : [
        PATH_CLOSE,
        fillClose,
        S_NONE,
        null,
        itemStyle
    ];

  return (
    <div style={{...S_ROOT, ...style}}>
      <div
         ref={refBt}
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
