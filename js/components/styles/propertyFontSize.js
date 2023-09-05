"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.selectFontSize = exports.initFontSize = exports.getFontSize = exports.FONT_SIZE_OPTIONS = void 0;
var _has = require("../has");
var _localStorageFn = require("../../utils/localStorageFn");
var _isNumberInRange = _interopRequireDefault(require("../../utils/isNumberInRange"));
var _setDfItemTo = _interopRequireDefault(require("./setDfItemTo"));
var _LS = require("./LS");
const FONT_SIZE_NAMES = ['Small', 'Medium', 'Extra Medium', 'Large', 'Extra Large'];
const _crFontItem = (name, size) => [name + " (" + size + "px)", size],
  _crFontSizeOptions = smallSize => FONT_SIZE_NAMES.map((name, index) => _crFontItem(name, smallSize + index));
const FONT_SIZE_OPTIONS = _crFontSizeOptions(_has.HAS_WIDE_SCREEN ? 15 : 16);
exports.FONT_SIZE_OPTIONS = FONT_SIZE_OPTIONS;
const DF_APP_FONT_SIZE = _has.HAS_WIDE_SCREEN ? FONT_SIZE_OPTIONS[1][1] : FONT_SIZE_OPTIONS[2][1],
  MIN_FS = 15,
  MAX_FS = 20;
let _appFontSize = DF_APP_FONT_SIZE;
const getFontSize = () => _appFontSize;
exports.getFontSize = getFontSize;
const _documentElement = document.documentElement;
const initFontSize = () => {
  const [_fontSizeStr] = (0, _localStorageFn.readFromLs)(_LS.LS_FONT_SIZE_KEY);
  if (_fontSizeStr) {
    const _fontSize = parseInt(_fontSizeStr, 10);
    if ((0, _isNumberInRange.default)(MIN_FS, MAX_FS, _fontSize)) {
      _appFontSize = _fontSize;
    }
  }
  _documentElement.style.fontSize = _appFontSize + "px";
  (0, _setDfItemTo.default)(FONT_SIZE_OPTIONS, _appFontSize, 1);
};
exports.initFontSize = initFontSize;
const selectFontSize = item => {
  const value = (item || [])[1];
  if ((0, _isNumberInRange.default)(MIN_FS, MAX_FS, value)) {
    _appFontSize = value;
    _documentElement.style.fontSize = value + "px";
    (0, _localStorageFn.writeToLs)(_LS.LS_FONT_SIZE_KEY, value);
  }
};
exports.selectFontSize = selectFontSize;
//# sourceMappingURL=propertyFontSize.js.map