import toFirstUpperCase from '../../utils/toFirstUpperCase';

const _isArr = Array.isArray
, _isStr = value => typeof value === 'string';

export const getItemCaption = (
  item
) => _isArr(item)
 ? item[0]
 : '';

export const getItemValue = (
  item
) => _isArr(item)
 ? _isStr(item[1])
     ? item[1]
     : item[0]
 : void 0;

export const crSelectOptions = (
  values
) => (values || []).map(str => [
   toFirstUpperCase(str),
   str
]);
