import { useState } from '../uiApi';

import {
  S_BLOCK,
  S_NONE
} from '../crStyle';

import useEffectTimeoutIf from '../hooks/useEffectTimeoutIf';

const useCanBeHidden = (
  canBeHidden
) => {
  const [
    hasBeenHidden,
    setHasBeenHidden
  ] = useState(!1);

  useEffectTimeoutIf(
    canBeHidden,
    () => setHasBeenHidden(!0),
    500,
  )

  if (!canBeHidden) {
    setHasBeenHidden(!1)
  }

  return hasBeenHidden
    ? S_NONE
    : S_BLOCK;
};

export default useCanBeHidden
