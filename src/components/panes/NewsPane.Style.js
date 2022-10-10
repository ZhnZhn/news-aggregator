
const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (CSS_RULE, themeName) => {
    let _paneRoot;
    switch(themeName){
      case 'WHITE':
        _paneRoot = { backgroundColor: 'rgb(235, 241, 245)' }
        break;
      case 'SAND':
        _paneRoot = { backgroundColor: '#e8e0cb' }
        break;
      default:
    }
    return {
      PANE_CAPTION: {
        ...CSS_RULE.BG_HEADER
      },
      PANE_ROOT: {
        ..._paneRoot
      }
    };
  }
}

export default styleConfig
