"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.crInitialThemeName = exports.THEME_OPTIONS = exports.THEME_NAME = void 0;

var _localStorageFn = require("../../utils/localStorageFn");

var _setDfItemTo = _interopRequireDefault(require("./setDfItemTo"));

var _LS = require("./LS");

var THEME_NAME = {
  DF: 'GREY',
  GREY: 'GREY',
  WHITE: 'WHITE',
  SAND: 'SAND'
};
exports.THEME_NAME = THEME_NAME;
var THEME_OPTIONS = [['Grey', 'GREY'], ['White', 'WHITE'], ['Sand', 'SAND']];
exports.THEME_OPTIONS = THEME_OPTIONS;

var crInitialThemeName = function crInitialThemeName() {
  var _readFromLs = (0, _localStorageFn.readFromLs)(_LS.LS_UI_THEME_KEY),
      themeName = _readFromLs[0],
      _themeName = themeName && THEME_NAME[themeName] ? themeName : THEME_NAME.DF;

  (0, _setDfItemTo["default"])(THEME_OPTIONS, _themeName, 0);
  return _themeName;
};

exports.crInitialThemeName = crInitialThemeName;
//# sourceMappingURL=propertyThemeName.js.map