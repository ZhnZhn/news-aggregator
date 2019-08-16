'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _domParser = DOMParser ? new DOMParser() : {
  parseFromString: function parseFromString(textInput) {
    return {
      documentElement: {
        textContent: textInput
      }
    };
  }
};

var Dom = {
  htmlDecode: function htmlDecode(textInput) {
    var _textInput = typeof textInput === 'string' ? textInput : '';
    var doc = _domParser.parseFromString(_textInput, "text/html");
    return doc.documentElement.textContent;
  }
};

exports.default = Dom;
//# sourceMappingURL=Dom.js.map