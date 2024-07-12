import { isNumber } from './isTypeFn';

const isNumberInRange = (
  min,
  max,
  v
) => isNumber(v)
 && v>=min && v<=max;

export default isNumberInRange
