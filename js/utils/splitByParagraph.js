"use strict";

exports.__esModule = true;
exports.splitByParagraph = void 0;
var _isTypeFn = require("./isTypeFn");
const MAX_ALLOW_SENTENCE = 30;
const MAX_LENGTH = 180;
const splitByParagraph = function (strInput, maxLength) {
  if (maxLength === void 0) {
    maxLength = MAX_LENGTH;
  }
  if (!(strInput && (0, _isTypeFn.isStr)(strInput))) {
    return "";
  }
  const _reg = /\.\s["A-Z]/g,
    _sentences = [];
  let _fromIndex = 0,
    _toIndex,
    _matches,
    _sentence,
    _recenIndex,
    _recentSentence;
  while ((_matches = _reg.exec(strInput)) !== null) {
    _toIndex = _matches.index;
    _sentence = strInput.substring(_fromIndex, _toIndex + 1);
    _recenIndex = _sentences.length - 1;
    _recentSentence = _sentences[_recenIndex];
    if (_recentSentence && _recentSentence.length + _sentence.length < maxLength) {
      _sentences[_recenIndex] = _recentSentence + ' ' + _sentence;
    } else {
      _sentences.push(_sentence);
    }
    _fromIndex = _toIndex + 2;
    if (_sentences.length > MAX_ALLOW_SENTENCE) {
      break;
    }
  }
  return _sentences.length === 0 ? strInput : _sentences.join("\n\n");
};
exports.splitByParagraph = splitByParagraph;
//# sourceMappingURL=splitByParagraph.js.map