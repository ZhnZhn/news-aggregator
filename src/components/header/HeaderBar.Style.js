import { CL_BT_FLAT_DIV } from '../styles/CL';

const styleConfig = {
  //themeName: void 0,
  //style: void 0,

  createStyle: (CSS_RULE) => {
    return {
      HEADER: {
        ...CSS_RULE.BG
      },
      PANE: {
        ...CSS_RULE.BG
      },
      BT: {
        CL_FLAT_DIV: CL_BT_FLAT_DIV
      }
    }
  }
}

export default styleConfig
