import { useKeyEnterOrSpace } from '../hooks/fUseKey';

const MenuItem = (props) => {
  const _hKeyDown = useKeyEnterOrSpace(props.onClick);
  return (
    <div
      ref={props.refEl}
      role="menuitem"
      tabIndex="0"
      className={props.className}
      style={props.style}
      onClick={props.onClick}
      onKeyDown={_hKeyDown}
    >
      {props.caption || props.children}
    </div>
  );
};

export default MenuItem
