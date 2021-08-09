
const S = {
  SCROLL_DIV: {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  },
  DIV_WRAPPER: {
    color: 'gray',
    paddingLeft: 12,
    paddingRight: 5,
    lineHeight : 1.4,
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
  BLACK: {
    color: 'black'
  },
  MT_8: {
    marginTop: 8
  }
};

const styleConfig = {
  //themeName : void 0,
  //style : void 0,
  createStyle : (CSS_RULE) => {
    return {
      CL_SCROLL_PANE: CSS_RULE.CL_SCROLL_PANE,
      ROOT: {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      },
      ...S
    };
  }
}

export default styleConfig
