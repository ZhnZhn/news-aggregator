import {
  FN_NOOP,
  useCallback
} from '../uiApi';
import { HAS_KEYBOARD_FOCUS } from '../has';

const useKeyEscape = (
  onKeyEscape,
  isPropagation
) => HAS_KEYBOARD_FOCUS
/*eslint-disable react-hooks/exhaustive-deps*/
/*eslint-disable react-hooks/rules-of-hooks*/
? useCallback(evt => {
    if (evt && evt.keyCode === 27) {
      onKeyEscape()
      if (!isPropagation) {
        evt.stopPropagation()
      }
    }
  }, [])
: FN_NOOP;
// onKeyEscape
/*eslint-enable react-hooks/exhaustive-deps */
/*eslint-enable react-hooks/rules-of-hooks*/

export default useKeyEscape
