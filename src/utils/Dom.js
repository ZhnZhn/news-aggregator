const _domParser = (DOMParser)
         ? new DOMParser()
         : {
             parseFromString: (textInput) => {
                return {
                  documentElement : {
                    textContent : textInput
                  }
                };
              }
           }

const Dom = {

  htmlDecode(textInput){
     const _textInput = (typeof textInput === 'string')
              ? textInput : ''; 
     const doc = _domParser.parseFromString(_textInput, "text/html");
     return doc.documentElement.textContent;
  }

};

export default Dom
