import { useKeyEnterOrSpace } from '../hooks/fUseKey';

const MenuItem = ({
  refEl,
  className,
  style,
  caption,
  children,
  onClick
}) => {
  const _hKeyDown = useKeyEnterOrSpace(onClick);
  return (
    <div
      ref={refEl}
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
};

export default MenuItem
