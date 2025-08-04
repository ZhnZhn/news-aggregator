import { isFn } from '../../utils/isTypeFn';

import {
  useMemo,
  KEY_ENTER,
  KEY_SPACE,
  KEY_DELETE
} from '../uiApi';

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
