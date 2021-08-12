import { useCallback } from 'react';

const _fnNoop = () => {};

/*eslint-disable react-hooks/exhaustive-deps */
const useKeyDown = (
  hLoad=_fnNoop,
  hClose=_fnNoop
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
