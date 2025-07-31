import {
  toFirstUpperCase
} from '../../utils/toFirstUpperCase';
import {
  isArr,
  isStr
} from '../../utils/isTypeFn';

import {
  safeMap,
  getRefValue,
  setRefValue
} from '../uiApi';

export const FOCUS_NEXT_OPTION = "n"
export const FOCUS_PREV_OPTION = "p"

export const getItemCaption = (
  item
) => isArr(item)
 ? item[0]
 : '';

export const getItemValue = (
  item
) => {
  const value = isArr(item)
    ? isStr(item[1])
      ? item[1]
      : item[0]
    : void 0;
 return isStr(value)
   ? value.trim()
   : value;
}

const _crOptionItemWithFirstUpperCase = str => [
  toFirstUpperCase(str),
  str
];
const _crOptionItem = str => [
  str,
  str
];
export const crSelectOptions = (
  values,
  isNotFirstUpperCase
) => safeMap(
  values,
  isNotFirstUpperCase ? _crOptionItem : _crOptionItemWithFirstUpperCase
) || []


const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};

export const setItemFocus = (
  elItem,
  ref
) => elItem
  ? (
  elItem.scrollIntoView(SCROLL_OPTIONS),
  elItem.focus(),
  setRefValue(ref, elItem),
  !0
) : !1;

const _fFocusItem = propName => ref => {
  const _elItem = (getRefValue(ref) || {})[propName];
  return setItemFocus(_elItem, ref);
};

export const focusNextItem = _fFocusItem('nextSibling');
export const focusPrevItem = _fFocusItem('previousSibling');

const _fFocusParentItem = propName => ref => {
  const _elItem = ((getRefValue(ref) || {}).parentNode || {})[propName];
  setItemFocus(_elItem, ref)
}

export const focusFirstItem = _fFocusParentItem('firstChild');
export const focusLastItem = _fFocusParentItem('lastChild');
