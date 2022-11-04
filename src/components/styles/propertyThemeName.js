import {
  readFromLs
} from '../../utils/localStorageFn';

import setDfItemTo from './setDfItemTo';
import { LS_UI_THEME_KEY } from './LS';

export const THEME_NAME = {
  DF: 'GREY',
  GREY: 'GREY',
  WHITE: 'WHITE',
  SAND: 'SAND'
}

export const THEME_OPTIONS = [
  ['Grey', 'GREY'],
  ['White', 'WHITE'],
  ['Sand', 'SAND'],
]

export const crInitialThemeName = () => {
  const [themeName] = readFromLs(LS_UI_THEME_KEY)
  , _themeName = themeName && THEME_NAME[themeName]
      ? themeName
      : THEME_NAME.DF
  setDfItemTo(THEME_OPTIONS, _themeName, 0)
  return _themeName;
};
