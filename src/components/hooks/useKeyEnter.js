import { useCallback } from '../uiApi';
import isKeyEnter from './isKeyEnter';

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEnter = (
  fn,
  deps
) => useCallback(event => {
  if (isKeyEnter(event)) { fn(event) }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEnter
