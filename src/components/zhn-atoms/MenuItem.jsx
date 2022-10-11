import {
  forwardRef,
  useCallback
} from '../uiApi';

const FN_NOOP = () => {};

const MenuItem = forwardRef(({
  className,
  caption,
  onClick=FN_NOOP,
  onClose=FN_NOOP
}, ref) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hKeyDown = useCallback(evt => {
    const { keyCode } = evt;
    if (keyCode === 13) {
      onClick()
    } else if (keyCode === 27) {
      onClose(evt)
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
