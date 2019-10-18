'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
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

exports.default = Dom;
//# sourceMappingURL=Dom.js.map