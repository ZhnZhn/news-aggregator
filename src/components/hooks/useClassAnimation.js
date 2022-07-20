import {
  useRef,
  useEffect
} from '../uiApi';

import useRerender from './useRerender';

const useClassAnimation = ({
  isShow,
  CL,
  S,
  initialWasClosed=true,
  timeout=450
}) => {
  const [
    _wasRerendered,
    _rerender
  ] = useRerender()
  , _refWasClosed = useRef(initialWasClosed)
  , _refPrevIsShow = useRef(isShow);
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect( () => {
    if (_refPrevIsShow.current && !isShow) {
      setTimeout(
        () => {
          _refWasClosed.current = true;
          _rerender()
        },
        timeout
      )
    }
    _refPrevIsShow.current = isShow
    _refWasClosed.current = false
  }, [isShow, _wasRerendered]);
  /*eslint-enable react-hooks/exhaustive-deps */

  const [
    className,
    style
  ] = _refWasClosed.current
    ? [CL.INIT, S.INIT]
    : isShow
       ? [CL.SHOWING, S.SHOWING]
       : [CL.HIDING, S.HIDING];

  return {
    className,
    style
  };
}

export default useClassAnimation
