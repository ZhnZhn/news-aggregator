import {
  S_BLOCK,
  S_NONE,
  CL_SHOW_POPUP
} from '../crStyle';

import useToggle from '../hooks/useToggle';
import useKeyEnter from '../hooks/useKeyEnter';

const CL_OPEN_CLOSE = 'open-close select-none'
, S_ROOT = {
  lineHeight: 2.5
}
, S_ROOT_CAPTION = {
  paddingLeft: 10
}
, S_CAPTION = {
  paddingLeft: 4,
  verticalAlign: 'top',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer'
};

const FILL_OPEN = "currentColor"
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
    _classShow
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
        null
    ];

  return (
    <div style={{...S_ROOT, ...style}}>
      <div
         ref={refBt}
         role="button"
         className={CL_OPEN_CLOSE}
         tabIndex="0"
         style={S_ROOT_CAPTION}
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
