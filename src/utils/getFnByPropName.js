import { isFn } from './isTypeFn';

const getFnByPropName = (
  obj,
  propName,
  dfValue
) => obj && propName && isFn(obj[propName])
  ? obj[propName]
  : () => dfValue;

export default getFnByPropName
