import { isNumber } from './isTypeFn';

const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;

export const formatNumber = (
  value
) => isNumber(value)
  ? value >= 1000
      ? ('' + value).replace(REPLACER_PATTERN, '$1,')
      : '' + value
  : void 0
