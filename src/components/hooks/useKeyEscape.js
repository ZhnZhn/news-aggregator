import { useCallback } from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEscape = onKeyEscape => useCallback(evt => {
  if (evt && evt.keyCode === 27) {
    onKeyEscape()
  }
}, [])
// onKeyEscape
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEscape
