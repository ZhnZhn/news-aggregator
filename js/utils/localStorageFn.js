"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.writeToLs = exports.readFromLs = exports.notAllowUseLs = exports.isAllowUseLs = exports.initAllowUseLs = exports.hasLocalStorage = exports.clearLs = exports.allowUseLs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var LS = window.localStorage,
    ERR_LS_IS_ABSENT = {
  message: "LocalStorage is absent"
},
    ERR_USE_LS_NOT_ALLOWED = {
  message: "Use LocalStorage is not allowed"
};
var hasLocalStorage = !!LS;
exports.hasLocalStorage = hasLocalStorage;
var _isAllowUseLs = false;

var isAllowUseLs = function isAllowUseLs() {
  return _isAllowUseLs;
};

exports.isAllowUseLs = isAllowUseLs;

var initAllowUseLs = function initAllowUseLs(value) {
  _isAllowUseLs = !!value;
};

exports.initAllowUseLs = initAllowUseLs;

var allowUseLs = function allowUseLs() {
  _isAllowUseLs = true;
};

exports.allowUseLs = allowUseLs;

var notAllowUseLs = function notAllowUseLs() {
  _isAllowUseLs = false;
};

exports.notAllowUseLs = notAllowUseLs;

var readFromLs = function readFromLs(storageKey) {
  if (hasLocalStorage) {
    try {
      return [LS[storageKey]];
    } catch (err) {
      return [void 0, err];
    }
  } else {
    return [void 0, (0, _extends2["default"])({}, ERR_LS_IS_ABSENT)];
  }
};

exports.readFromLs = readFromLs;

var writeToLs = function writeToLs(storageKey, value) {
  if (!_isAllowUseLs) {
    return (0, _extends2["default"])({}, ERR_USE_LS_NOT_ALLOWED);
  }

  if (hasLocalStorage) {
    try {
      LS[storageKey] = value;
    } catch (err) {
      return err;
    }
  } else {
    return (0, _extends2["default"])({}, ERR_LS_IS_ABSENT);
  }
};

exports.writeToLs = writeToLs;

var clearLs = function clearLs() {
  if (hasLocalStorage) {
    try {
      LS.clear();
    } catch (err) {
      return err;
    }
  } else {
    return (0, _extends2["default"])({}, ERR_LS_IS_ABSENT);
  }
};

exports.clearLs = clearLs;
//# sourceMappingURL=localStorageFn.js.map