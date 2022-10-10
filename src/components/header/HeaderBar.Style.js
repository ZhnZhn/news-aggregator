import {
  CL_BT_FLAT_DIV
} from '../styles/CL';

const styleConfig = {
  themeName : void 0,
  style : void 0,

  createStyle : (CSS_RULE) => {
    return {
      HEADER: {
        ...CSS_RULE.BG
      },
      PANE: {
        ...CSS_RULE.BG
      },
      BT: {
        FLAT_ROOT: {
          color: CSS_RULE.BG_HEADER.backgroundColor
        },
        CL_FLAT_DIV: CL_BT_FLAT_DIV
      }
    }
  }
}

export default styleConfig
