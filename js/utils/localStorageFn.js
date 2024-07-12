"use strict";

exports.__esModule = true;
exports.writeToLs = exports.removeItem = exports.readFromLs = exports.notAllowUseLs = exports.isAllowUseLs = exports.initAllowUseLs = exports.hasLocalStorage = exports.allowUseLs = void 0;
var _isTypeFn = require("./isTypeFn");
const FN_IDENTITY = str => str,
  KEY_PREFIX = 'NA',
  STR_BOOLEAN_TRUE = 'TRUE',
  LS = window.localStorage,
  _toBase64 = window.btoa || FN_IDENTITY,
  _fromBase64 = window.atob || FN_IDENTITY,
  _crErr = msg => ({
    message: msg
  }),
  ERR_LS_IS_ABSENT = _crErr("LocalStorage is absent"),
  ERR_USE_LS_NOT_ALLOWED = _crErr("Use LocalStorage is not allowed");
const hasLocalStorage = exports.hasLocalStorage = !!LS;
let _isAllowUseLs = false;
const isAllowUseLs = () => _isAllowUseLs;
exports.isAllowUseLs = isAllowUseLs;
const initAllowUseLs = value => {
  _isAllowUseLs = !!value;
};
exports.initAllowUseLs = initAllowUseLs;
const allowUseLs = () => {
  _isAllowUseLs = true;
};
exports.allowUseLs = allowUseLs;
const notAllowUseLs = () => {
  _isAllowUseLs = false;
  try {
    LS.clear();
  } catch (err) {
    console.log(err);
  }
};
exports.notAllowUseLs = notAllowUseLs;
const _crStorageKey = storageKey => `${KEY_PREFIX}_${storageKey}`;
const readFromLs = storageKey => {
  if (hasLocalStorage) {
    try {
      const _value = _fromBase64(LS[_crStorageKey(storageKey)]);
      return [_value === STR_BOOLEAN_TRUE ? true : _value];
    } catch (err) {
      return [void 0, err];
    }
  } else {
    return [void 0, {
      ...ERR_LS_IS_ABSENT
    }];
  }
};
exports.readFromLs = readFromLs;
const removeItem = storageKey => {
  if (hasLocalStorage) {
    try {
      LS.removeItem(_crStorageKey(storageKey));
    } catch (err) {
      return err;
    }
  } else {
    return {
      ...ERR_LS_IS_ABSENT
    };
  }
};
exports.removeItem = removeItem;
const writeToLs = (storageKey, value) => {
  if (!_isAllowUseLs) {
    return {
      ...ERR_USE_LS_NOT_ALLOWED
    };
  }
  if ((0, _isTypeFn.isBool)(value)) {
    return value ? writeToLs(storageKey, STR_BOOLEAN_TRUE) : removeItem(storageKey);
  }
  if (hasLocalStorage) {
    try {
      LS[_crStorageKey(storageKey)] = _toBase64(value);
    } catch (err) {
      return err;
    }
  } else {
    return {
      ...ERR_LS_IS_ABSENT
    };
  }
};
exports.writeToLs = writeToLs;
//# sourceMappingURL=localStorageFn.js.map