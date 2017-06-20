
//color: #009ae5 - header_browser

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle : (CSS_RULE, themeName) => {
    let _clMenuItem, _itemColor;
    switch(themeName){
      case 'WHITE':
        _clMenuItem = "row__news-source--white"
        _itemColor = { color: '#5f5f5f' }
        break;
      default:
        _clMenuItem = "row__news-source"
    }
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      CL_MENU_ITEM: _clMenuItem,

      ROOT: {
        ...CSS_RULE.BG
      },
      OPEN_CLOSE: {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      },
      ITEM: {
        borderBottom: "1px solid #9e9e9e",
        ..._itemColor
      },
      BADGE: {
        ...CSS_RULE.BG_HEADER
      }
    };
  }
}

export default styleConfig
