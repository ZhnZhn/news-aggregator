import { forwardRef } from '../uiApi';
import useKeyEnter from '../hooks/useKeyEnter';

const FN_NOOP = () => {};

const MenuItem = forwardRef(({
  className,
  caption,
  onClick=FN_NOOP
}, ref) => {
  const _hKeyDown = useKeyEnter(onClick);

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
