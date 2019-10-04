
//color: #009ae5 - header_browser

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (CSS_RULE, themeName) => {
    const _itemColor = themeName === 'WHITE'
              ? { color: '#5f5f5f' }
              : undefined;
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      CL_ROW: CSS_RULE.CL_ROW_NEWS_SOURCE,

      BROWSER: {
        ...CSS_RULE.BG
      },
      OPEN_CLOSE: {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      },
      ITEM: {
        ..._itemColor
      },
      BADGE: {
        ...CSS_RULE.BG_HEADER
      }
    };
  }
}

export default styleConfig
