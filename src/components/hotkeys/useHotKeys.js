import {
  useEffect,
  isFn
} from '../uiApi';
import {
  HAS_HOT_KEYS,
  HOT_KEY_EVENT,
  hmHotKeys,
  clearHotKeys
} from './hm-hotkeys';

const _onKeyDown = (evt) => {
  if ((evt.altKey || evt.metaKey) && evt.key) {
    const _onKeyDownHotKey = hmHotKeys[evt.key.toUpperCase()];
    if (isFn(_onKeyDownHotKey)) {
      evt.stopImmediatePropagation()
      _onKeyDownHotKey()
    }
  }
};

const useHotKeys = () => {
  useEffect(() => HAS_HOT_KEYS
    ? (
        document.addEventListener(HOT_KEY_EVENT, _onKeyDown, false),
        () => {
          clearHotKeys()
          document.removeEventListener(HOT_KEY_EVENT, _onKeyDown, false)
        }
      )
     : void 0
  , [])
}

export default useHotKeys
