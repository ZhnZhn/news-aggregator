import toFirstUpperCase from '../../utils/toFirstUpperCase';

const _isArr = Array.isArray;

export const getItemCaption = (
  item
) => _isArr(item)
 ? item[0]
 : '';

export const getItemValue = (
  item
) => _isArr(item)
 ? item[1] || item[0]
 : void 0;

export const crSelectOptions = (
  values
) => (values || []).map(str => [
   toFirstUpperCase(str),
   str
]);
