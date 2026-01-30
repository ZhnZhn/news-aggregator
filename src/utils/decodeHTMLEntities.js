import { isStr } from './isTypeFn';

const _hmHtmlEntities = Object.assign(
  Object.create(null), {
  '&nbsp;': ' ',
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"',
  '&apos;': "'",
  '&amp;': '&'
})
, _reHtmlEntities = new RegExp(
    Object.keys(_hmHtmlEntities).join('|'),
    'g'
)
, _reHtmlCode = new RegExp('&#(\\d+);?', 'g')
, _reHtmlFilter = new RegExp('&#x200B;', 'g')
, _onMatch = (match) => _hmHtmlEntities[match];

export const decodeHtmlEntitiesByHashMap = str => ((isStr(str) && str) || '')
  .replace(_reHtmlEntities, _onMatch)

export const decodeHtmlEntities = str => ((isStr(str) && str) || '')
  .replace(_reHtmlCode, (_, code) => String.fromCharCode(code))
  .replace(_reHtmlFilter, '')
