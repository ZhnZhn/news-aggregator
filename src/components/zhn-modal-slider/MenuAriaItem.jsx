import { useRef, useCallback } from 'react';
import useRegRef from '../hooks/useRegRef';

const MenuAriaItem = ({
  className,
  style,
  children,
  onReg,
  onClick
}) => {
  const _ref = useRef(null)  
  , _hKeyPress = useCallback((evt)=>{
    evt.preventDefault()
    const { which } = evt;
    if (which === 13 || which === 32) {
      onClick()
    }
  }, [onClick]);

  useRegRef(onReg, _ref)

  return (
    <div
      ref={onReg ? _ref : void 0}
      className={className}
      style={style}
      role="menuitem"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={_hKeyPress}
    >
      {children}
    </div>
  );
};

export default MenuAriaItem
