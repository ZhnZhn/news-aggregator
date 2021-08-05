import { forwardRef, useCallback } from 'react';

import SvgX from '../zhn-atoms/SvgX';

const ItemHeader = forwardRef(({
  isShow,
  className,
  style, captionStyle, btCloseStyle,
  title,
  onClick,
  onHide,
  onClose
}, ref) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hClose = useCallback(evt => {
    evt.stopPropagation()
    onClose()
  }, [])
  //onClose
  , _hKeyDown = useCallback(evt => {
    const { keyCode } = evt;
    if (keyCode === 13) {
      if (!isShow) {
        onClick()
      } else {
        onHide()
      }
    } else if (keyCode === 27 && isShow) {
      onClick()
    } else if (keyCode === 8 || keyCode === 46) {
      onClose()
    }
  }, [isShow])
  //onClick, onHide, onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="button"
      ref={ref}
      tabIndex="0"
      className={className}
      style={style}
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      <span
         className="not-selected"
         style={captionStyle}
      >
         {title}
      </span>
      <SvgX
          style={btCloseStyle}
          onClick={_hClose}
      />
    </div>
  );
});

export default ItemHeader
