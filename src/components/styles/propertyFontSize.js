import {
  HAS_WIDE_SCREEN
} from '../has';

import {
  readFromLs,
  writeToLs
} from '../../utils/localStorageFn';

import isNumberInRange from '../../utils/isNumberInRange';
import setDfItemTo from './setDfItemTo';

import {
  LS_FONT_SIZE_KEY
} from './LS';

const FONT_SIZE_NAMES = [
  'Small',
  'Medium',
  'Extra Medium',
  'Large',
  'Extra Large'
];

const _crFontItem = (
  name,
  size
) => [`${name} (${size}px)`, size]
, _crFontSizeOptions = (
  smallSize
) => FONT_SIZE_NAMES
  .map(
    (name, index) => _crFontItem(name, smallSize+index)
  );

export const FONT_SIZE_OPTIONS = _crFontSizeOptions(
  HAS_WIDE_SCREEN ? 15 : 16
)

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
  const value = (item || [])[1];
  if (isNumberInRange(MIN_FS, MAX_FS, value)) {
    _appFontSize = value
    _documentElement.style.fontSize = `${value}px`
    writeToLs(LS_FONT_SIZE_KEY, value)
  }
};
