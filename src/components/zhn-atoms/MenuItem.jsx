import React, { useCallback } from 'react';

const _fnNoop = () => {};

const MenuItem = React.forwardRef(({
  className,
  caption,
  onClick=_fnNoop,
  onClose=_fnNoop
}, ref) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hKeyDown = useCallback((event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      onClick()
    } else if (keyCode === 27) {
      onClose({ target: ref.current })
    }
  }, []);
  //oncLick, onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      ref={ref}
      role="menuitem"
      className={className}
      tabIndex="0"
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      {caption}
    </div>
  );
});

export default MenuItem
