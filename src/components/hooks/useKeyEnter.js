import {
  isFn,
  useMemo
} from '../uiApi';
import {
  isKeyEnterOrSpace
} from './fUseKey';

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEnter = (
  fn,
  deps
) => useMemo(() => isFn(fn) ? evt => {
  if (isKeyEnterOrSpace(evt)) {
    fn(evt)
  }
} : void 0, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEnter
