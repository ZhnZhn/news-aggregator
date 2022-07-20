import { useCallback } from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyDelete = (
  fn,
  deps
) => useCallback(event => {
  if (event.keyCode === 46) {
    fn(event)
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyDelete
