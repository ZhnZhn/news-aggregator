

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle : (CSS_RULE, themeName) => {
    let _paneRoot;
    switch(themeName){
      case 'WHITE':
        _paneRoot = { backgroundColor: 'rgb(235, 241, 245)' }
        break
      default:
    }
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
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
