
const C = {
  BG_GREY: '#4d4d4d',
  //BG_HEADER_GREY: '#3f5178',
  BG_HEADER_GREY: '#3a6799',

  BG_WHITE: '#ebf1f5',
  BG_HEADER_WHITE: 'rgb(0, 150, 200)'
}

const CSS_RULE = {
  CL_SCROLL_PANE: '',
  CL_QUERY_ITEM: 'row__topic',
  CL_BT_RAISED_DIV: 'bt-raise__div',
  CL_BT_FLAT_DIV: 'bt-flat__div',

  CL_SELECT_ITEM: 'm-select__item',

  BG: {
    backgroundColor : '#4d4d4d'
  },
  BG_HEADER: {
    backgroundColor: C.BG_HEADER_GREY
  },
  R_DIALOG: {
    border: `solid 2px ${C.BG_HEADER_GREY}`
  }  

}

export const THEME_NAME = {
  DEFAULT : 'GREY',
  GREY : 'GREY',
  WHITE : 'WHITE'
}

const _setTheme = {
  [THEME_NAME.GREY] : () => {
    document.body.style.backgroundColor = '#5f5f5f'

    CSS_RULE.CL_SCROLL_PANE = ''
    CSS_RULE.CL_QUERY_ITEM = 'row__topic'
    CSS_RULE.CL_BT_RAISED_DIV = 'bt-raise__div'
    CSS_RULE.CL_BT_FLAT_DIV = 'bt-flat__div'

    CSS_RULE.CL_SELECT_ITEM = 'm-select__item'

    CSS_RULE.BG.backgroundColor = '#4d4d4d'
    CSS_RULE.BG_HEADER.backgroundColor = C.BG_HEADER_GREY
    Object.assign(CSS_RULE.R_DIALOG, {
      border: `solid 2px ${C.BG_HEADER_GREY}`,
      backgroundColor: C.BG_GREY
    })
  },
  [THEME_NAME.WHITE] : () => {
    document.body.style.backgroundColor = 'darkgrey'

    CSS_RULE.CL_SCROLL_PANE = 'with-scroll--white'
    CSS_RULE.CL_QUERY_ITEM = 'row__topic--white'
    CSS_RULE.CL_BT_RAISED_DIV = 'bt-raise__div--white'
    CSS_RULE.CL_BT_FLAT_DIV = 'bt-flat__div--white'

    CSS_RULE.CL_SELECT_ITEM = 'm-select__item--white'

    CSS_RULE.BG.backgroundColor = C.BG_WHITE
    CSS_RULE.BG_HEADER.backgroundColor = C.BG_HEADER_WHITE
    Object.assign(CSS_RULE.R_DIALOG, {
      border: `solid 2px ${C.BG_HEADER_WHITE}`,
      backgroundColor: C.BG_WHITE
    })
  }
}

const theme = {
  themeName : THEME_NAME.DEFAULT,
  getThemeName(){
    return this.themeName;
  },
  setThemeName(themeName){
    this.themeName = themeName
    _setTheme[themeName]()
  },
  createStyle(config){
     if (this.themeName !== config.themeName){
       config.style = config.createStyle(CSS_RULE, this.themeName)
       config.themeName = this.themeName
     }
     return config.style;
  }
}

export default theme
