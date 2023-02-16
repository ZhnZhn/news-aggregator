import { useEffect } from '../uiApi';

import {
  HAS_HOT_KEYS,
  addHotKey,
  removeHotKey
} from './hm-hotkeys';

const useHotKey = (
  hotKey,
  onKeyDown
) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => HAS_HOT_KEYS && hotKey
    ? (
        addHotKey(hotKey, onKeyDown),
        () => removeHotKey(hotKey, onKeyDown)
      )
    : void 0
  , [])
  //hotKey, onKeyDown
  /*eslint-disable react-hooks/exhaustive-deps */
}

export default useHotKey
