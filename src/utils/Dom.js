const _isStr = str => typeof str === 'string';

const _domParser = DOMParser
   ? new DOMParser()
   : {
       parseFromString: textInput => ({
          documentElement: {
              textContent: textInput
          }
       })
     };

const Dom = {
  htmlDecode(textInput){
     const _textInput = _isStr(textInput) ? textInput : ''
     return _domParser
       .parseFromString(_textInput, "text/html")
       .documentElement.textContent;
  }
};

export default Dom
