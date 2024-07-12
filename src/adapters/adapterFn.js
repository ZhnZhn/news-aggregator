import { isNumber } from '../utils/isTypeFn';

export const toMls = sec => isNumber(sec)
  ? sec*1000
  : void 0

export const joinByBlank = (
  ...args
) => args
 .filter(Boolean)
 .join(' ')
