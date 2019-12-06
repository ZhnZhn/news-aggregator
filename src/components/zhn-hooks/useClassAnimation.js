import { useRef, useEffect } from 'react'

import useForceUpdate from './useForceUpdate'

const useClassAnimation = ({
  isShow, CL, S,
  initialWasClosed=true,
  timeout=450
}) => {
  const [_wasUpdated, _forceUpdate] = useForceUpdate()
  , _refWasClosed = useRef(initialWasClosed)
  , _refPrevIsShow = useRef(isShow);
  useEffect( () => {
    if (_refPrevIsShow.current && !isShow) {
      setTimeout(
        () => {
          _refWasClosed.current = true;
          _forceUpdate()
        },
        timeout
      )
    }
    _refPrevIsShow.current = isShow
    _refWasClosed.current = false
  }, [isShow, _wasUpdated]);
  let className, style;
  if (_refWasClosed.current) {
    className = CL.INIT;
    style = S.INIT;
  } else {
    className = isShow ? CL.SHOWING : CL.HIDING;
    style = isShow ? S.SHOWING : S.HIDING;
  }
  return { className, style };
}

export default useClassAnimation
