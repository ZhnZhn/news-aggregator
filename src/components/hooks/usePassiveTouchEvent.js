import {
  useEffect,
  getRefValue
} from '../uiApi';

import {
  HAS_TOUCH_EVENTS
} from '../has';

const EVENT_OPTIONS = { passive: true };

const usePassiveTouchEvent = (
  refElement,
  EVENT_NAME,
  onEvent
) => {
  useEffect(() => {
    const _el = getRefValue(refElement);
    if (HAS_TOUCH_EVENTS && _el) {
       _el.addEventListener(EVENT_NAME, onEvent, EVENT_OPTIONS)
    }
    return () => {
      if (HAS_TOUCH_EVENTS && _el) {
        _el.removeEventListener(EVENT_NAME, onEvent, EVENT_OPTIONS)
      }
    }
  }, [EVENT_NAME, onEvent, refElement])
}

export default usePassiveTouchEvent
