"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _isStr = function _isStr(str) {
  return typeof str === 'string';
};

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
    var _textInput = _isStr(textInput) ? textInput : '';

    return _domParser.parseFromString(_textInput, "text/html").documentElement.textContent;
  }
};
var _default = Dom;
exports["default"] = _default;
//# sourceMappingURL=Dom.js.map