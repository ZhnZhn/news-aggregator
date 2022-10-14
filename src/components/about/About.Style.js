export const S_SCROLL_DIV = {
  height: '92%',
  paddingTop: 8,
  paddingRight: 10,
  overflowY: 'auto'
}
export const S_DIV_WRAPPER = {
  color: 'gray',
  paddingLeft: 12,
  paddingRight: 5,
  lineHeight : 1.4,
  fontWeight: 'bold'
}
export const S_LH_14 = {
  lineHeight: 1.4
}
export const S_LH_18 = {
  lineHeight: 1.8
}
export const S_BLOCK = {
  display: 'block'
}
export const S_NONE = {
  display: 'none'
}
export const S_APP_TITLE = {
  color: '#80c040'
}
export const S_BLACK = {
  color: 'black'
}
export const S_MT_8 = {
  marginTop: 8
}

export const styleConfig = {
  //themeName : void 0,
  //style : void 0,
  createStyle : (CSS_RULE) => {
    return {
      ROOT: {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      }
    };
  }
}
