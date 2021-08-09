
const S = {
  SCROLL_DIV : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  DIV_WRAPPER : {
    paddingLeft: 12,
    paddingRight: 5,
    lineHeight : 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  DIV_TEXT: {
    lineHeight: 1.8
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  APP_TITLE: {
    color: '#80c040'
  },
  STEP: {
    marginTop: 3
  },
  BLACK: {
    color: 'black'
  },
  MARGIN_TOP: {
    marginTop: 8
  },
  PROVIDER: {
    color: '#009ae5'
  }
};

const styleConfig = {
  //themeName : void 0,
  //style : void 0,
  createStyle : (CSS_RULE) => {
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      ROOT : {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      },
      ...S
    }
  }
}

export default styleConfig
