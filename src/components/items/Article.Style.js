
//230, 236, 240

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle: (CSS_RULE, themeName) => {
    let _header, _descr
    switch(themeName){
      case 'WHITE':
        _header = {
          backgroundColor: 'rgb(230, 236, 240)'
        }
        _descr = {
          backgroundColor: 'white'
        }
        break;
      default:
        _header = {
          backgroundColor: '#404040'
        }
    }
    return {
       HEADER: {
         ..._header
       },
       DESCR: {
         ..._descr
       }
    };
  }
}

export default styleConfig
