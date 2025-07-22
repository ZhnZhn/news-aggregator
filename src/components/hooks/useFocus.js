import {
  useRef,
  focusRefElement
} from '../uiApi';

import { HAS_KEYBOARD_FOCUS } from '../has';

import useEffectTimeoutIf from './useEffectTimeoutIf';

export const useAsyncFocusFirstItemIf = (
  isVisible,
  getFirstElement,
  mls = 350
) => {
  useEffectTimeoutIf(
    HAS_KEYBOARD_FOCUS && isVisible,
    () => focusRefElement(getFirstElement),
    mls
  )
}

export const useItemsFocusTrap = (
  items,
  isVisible,
  isFirstItem = !0
) => {
  const _refFirstItem = useRef()
  , _refLastItem = useRef()
  , _getRefItem = index => isFirstItem && index === 0
    ? _refFirstItem
    : index === items.length - 1
    ? _refLastItem
    : void 0;

  useAsyncFocusFirstItemIf(
    isVisible,
    _refFirstItem
  )

  return [
    _refFirstItem,
    _refLastItem,
    _getRefItem
  ];
}
