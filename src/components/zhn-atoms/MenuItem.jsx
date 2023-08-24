import { forwardRef } from '../uiApi';
import useKeyEnter from '../hooks/useKeyEnter';

const MenuItem = forwardRef(({
  className,
  style,
  caption,
  children,
  onClick
}, ref) => {
  const _hKeyDown = useKeyEnter(onClick);

  return (
    <div
      ref={ref}
      role="menuitem"
      tabIndex="0"
      className={className}
      style={style}
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      {caption || children}
    </div>
  );
});

export default MenuItem
