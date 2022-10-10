import {
  CL_ROW_NEWS_SOURCE
} from '../styles/CL';
//color: #009ae5 - header_browser

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (CSS_RULE, themeName) => {
    const _itemColor = themeName === 'WHITE'
      ? { color: '#5f5f5f' }
      : void 0;
    return {
      CL_ROW: CL_ROW_NEWS_SOURCE,

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
