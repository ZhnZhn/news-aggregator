"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.selectFontSize = exports.initFontSize = exports.getFontSize = exports.FONT_SIZE_OPTIONS = void 0;

var _localStorageFn = require("../../utils/localStorageFn");

var _isNumberInRange = _interopRequireDefault(require("../../utils/isNumberInRange"));

var _setDfItemTo = _interopRequireDefault(require("./setDfItemTo"));

var _LS = require("./LS");

var FONT_SIZE_OPTIONS = [['Small (15px)', 15], ['Medium (16px)', 16], ['Extra Medium (17px)', 17], ['Large (18px)', 18], ['Extra Large (19px)', 19]];
exports.FONT_SIZE_OPTIONS = FONT_SIZE_OPTIONS;
var DF_APP_FONT_SIZE = 16,
    MIN_FS = 15,
    MAX_FS = 19;
var _appFontSize = DF_APP_FONT_SIZE;

var getFontSize = function getFontSize() {
  return _appFontSize;
};

exports.getFontSize = getFontSize;
var _documentElement = document.documentElement;

var initFontSize = function initFontSize() {
  var _readFromLs = (0, _localStorageFn.readFromLs)(_LS.LS_FONT_SIZE_KEY),
      _fontSizeStr = _readFromLs[0];

  if (_fontSizeStr) {
    var _fontSize = parseInt(_fontSizeStr, 10);

    if ((0, _isNumberInRange["default"])(MIN_FS, MAX_FS, _fontSize)) {
      _appFontSize = _fontSize;
    }
  }

  _documentElement.style.fontSize = _appFontSize + "px";
  (0, _setDfItemTo["default"])(FONT_SIZE_OPTIONS, _appFontSize, 1);
};

exports.initFontSize = initFontSize;

var selectFontSize = function selectFontSize(item) {
  var value = (item || [])[1];

  if ((0, _isNumberInRange["default"])(MIN_FS, MAX_FS, value)) {
    _appFontSize = value;
    _documentElement.style.fontSize = value + "px";
    (0, _localStorageFn.writeToLs)(_LS.LS_FONT_SIZE_KEY, value);
  }
};

exports.selectFontSize = selectFontSize;
//# sourceMappingURL=propertyFontSize.js.map