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
, _reHtmlCode = /&#(\d+);?/g
, _onMatch = (match) => _hmHtmlEntities[match]
, decodeHTMLEntities = str => ((typeof str === 'string' && str) || '')
   .replace(_reHtmlCode, (_, code) => String.fromCharCode(code))
   .replace(_reHtmlEntities, _onMatch);

export default decodeHTMLEntities
