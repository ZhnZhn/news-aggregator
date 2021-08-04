import { forwardRef } from 'react';

import useKeyEnter from '../hooks/useKeyEnter';

const MenuAriaItem = forwardRef(({
  className,
  style,
  children,
  onClick,
  onReg
}, ref) => {
  const _hKeyDown = useKeyEnter(onClick);

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      role="menuitem"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      {children}
    </div>
  );
})

/*
MenuAriaItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  onReg: PropTypes.func
}
*/

export default MenuAriaItem
