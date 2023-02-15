import {
  useEffect,
  useImperativeHandle
} from '../uiApi';
import useRefInit from '../hooks/useRefInit';
import useKeyEnter from '../hooks/useKeyEnter';

import ResizeElementImpl from './ResizeElementImpl'

const useResizeElement = (
  props,
  ref
) => {
  const resizeImpl = useRefInit(() => {
    return new ResizeElementImpl(props);
  })
  , _onMinusWidth = useKeyEnter(props.onMinusWidth)
  , _onPlusWidth = useKeyEnter(props.onPlusWidth);

  /*eslint-disable react-hooks/exhaustive-deps */
  useImperativeHandle(ref, () => ({
    toWidth: resizeImpl.toWidth,
    resizeBy: resizeImpl.resizeBy
  }), [])
  // resizeImpl.toWidth, resizeImpl.resizeBy

  useEffect(() => {
    return () => resizeImpl.clearInterval();
  }, [])
  // resizeImpl
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    resizeImpl.hStartResizeLeft,
    resizeImpl.hStartResizeRight,
    resizeImpl.hStopResize,
    _onMinusWidth,
    _onPlusWidth
  ];
};

export default useResizeElement
