import { useRef } from '../uiApi';
import usePassiveTouchEvent from '../hooks/usePassiveTouchEvent';
import { crWithScrollCn } from '../crStyle';

const ScrollPane = ({
  style,
  className,
  onScroll,
  children
}) => {
  const _refDiv = useRef();
  usePassiveTouchEvent(_refDiv, "scroll", onScroll)
  return (
    <div
      ref={_refDiv}
      className={crWithScrollCn(className)}
      style={style}
    >
      {children}
    </div>
  );
}

export default ScrollPane
