export {
  isAllowUseLs
} from '../../utils/localStorageFn';
export {
  FONT_SIZE_OPTIONS,
  selectFontSize
} from './propertyFontSize';
export {
  THEME_NAME,
  THEME_OPTIONS
} from './propertyThemeName';

import {
  readFromLs,
  writeToLs,
  initAllowUseLs,
  allowUseLs,
  notAllowUseLs,
  clearLs
} from '../../utils/localStorageFn';

import {
  initFontSize,
  getFontSize
} from './propertyFontSize';
import {
  THEME_NAME,
  crInitialThemeName
} from './propertyThemeName';

import {
  LS_IS,
  LS_UI_THEME_KEY,
  LS_FONT_SIZE_KEY
} from './LS';

const DF_BG = '#4d4d4d'
const DF_BT_H = 'rgba(255, 255, 255, 0.1)'
const DF_MSI_C = 'white'
const DF_MSI_FH = 'rgba(48, 48, 48, 0.4)'
const DF_SBT_BG = '#3f5178'

const BT_H_LIGHT = 'rgba(48, 48, 48, 0.3)'
const MSI_C_LIGHT = '#303030'
const MSI_FH_LIGHT = 'rgba(255, 255, 255, 0.4)'
const SBT_BG_LIGHT = '#0096c8'

const P_GREY = {
  BG_BODY: '#5f5f5f',
  BG: DF_BG,
  BT_H: DF_BT_H,
  BG_OPTIONS: '#404040',
  MSI_C: DF_MSI_C,
  MSI_FH: DF_MSI_FH,
  SBT_BG: DF_SBT_BG,
  BG_HEADER: '#3a6799',
  C_HEADER: '#8a8a8a'
};
const P_WHITE = {
  BG_BODY: 'darkgrey',
  BG: '#eaeaea',
  BT_H: BT_H_LIGHT,
  BG_OPTIONS: '#dfe4e7',
  MSI_C: MSI_C_LIGHT,
  MSI_FH: MSI_FH_LIGHT,
  SBT_BG: SBT_BG_LIGHT,
  BG_HEADER: '#0096c8',
  C_HEADER: '#4d4d4d'
};
const P_SAND = {
  BG_BODY: 'darkgrey',
  BG: '#e8e0cb',
  BT_H: BT_H_LIGHT,
  BG_OPTIONS: '#c6bda5',
  MSI_C: MSI_C_LIGHT,
  MSI_FH: MSI_FH_LIGHT,
  SBT_BG: SBT_BG_LIGHT,
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
  const _style = document.body.style
  _style.backgroundColor = P.BG_BODY
  _style.setProperty("--bg-c", P.BG || DF_BG)
  _style.setProperty("--bt-h", P.BT_H || DF_BT_H)
  _style.setProperty("--msi-c", P.MSI_C || DF_MSI_C)
  _style.setProperty("--msi-fh", P.MSI_FH || DF_MSI_FH)
  _style.setProperty("--sbt-bg", P.SBT_BG || DF_SBT_BG)
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
  _crBg,
  _crBgOption,
  _crBgHeader,
  _crRDialog
];
const _setStyleTo = (conf, pallete) => {
  _FN_STYLES.forEach(fn => fn(conf, pallete))
};

const THEME_CONFIG = {
  [THEME_NAME.GREY]: P_GREY,
  [THEME_NAME.WHITE]: P_WHITE,
  [THEME_NAME.SAND]: P_SAND
};

const _setTheme = (
  themeName
) => {
  _setStyleTo(CSS_RULE, THEME_CONFIG[themeName])
  writeToLs(LS_UI_THEME_KEY, themeName)
}

const theme = {
  themeName: THEME_NAME.DF,
  _init(){
    this.setThemeName(crInitialThemeName())
    initFontSize()
    initAllowUseLs(!!(readFromLs(LS_IS)[0]))
  },
  getThemeName(){
    return this.themeName;
  },
  setThemeName(themeName){
    this.themeName = THEME_NAME[themeName] || THEME_NAME.DF;
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

export const allowSaveToLs = () => {
  allowUseLs()
  writeToLs(LS_IS, "1")
  writeToLs(LS_UI_THEME_KEY, theme.themeName)
  writeToLs(LS_FONT_SIZE_KEY, getFontSize())
}
export const notAllowSaveToLs = () => {
  notAllowUseLs()
  clearLs()
}

export const initialTheme = theme
