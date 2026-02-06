import { useEffect } from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const useSubscribe = (
  store,
  selector,
  onChange
) => {
  useEffect(
    () => store.subscribe(selector, onChange),
    []
  )
  //store, selector, onChange
}
/*eslint-enable react-hooks/exhaustive-deps */

export default useSubscribe
