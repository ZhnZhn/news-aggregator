const _hm = {
  '&nbsp;': ' ',
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"',
  '&apos;': "'",
  '&amp;': '&'
}
, _onMatch = (match) => _hm[match]
, decodeHTMLEntities = str => ((typeof str === 'string' && str) || '')
   .replace(/&#(\d+);?/g, (_, code) => String.fromCharCode(code))
   .replace(/&quot;|&amp;|&apos;|&gt;|&lt;|&nbsp;/g, _onMatch);

export default decodeHTMLEntities
