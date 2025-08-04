import { isFn } from '../../utils/isTypeFn';

import {
  useMemo,
  KEY_ENTER,
  KEY_SPACE
} from '../uiApi';

export const isKeyEnterOrSpace = (
  evt
) => evt.key === KEY_ENTER || evt.key === KEY_SPACE

/*eslint-disable react-hooks/exhaustive-deps */
export const useKeyEnterOrSpace = (
  fn,
  deps
) => useMemo(() => isFn(fn) ? evt => {
  if (isKeyEnterOrSpace(evt)) {
    fn()
  }
} : void 0, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */
