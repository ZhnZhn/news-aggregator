import {
  useEffect,
  getRefValue,
  PASSIVE_EVENT_OPTIONS
} from '../uiApi';

import {
  HAS_TOUCH_EVENTS
} from '../has';

const usePassiveTouchEvent = (
  refElement,
  EVENT_NAME,
  onEvent
) => {
  useEffect(() => {
    const _el = getRefValue(refElement);
    if (HAS_TOUCH_EVENTS && _el) {
       _el.addEventListener(EVENT_NAME, onEvent, PASSIVE_EVENT_OPTIONS)
    }
    return () => {
      if (HAS_TOUCH_EVENTS && _el) {
        _el.removeEventListener(EVENT_NAME, onEvent, PASSIVE_EVENT_OPTIONS)
      }
    }
  }, [EVENT_NAME, onEvent, refElement])
}

export default usePassiveTouchEvent
