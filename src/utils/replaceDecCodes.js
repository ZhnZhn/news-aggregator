
const _hm = {
  '&#8217;': "'",
  '&#039;': "'",
  '&#8230;': '…',
  '&#8211;': '–',
  '&#8220;': '“',
  '&#8221;': '”',
  '&quot;': '"',
  '&#160;': ' '
}
, _regDecCodes = /&#8217;|&#039;|&#8230;|&#8211;|&#8220;|&#8221;|&quot;|&#160;/g
, _onMatch = (match) => _hm[match]
, replaceDecCodes = str => ((typeof str === 'string' && str) || '')
    .replace(_regDecCodes, _onMatch);

export default replaceDecCodes
