import { useCallback } from 'react';

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEscape = onKeyEscape => useCallback(event => {
  const { keyCode } = event || {};
  if (keyCode === 27) {
    onKeyEscape()
  }
}, [])
// onKeyEscape
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyEscape