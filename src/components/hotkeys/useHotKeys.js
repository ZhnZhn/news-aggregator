import { useEffect } from '../uiApi';
import {
  hmHotKeys,
  clearHotKeys
} from './hm-hotkeys';

const KEY_DOWN = 'keydown';
const _isFn = fn => typeof fn === 'function';

const useHotKeys = () => {
  useEffect(() => {
    const _onKeyDown = (evt) => {
      if ((evt.altKey || evt.metaKey) && evt.key) {
        const _onKeyDownHotKey = hmHotKeys[evt.key.toUpperCase()];
        if (_isFn(_onKeyDownHotKey)) {
          evt.stopImmediatePropagation()
          _onKeyDownHotKey()
        }
      }
    };
    document.addEventListener(KEY_DOWN, _onKeyDown, false)
    return () => {
      clearHotKeys()
      document.removeEventListener(KEY_DOWN, _onKeyDown, false)
    }
  }, [])
}

export default useHotKeys
