export {
  isAllowUseLs
} from '../utils/localStorageFn';

import {
  allowUseLs,
  notAllowUseLs,
  writeToLs
} from '../utils/localStorageFn'

import {
  getFontSize,
  getThemeName
} from '../components/styles/uiTheme'

import {
  isAdvancedInputOptions
} from './uiStore';

import {
  LS_IS,
  LS_UI_THEME_KEY,
  LS_FONT_SIZE_KEY,
  LS_IS_ADVANCED_INPUT_OPTIONS
} from './LS';

export const allowSaveToLs = () => {
  allowUseLs()
  writeToLs(LS_IS, true)
  writeToLs(LS_UI_THEME_KEY, getThemeName())
  writeToLs(LS_FONT_SIZE_KEY, getFontSize())
  writeToLs(LS_IS_ADVANCED_INPUT_OPTIONS, isAdvancedInputOptions())
}
export const notAllowSaveToLs = notAllowUseLs
