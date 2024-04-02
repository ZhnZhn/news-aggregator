import { 
  useEffect,
  isFn
} from '../uiApi';
import {
  HAS_HOT_KEYS,
  HOT_KEY_EVENT
} from './hm-hotkeys';

const useRefHotKey = (
  ref,
  hotKey,
  onKeyDown
) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const _element = HAS_HOT_KEYS && ref && ref.current
    , _onKeyDown = (evt) => {
      if ((evt.altKey || evt.metaKey)
           && evt.key
           && evt.key.toUpperCase() === hotKey
         ) {
         evt.stopImmediatePropagation()
         onKeyDown()
      }
    }
    return _element && isFn(onKeyDown)
      ? (
          _element.addEventListener(HOT_KEY_EVENT, _onKeyDown, false),
          () => _element.removeEventLister(HOT_KEY_EVENT, _onKeyDown, false)
        )
      : void 0;
  }, [])
  //ref, hotKey, onKeyDown
  /*eslint-enable react-hooks/exhaustive-deps */
}

export default useRefHotKey
