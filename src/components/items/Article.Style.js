
//230, 236, 240

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle: (CSS_RULE, themeName) => {
    let _header, _descr
    switch(themeName){
      case 'WHITE':
        _header = {
          backgroundColor: '#dfe4e7'
        }
        _descr = {
          backgroundColor: 'white'
        }
        break;
      case 'SAND':
        _header = {
          backgroundColor: '#c6bda5'
        }
        _descr = {
          backgroundColor: '#e8e0cb'
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
