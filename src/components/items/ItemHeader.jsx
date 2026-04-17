import {
  isFn,
  useMemo
} from '../uiApi';

import BtSvgX from '../zhn/BtSvgX';
import { CL_ITEM_CAPTION } from './Item.Style';

const ItemHeader = ({
  refEl,
  className,
  style,
  btCloseStyle,
  title,
  onKeyDown,
  onClick,
  onToggle,
  onClose
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const [
    _hKeyDown,
    _hClose
  ] = useMemo(() => [
    evt => {
      if (evt.keyCode === 13) {
        onToggle()
      } else {
        if (isFn(onKeyDown)) {
          onKeyDown(evt)
        }
      }
    },
    evt => {
      evt.stopPropagation()
      onClose()
    }
  ], [])
  //onToggle, onKeyDown
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="button"
      ref={refEl}
      tabIndex="0"
      className={className}
      style={style}
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      <span className={CL_ITEM_CAPTION}>
         {title}
      </span>
      <BtSvgX
        style={btCloseStyle}
        onClick={_hClose}
      />
    </div>
  );
};

export default ItemHeader
