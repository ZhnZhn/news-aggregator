import { isStr } from './isTypeFn';

export const toFirstUpperCase = (
  str
) => isStr(str)
  ? str.charAt(0).toUpperCase() + str.slice(1)
  : '';
