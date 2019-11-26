
const INPUT_WIDTH = 240;

const S = {
  BROWSER_CAPTION: {
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    paddingTop: 5,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: '18px'
  },
  BT_RAISED_ROOT: {
    marginRight: 2,
    marginLeft: 2
  },
  INPUT_ROOT: {
    width: INPUT_WIDTH,
    display: 'block'
  },
  INPUT_DATE: {
    display: 'inline-block',
    width: 110
  },
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (CSS_RULE, themeName) => {
    return {
      R_DIALOG: {
        ...CSS_RULE.R_DIALOG
      },
      BROWSER_CAPTION: {
        ...S.BROWSER_CAPTION,
        ...CSS_RULE.BG_HEADER
      },
      INPUT_ROOT: {
        ...S.INPUT_ROOT
      },
      INPUT_DATE: {
        ...S.INPUT_DATE
      },
      POWERED_BY: {
        ...S.POWERED_BY
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
          width: INPUT_WIDTH
        },
        MODAL_PANE: {
          ...CSS_RULE.BG,
        }
      }
    };
  }
}

export default styleConfig
