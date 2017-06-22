
const S = {
  BROWSER_CAPTION: {
    padding: '5px',
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '0px'
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
      SELECT: {
        CL_ITEM: CSS_RULE.CL_SELECT_ITEM,
        ROOT: {
          width: '280px'
        },
        MODAL_PANE: {
          ...CSS_RULE.BG,
        }
      }
    };
  }
}

export default styleConfig
