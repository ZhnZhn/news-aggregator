export {
  isAllowUseLs
} from '../../utils/localStorageFn';
export {
  FONT_SIZE_OPTIONS,
  selectFontSize,
  getFontSize
} from './propertyFontSize';
export {
  THEME_NAME,
  THEME_OPTIONS
} from './propertyThemeName';

import {
  LS_IS,
  LS_UI_THEME_KEY
} from '../../flux/LS';
import {
  readFromLs,
  writeToLs,
  initAllowUseLs
} from '../../utils/localStorageFn';

import {
  initFontSize,
} from './propertyFontSize';
import {
  THEME_NAME,
  crInitialThemeName
} from './propertyThemeName';

const _crRgba = (
  v,
  a
) => `rgba(${v}, ${v}, ${v}, ${a})`;

const GREY_BG_HEADER = '#3a6799';
const GREY_C_HEADER= '#a9a9a9';
const P_GREY = {
  BG_BODY: '#5f5f5f',
  BG: '#4d4d4d',
  BT_H: _crRgba(255, 0.1),
  BT_FC: '#6ca1dc',
  BT_RC: GREY_C_HEADER,
  BG_OPTIONS: '#404040',
  MSI_C: '#f8f8ff',
  //MSI_FH: _crRgba(48, 0.4),
  MSI_FH: _crRgba(255, 0.1),
  SBT_BG: GREY_BG_HEADER,
  BG_HEADER: GREY_BG_HEADER,
  C_HEADER: GREY_C_HEADER,

  ART_H: '#404040',
  ART_D: '#4d4d4d',

  SH_C: '#7a7a7a'
};

const BG_HEADER_LIGHT = '#0096c8';
const _P_LIGHT = {
  BT_H: _crRgba(48, 0.3),
  MSI_C: '#303030',
  MSI_FH: _crRgba(255, 0.4),
  SBT_BG: '#0096c8',

  BG_HEADER: BG_HEADER_LIGHT,
  BT_FC: BG_HEADER_LIGHT,
  C_HEADER: '#4d4d4d',
  SH_C: '#aaa'
};

const WHITE_BG = '#eaeaea';
const P_WHITE = {
  ..._P_LIGHT,
  BG_BODY: 'darkgrey',
  BG: WHITE_BG,
  BG_OPTIONS: '#dfe4e7',
  BT_RC: WHITE_BG,

  ART_H: '#dfe4e7',
  ART_D: '#eaeaea'
};

const SAND_BG = '#e8e0cb';
const P_SAND = {
  ..._P_LIGHT,
  BG_BODY: 'darkgrey',
  BG: SAND_BG,
  BG_OPTIONS: '#c6bda5',
  BT_RC: SAND_BG,

  ART_H: '#c6bda5',
  ART_D: '#e8e0cb'
};

const THEME_CONFIG = {
  [THEME_NAME.GREY]: P_GREY,
  [THEME_NAME.WHITE]: P_WHITE,
  [THEME_NAME.SAND]: P_SAND
};

const _setCustomPropertiesFrom = (P) => {
  const _style = document.body.style
  , _setProperty = _style.setProperty.bind(_style);

  _style.backgroundColor = P.BG_BODY

  _setProperty("--bg-c", P.BG)

  _setProperty("--bt-h", P.BT_H)
  _setProperty("--bt-fc", P.BT_FC)
  _setProperty("--bt-rc", P.BT_RC)

  _setProperty("--h-c", P.C_HEADER)
  _setProperty("--h-bg", P.BG_HEADER)

  _setProperty("--mso-bg", P.BG_OPTIONS)
  _setProperty("--msi-c", P.MSI_C)
  _setProperty("--msi-fh", P.MSI_FH)

  _setProperty("--sbt-bg", P.SBT_BG)

  _setProperty("--art-h", P.ART_H)
  _setProperty("--art-d", P.ART_D)

  _setProperty("--sh-c", P.SH_C)
};

const _setUiTheme = (
  themeName
) => {
  _setCustomPropertiesFrom(THEME_CONFIG[themeName])
  writeToLs(LS_UI_THEME_KEY, themeName)
}

const _uiTheme = {
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
    _setUiTheme(this.themeName)
  }
};

_uiTheme._init()

export const setUiTheme = (
  item
) => {
  const _themeName = (item || [])[1];
  if (_uiTheme.getThemeName() !== _themeName) {
    _uiTheme.setThemeName(_themeName)
  }
}

export const getThemeName = () => _uiTheme.getThemeName()
