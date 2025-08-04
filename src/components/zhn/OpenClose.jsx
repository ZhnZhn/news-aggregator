import {
  isFn,
  useId
} from '../uiApi';

import {
  S_BLOCK,
  S_NONE,
  CL_SHOW_POPUP
} from '../crStyle';

import useToggle from '../hooks/useToggle';
import { useKeyEnterOrSpace } from '../hooks/fUseKey';

import Svg from './svg/Svg';

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
  children,
  onToggle
}) => {
  const _childrenWrapperId = useId()
  , [
    isOpen,
    toggleIsOpen
  ] = useToggle(!isClose)
  , _onToggle = isFn(onToggle) ? () => {
    onToggle(!isOpen, caption, toggleIsOpen)
    toggleIsOpen()
  } : toggleIsOpen
  , _hKeyDown = useKeyEnterOrSpace(
    _onToggle,
    [_onToggle]
  )
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
         aria-expanded={isOpen}
         aria-controls={_childrenWrapperId}
         tabIndex="0"
         style={S_ROOT_CAPTION}
         onClick={_onToggle}
         onKeyDown={_hKeyDown}
      >
        <Svg w="16">
          <path
            d={_pathV}
            fill={_fillV}
            strokeWidth="1"
            stroke={fillOpen}
          />
        </Svg>
        <span style={{...S_CAPTION, ...captionStyle}} >
           {caption}
        </span>
     </div>
    <div
       id={_childrenWrapperId}
       className={_classShow}
       style={_styleCollapse}
     >
      {children}
    </div>
   </div>
  );
};

export default OpenClose
