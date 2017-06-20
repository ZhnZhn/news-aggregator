
const S = {
  BROWSER_CAPTION: {
    padding: '5px',
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px'
  },
  BT_RAISED_ROOT: {
    marginRight: '2px',
    marginLeft: '2px'
  }
}

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle : (CSS_RULE, themeName) => {
    return {
      //CL_BT_RAISED_DIV: CSS_RULE.CL_BT_RAISED_DIV,
      R_DIALOG: {
        ...CSS_RULE.R_DIALOG
      },
      BROWSER_CAPTION: {
        ...S.BROWSER_CAPTION,
        ...CSS_RULE.BG_HEADER
      },
      BT: {
        CL_RAISED_DIV: CSS_RULE.CL_BT_RAISED_DIV,
        RAISED_ROOT: {
          ...S.BT_RAISED_ROOT,
          ...CSS_RULE.BG_HEADER
        }
      },
      /*
      BT_RAISED_ROOT: {
        ...S.BT_RAISED_ROOT,
        ...CSS_RULE.BG_HEADER
      }
      */
    };
  }
}

export default styleConfig
