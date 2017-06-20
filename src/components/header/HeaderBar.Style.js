
const styleConfig = {
  themeName : undefined,
  style : undefined,

  createStyle : (CSS_RULE) => {
    return {
      CL_QUERY_ITEM: CSS_RULE.CL_QUERY_ITEM,
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
        CL_FLAT_DIV: CSS_RULE.CL_BT_FLAT_DIV
      }
    }
  }
}

export default styleConfig
