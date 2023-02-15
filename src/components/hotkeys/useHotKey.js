import { useEffect } from '../uiApi';
import { HAS_TOUCH_EVENTS } from '../has';
import {
  addHotKey,
  removeHotKey
} from './hm-hotkeys';

const useHotKey = (
  hotKey,
  onKeyDown
) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    if (hotKey && !HAS_TOUCH_EVENTS) {
      addHotKey(hotKey, onKeyDown)
    }
    return () => {
      removeHotKey(hotKey, onKeyDown)
    }
  }, [])
  //hotKey, onKeyDown
  /*eslint-disable react-hooks/exhaustive-deps */
}

export default useHotKey
