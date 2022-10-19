"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.writeToLs = exports.removeItem = exports.readFromLs = exports.notAllowUseLs = exports.isAllowUseLs = exports.initAllowUseLs = exports.hasLocalStorage = exports.allowUseLs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var FN_IDENTITY = function FN_IDENTITY(str) {
  return str;
},
    KEY_PREFIX = 'NA',
    LS = window.localStorage,
    _toBase64 = window.btoa || FN_IDENTITY,
    _fromBase64 = window.atob || FN_IDENTITY,
    _crErr = function _crErr(msg) {
  return {
    message: msg
  };
},
    ERR_LS_IS_ABSENT = _crErr("LocalStorage is absent"),
    ERR_USE_LS_NOT_ALLOWED = _crErr("Use LocalStorage is not allowed");

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

var _crStorageKey = function _crStorageKey(storageKey) {
  return KEY_PREFIX + "_" + storageKey;
};

var readFromLs = function readFromLs(storageKey) {
  if (hasLocalStorage) {
    try {
      return [_fromBase64(LS[_crStorageKey(storageKey)])];
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
      LS[_crStorageKey(storageKey)] = _toBase64(value);
    } catch (err) {
      return err;
    }
  } else {
    return (0, _extends2["default"])({}, ERR_LS_IS_ABSENT);
  }
};

exports.writeToLs = writeToLs;

var removeItem = function removeItem(storageKey) {
  if (hasLocalStorage) {
    try {
      LS.removeItem(_crStorageKey(storageKey));
    } catch (err) {
      return err;
    }
  } else {
    return (0, _extends2["default"])({}, ERR_LS_IS_ABSENT);
  }
};

exports.removeItem = removeItem;
//# sourceMappingURL=localStorageFn.js.map