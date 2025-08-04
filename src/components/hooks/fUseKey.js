import { isFn } from '../../utils/isTypeFn';

import {
  useMemo,
  KEY_ENTER,
  KEY_SPACE,
  KEY_DELETE,
  KEY_ESCAPE
} from '../uiApi';

import { HAS_KEYBOARD_FOCUS } from '../has';

export const isKeyEnterOrSpace = (
  evt
) => evt.key === KEY_ENTER || evt.key === KEY_SPACE

const _fOnKeyFnEvt = (
  isKey,
  fn
) => isFn(fn) ? evt => {
  if (isKey(evt)) {
    fn()
  }
} : void 0;

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (
  fn,
  deps
) => useMemo(
  () => _fOnKeyFnEvt(isKey, fn),
  deps || []
)
/*eslint-enable react-hooks/exhaustive-deps */

export const useKeyEnterOrSpace = _fUseKey(isKeyEnterOrSpace)

const _isKeyDelete = evt => evt.key === KEY_DELETE
export const useKeyDelete = _fUseKey(_isKeyDelete)

export const useKeyEscape = (
  onKeyEscape,
  isPropagation
) => HAS_KEYBOARD_FOCUS
/*eslint-disable react-hooks/exhaustive-deps*/
/*eslint-disable react-hooks/rules-of-hooks*/
? useMemo(() => evt => {
    if (evt.key === KEY_ESCAPE) {
      onKeyEscape()
      if (!isPropagation) {
        evt.stopPropagation()
      }
    }
  }, [])
: void 0;
// onKeyEscape
/*eslint-enable react-hooks/exhaustive-deps */
/*eslint-enable react-hooks/rules-of-hooks*/
