import {
  isFn,
  useMemo
} from '../uiApi';
import isKeyEnter from './isKeyEnter';

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEnter = (
  fn,
  deps
) => useMemo(() => isFn(fn) ? evt => {
  if (isKeyEnter(evt)) {
    fn(evt)
  }
} : void 0, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEnter
