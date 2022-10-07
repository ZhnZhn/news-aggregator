"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.selectFontSize = exports.initFontSize = exports.getFontSize = exports.FONT_SIZE_OPTIONS = void 0;

var _localStorageFn = require("../../utils/localStorageFn");

var _isNumberInRange = _interopRequireDefault(require("../../utils/isNumberInRange"));

var _setDfItemTo = _interopRequireDefault(require("./setDfItemTo"));

var _LS = require("./LS");

var FONT_SIZE_OPTIONS = [{
  caption: 'Small (15px)',
  value: 15
}, {
  caption: 'Medium (16px)',
  value: 16
}, {
  caption: 'Extra Medium (17px)',
  value: 17
}, {
  caption: 'Large (18px)',
  value: 18
}, {
  caption: 'Extra Large (19px)',
  value: 19
}];
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
  var _ref = item || {},
      value = _ref.value;

  if ((0, _isNumberInRange["default"])(MIN_FS, MAX_FS, value)) {
    _appFontSize = value;
    _documentElement.style.fontSize = value + "px";
    (0, _localStorageFn.writeToLs)(_LS.LS_FONT_SIZE_KEY, value);
  }
};

exports.selectFontSize = selectFontSize;
//# sourceMappingURL=propertyFontSize.js.map