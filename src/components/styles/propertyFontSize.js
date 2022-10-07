import {
  readFromLs,
  writeToLs
} from '../../utils/localStorageFn';

import isNumberInRange from '../../utils/isNumberInRange';
import setDfItemTo from './setDfItemTo';

import {
  LS_FONT_SIZE_KEY
} from './LS';

export const FONT_SIZE_OPTIONS = [
  { caption: 'Small (15px)', value: 15 },
  { caption: 'Medium (16px)', value: 16 },
  { caption: 'Extra Medium (17px)', value: 17 },
  { caption: 'Large (18px)', value: 18 },
  { caption: 'Extra Large (19px)', value: 19 }
];

const DF_APP_FONT_SIZE = 16
, MIN_FS = 15
, MAX_FS = 19
let _appFontSize = DF_APP_FONT_SIZE;
export const getFontSize = () => _appFontSize;

const _documentElement = document.documentElement;
export const initFontSize = () => {
  const [_fontSizeStr] = readFromLs(LS_FONT_SIZE_KEY)
  if (_fontSizeStr) {
    const _fontSize = parseInt(_fontSizeStr, 10);
    if (isNumberInRange(MIN_FS, MAX_FS, _fontSize)){
      _appFontSize = _fontSize
    }
  }
  _documentElement.style.fontSize = `${_appFontSize}px`
  setDfItemTo(FONT_SIZE_OPTIONS, _appFontSize, 1)
}

export const selectFontSize = (
  item
) => {
  const { value } = item || {};
  if (isNumberInRange(value, MIN_FS, MAX_FS)) {
    _appFontSize = value
    _documentElement.style.fontSize = `${value}px`
    writeToLs(LS_FONT_SIZE_KEY, value)
  }
};
