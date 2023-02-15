import { useEffect } from '../uiApi';

const KEY_DOWN = 'keydown';

const useRefHotKey = (
  ref,
  onKeyDown,
  hotKey
) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const _div = ref.current
    , _onKeyDown = (evt) => {
      if ((evt.altKey || evt.metaKey)
           && evt.key
           && evt.key.toUpperCase() === hotKey
         ) {
         evt.stopImmediatePropagation()
         onKeyDown()
      }
    }
    _div.addEventListener(KEY_DOWN, _onKeyDown, false)
    return () => {
      _div.removeEventLister(KEY_DOWN, _onKeyDown, false)
    }
  }, [])
  //ref, onKeyDown, hotKey
  /*eslint-enable react-hooks/exhaustive-deps */
}

export default useRefHotKey
