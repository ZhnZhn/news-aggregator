const FN_IDENTITY = str => str
, KEY_PREFIX = 'NA'
, STR_BOOLEAN_TRUE = 'TRUE'
, LS = window.localStorage
, _toBase64 = window.btoa || FN_IDENTITY
, _fromBase64 = window.atob || FN_IDENTITY
, _crErr = msg => ({ message: msg })
, ERR_LS_IS_ABSENT = _crErr("LocalStorage is absent")
, ERR_USE_LS_NOT_ALLOWED = _crErr("Use LocalStorage is not allowed");

export const hasLocalStorage = !!(LS)

let _isAllowUseLs = false;
export const isAllowUseLs = () => _isAllowUseLs
export const initAllowUseLs = (value) => {
  _isAllowUseLs = !!value
}
export const allowUseLs = () => {
  _isAllowUseLs = true
}
export const notAllowUseLs = () => {
  _isAllowUseLs = false
  try {
    LS.clear()
  } catch(err) {
    console.log(err)
  }
}

const _crStorageKey = (
  storageKey
) => `${KEY_PREFIX}_${storageKey}`

export const readFromLs = (
  storageKey
) => {
  if (hasLocalStorage) {
    try {
      const _value = _fromBase64(LS[_crStorageKey(storageKey)]);
      return [_value === STR_BOOLEAN_TRUE ? true : _value];
    } catch(err) {
      return [void 0, err];
    }
  } else {
    return [void 0, {...ERR_LS_IS_ABSENT}];
  }
}

export const removeItem = (
  storageKey
) => {
  if (hasLocalStorage) {
    try {
      LS.removeItem(_crStorageKey(storageKey))
    } catch(err) {
      return err;
    }
  } else {
    return {...ERR_LS_IS_ABSENT};
  }
}

export const writeToLs = (
  storageKey,
  value
) => {
  if (!_isAllowUseLs) {
    return {...ERR_USE_LS_NOT_ALLOWED};
  }
  if (typeof value === "boolean") {
    return value
      ? writeToLs(storageKey, STR_BOOLEAN_TRUE)
      : removeItem(storageKey);
  }
  if (hasLocalStorage) {
    try {
      LS[_crStorageKey(storageKey)] = _toBase64(value)
    } catch(err) {
      return err;
    }
  } else {
    return {...ERR_LS_IS_ABSENT};
  }
}
