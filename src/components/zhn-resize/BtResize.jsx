import {
  useRef,
  EVENT_TOUCH_START,
  EVENT_TOUCH_END
} from '../uiApi';

import useTooltip from '../hooks/useTooltip';
import usePassiveTouchEvent from '../hooks/usePassiveTouchEvent';

import Svg100 from '../zhn/svg/Svg100';

const CL_BT_RESIZE = "bt-resize select-none";

const BtResize = ({
  to,
  ariaLabel,
  dataPos,
  style,
  startResize,
  stopResize,
  onKeyDown,
  children
}) => {
  const _refBt = useRef()
  , _x = to === 'r'
    ? '11'
    : '1'
  , [
    _ariaLabel,
    _dataPos
  ] = useTooltip(ariaLabel, dataPos);

  usePassiveTouchEvent(_refBt, EVENT_TOUCH_START, startResize)
  usePassiveTouchEvent(_refBt, EVENT_TOUCH_END, stopResize)

  return (
    <button
       ref={_refBt}
       type="button"
       aria-label={_ariaLabel}
       data-pos={_dataPos}
       className={CL_BT_RESIZE}
       style={style}
       onMouseDown={startResize}
       onMouseUp={stopResize}
       onKeyDown={onKeyDown}
    >
       <Svg100
         w="12"
         strokeWidth="1.5"
         strokeLinecap="round"
         fill="none"
       >
         <path d="M 1,6 L 11,6" />
         <path d={`M 6,2 L ${_x},6 6,10`} />
       </Svg100>
    </button>
  );
}

export default BtResize
