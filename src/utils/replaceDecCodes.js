
const _hm = {
  '&#039;': "'",
  '&#038;': "&",
  '&#124;': '|',
  '&#160;': ' ',
  '&#8230;': '…',
  '&#8221;': '”',
  '&#8220;': '“',
  '&#8217;': "'",
  '&#8216;': "'",
  '&#8211;': '–',
  '&quot;': '"',
}
, _regDecCodes = /&#8217;|&#8216;|&#039;|&#038;|&#124;|&#8230;|&#8211;|&#8220;|&#8221;|&quot;|&#160;/g
, _onMatch = (match) => _hm[match]
, replaceDecCodes = str => ((typeof str === 'string' && str) || '')
    .replace(_regDecCodes, _onMatch);

export default replaceDecCodes
