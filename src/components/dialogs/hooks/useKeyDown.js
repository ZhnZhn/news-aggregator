import { useCallback } from '../../uiApi';

const FN_NOOP = () => {};

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyDown = (
  hLoad=FN_NOOP,
  hClose=FN_NOOP
) => useCallback(evt => {
  const { keyCode } = evt;
  if (keyCode === 13){
    hLoad()
  } else if (keyCode === 27){
    hClose()
  }
}, [])
//hLoad, hClose
/*eslint-enable react-hooks/exhaustive-deps */


export default useKeyDown
