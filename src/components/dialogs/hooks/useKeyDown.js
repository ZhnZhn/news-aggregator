import {
  KEY_ENTER,
  KEY_ESCAPE,
  useCallback
} from '../../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyDown = (
  hLoad,
  hClose
) => useCallback(evt => {
  if (evt.key === KEY_ENTER) {
    hLoad?.()
  } else if (evt.key === KEY_ESCAPE) {
    hClose?.()
  }
}, [])
//hLoad, hClose
/*eslint-enable react-hooks/exhaustive-deps */

export default useKeyDown
