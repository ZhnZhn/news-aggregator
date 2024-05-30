import {
  isArr,
  isStr,
  safeMap,
  toFirstUpperCase
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

const _crOptionItem = str => [
  toFirstUpperCase(str),
  str
];
export const crSelectOptions = (
  values
) => safeMap(values, _crOptionItem) || []
