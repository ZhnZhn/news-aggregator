import { forwardRef } from '../uiApi';
import useKeyEnter from '../hooks/useKeyEnter';

const MenuItem = forwardRef(({
  className,
  caption,
  onClick
}, ref) => {
  const _hKeyDown = useKeyEnter(onClick);

  return (
    <div
      ref={ref}
      role="menuitem"
      tabIndex="0"
      className={className}
      onClick={onClick}
      onKeyDown={_hKeyDown}
    >
      {caption}
    </div>
  );
});

export default MenuItem
