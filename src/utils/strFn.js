import { isStr } from './isTypeFn';

export const toLowerCase = (
  v
) => isStr(v)
  ? v.toLowerCase()
  : v

export const trimStr = (
  v
) => isStr(v)
  ? v.trim()
  : ''
