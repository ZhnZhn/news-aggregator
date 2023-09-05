
const MAX_ALLOW_SENTENCE = 30;
const MAX_LENGTH = 180;

export const splitByParagraph = (
  strInput,
  maxLength=MAX_LENGTH
) => {
  if (!(strInput && typeof strInput === "string")) {
    return "";
  }

  const _reg = /\.\s["A-Z]/g
  , _sentences = [];
  let _fromIndex = 0
  , _toIndex
  , _matches
  , _sentence
  , _recenIndex
  , _recentSentence;
  while((_matches = _reg.exec(strInput)) !== null){
    _toIndex = _matches.index
    _sentence = strInput.substring(_fromIndex, _toIndex+1)
    _recenIndex = _sentences.length-1
    _recentSentence = _sentences[_recenIndex]
    if (_recentSentence && ((_recentSentence.length + _sentence.length) < maxLength)) {
      _sentences[_recenIndex] = _recentSentence + ' ' + _sentence
    } else {
      _sentences.push(_sentence)
    }
    _fromIndex = _toIndex + 2
    if (_sentences.length > MAX_ALLOW_SENTENCE) {
      break;
    }
  }
  return _sentences.length === 0
    ? strInput
    : _sentences.join("\n\n");
}
