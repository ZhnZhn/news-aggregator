import { isStr } from './isTypeFn';

const _reHtmlCode = /'&#(\d+);?'/g
, _reHtmlFilter = /'&#x200B;'/g

export const decodeHtmlEntities = str => ((isStr(str) && str) || '')
  .replace(_reHtmlCode, (_, code) => String.fromCharCode(code))
  .replace(_reHtmlFilter, '')
