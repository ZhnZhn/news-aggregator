import {
  CL_ROW_NEWS_SOURCE
} from '../styles/CL';
//color: #009ae5 - header_browser

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (CSS_RULE, themeName) => {
    return {
      CL_ROW: CL_ROW_NEWS_SOURCE,

      BROWSER: {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      },      
      BADGE: {
        ...CSS_RULE.BG_HEADER
      }
    };
  }
}

export default styleConfig
