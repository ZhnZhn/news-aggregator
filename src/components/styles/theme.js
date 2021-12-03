

const P_GREY = {
  BG_BODY: '#5f5f5f',
  BG: '#4d4d4d',
  BG_OPTIONS: '#404040',
  BG_HEADER: '#3a6799',
  C_HEADER: '#8a8a8a'
};
const P_WHITE = {
  BG_BODY: 'darkgrey',
  //BG: '#ebf1f5',
  BG: '#eaeaea',
  BG_OPTIONS: '#dfe4e7',
  BG_HEADER: '#0096c8',
  C_HEADER: '#4d4d4d'
};
const P_SAND = {
  BG_BODY: 'darkgrey',
  BG: '#e8e0cb',
  BG_OPTIONS: '#c6bda5',
  BG_HEADER: '#0096c8',
  C_HEADER: '#4d4d4d'
};

const CSS_RULE = {
  BG: {},
  BG_OPTIONS: {},
  BG_HEADER: {},
  R_DIALOG: {}
};

const _assign = Object.assign;
const _setBodyBg = (conf, P) => {
  document.body.style.backgroundColor = P.BG_BODY
};
const _crBg = (conf, P) => {
  _assign(conf.BG, {
    backgroundColor: P.BG
  })
}
const _crBgOption = (conf, P) => {
  _assign(conf.BG_OPTIONS, {
    backgroundColor: P.BG_OPTIONS
  })
}
const _crBgHeader = (conf, P) => {
  _assign(conf.BG_HEADER, {
    color: P.C_HEADER,
    backgroundColor: P.BG_HEADER
   })
}
const _crRDialog = (conf, P) => {
  _assign(conf.R_DIALOG, {
    backgroundColor: P.BG,
    border: `solid 2px ${P.BG_HEADER}`
  })
}

const _FN_STYLES = [
  _setBodyBg,
  _crBg, _crBgOption, _crBgHeader, _crRDialog
];
const _setStyleTo = (conf, pallete) => {
  _FN_STYLES.forEach(fn => fn(conf, pallete))
};


export const THEME_NAME = {
  DEFAULT: 'GREY',
  GREY: 'GREY',
  WHITE: 'WHITE',
  SAND: 'SAND'
};
const THEME_CONFIG = {
  [THEME_NAME.GREY]: {
    pallete: P_GREY,
    clSuffix: ''
  },
  [THEME_NAME.WHITE]: {
    pallete: P_WHITE,
    clSuffix: '--white'
  },
  [THEME_NAME.SAND]: {
    pallete: P_SAND,
    clSuffix: '--sand'
  }
};

const CL_PROPS = {
  CL_SCROLL_PANE: 'with-scroll',
  //CL_QUERY_ITEM: 'row__topic',
  CL_BT_RAISED_DIV: 'bt-raise__div',
  CL_BT_FLAT_DIV: 'bt-flat__div',
  CL_SELECT_ITEM: 'm-select__item',

  CL_ROW_NEWS_SOURCE: 'row__news-source'
};

const _setClassNameTo = (suffix='') => {
  Object.keys(CL_PROPS).forEach(key => {
    CSS_RULE[key] = CL_PROPS[key] + suffix
  })
}

const _setTheme = (themeName) => {
  const config = THEME_CONFIG[themeName];
  const { clSuffix, pallete } = config;
  _setClassNameTo(clSuffix)
  _setStyleTo(CSS_RULE, pallete)
}

const theme = {
  themeName: THEME_NAME.DEFAULT,
  _init(){
    this.setThemeName(THEME_NAME.DEFAULT)
  },
  getThemeName(){
    return this.themeName;
  },
  setThemeName(themeName){
    this.themeName = THEME_NAME[themeName] || THEME_NAME.DEFAULT;
    _setTheme(this.themeName)
  },
  createStyle(config){
     if (this.themeName !== config.themeName){
       config.style = config.createStyle(CSS_RULE, this.themeName)
       config.themeName = this.themeName
     }
     return config.style;
  }
};

theme._init()

export default theme
