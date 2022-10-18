import {
  useEffect
} from '../uiApi';

const useMqlOnChange = (
  mql,
  onChange
) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (mql) {
      mql.addEventListener('change', onChange)
    }
    return () => {
      if (mql) {
        mql.removeEventListener('change', onChange)
      }
    }
  }, [])
  // mql, onChange
  /*eslint-enable react-hooks/exhaustive-deps */
}

export default useMqlOnChange
