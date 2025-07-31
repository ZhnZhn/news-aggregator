import {
  useRef,
  useCallback,

  KEY_ARROW_UP,
  KEY_ARROW_DOWN,
  KEY_HOME,
  KEY_END,
  KEY_ESCAPE,
  KEY_TAB,

  stopDefaultFor
} from '../uiApi';

import {
  focusNextItem,
  focusPrevItem,
  focusFirstItem,
  focusLastItem
} from './OptionFn';

const useKeyDownArrow = (
  onClose
) => {
  const _refItemFocused = useRef();
  /*eslint-disable react-hooks/exhaustive-deps */
  return [
    _refItemFocused,
    useCallback(evt => {
      if (evt.key === KEY_ARROW_DOWN || evt.key === KEY_TAB) {
        stopDefaultFor(evt)
        focusNextItem(_refItemFocused)
      } else if (evt.key === KEY_ARROW_UP) {
        stopDefaultFor(evt)
        focusPrevItem(_refItemFocused)
      } else if (evt.key === KEY_HOME) {
        stopDefaultFor(evt)
        focusFirstItem(_refItemFocused)
      } else if (evt.key === KEY_END) {
        stopDefaultFor(evt)
        focusLastItem(_refItemFocused)
      } else if (evt.key === KEY_ESCAPE) {
        stopDefaultFor(evt)
        onClose()
      }
    }, [])
    //onClose
    /*eslint-enable react-hooks/exhaustive-deps */
  ];
}

export default useKeyDownArrow
