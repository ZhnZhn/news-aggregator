import { useRef } from '../uiApi';
import usePassiveTouchEvent from '../hooks/usePassiveTouchEvent';
import { crWithScrollCn } from '../crStyle';

const ScrollPane = (props) => {
  const _refDiv = useRef();
  usePassiveTouchEvent(_refDiv, "scroll", props.onScroll)
  return (
    <div
      ref={_refDiv}
      className={crWithScrollCn(props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default ScrollPane
