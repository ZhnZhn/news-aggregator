import {
  toFirstUpperCase
} from '../../utils';
import {
  isArr,
  isStr
} from '../../utils/isTypeFn';

import {
  safeMap
} from '../uiApi';

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
