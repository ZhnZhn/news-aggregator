import { useMemo } from '../uiApi';

import { CL_SELECT_NONE } from '../crStyle';
import SvgX from '../zhn/SvgX';

const FN_NOOP = () => {};
const COLOR_SVG_X = "grey";

const ItemHeader = ({
  refEl,
  className,
  style,
  captionStyle,
  btCloseStyle,
  title,
  onKeyDown=FN_NOOP,
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
        onKeyDown(evt)
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
      <span
        className={CL_SELECT_NONE}
        style={captionStyle}
      >
         {title}
      </span>
      <SvgX
        style={btCloseStyle}
        color={COLOR_SVG_X}
        onClick={_hClose}
      />
    </div>
  );
};

export default ItemHeader
