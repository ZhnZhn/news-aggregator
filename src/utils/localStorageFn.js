const LS = window.localStorage
, ERR_LS_IS_ABSENT = {
  message: "LocalStorage is absent"
}
, ERR_USE_LS_NOT_ALLOWED = {
  message: "Use LocalStorage is not allowed"
};
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
}

export const readFromLs = (
  storageKey
) => {
  if (hasLocalStorage) {
    try {
      return [LS[storageKey]];
    } catch(err) {
      return [void 0, err];
    }
  } else {
    return [void 0, {...ERR_LS_IS_ABSENT}];
  }
}

export const writeToLs = (
  storageKey,
  value
) => {
  if (!_isAllowUseLs) {
    return {...ERR_USE_LS_NOT_ALLOWED};
  }
  if (hasLocalStorage) {
    try {
      LS[storageKey] = value
    } catch(err) {
      return err;
    }
  } else {
    return {...ERR_LS_IS_ABSENT};
  }
};

export const clearLs = () => {
  if (hasLocalStorage) {
    try {
      LS.clear()
    } catch(err) {
      return err;
    }
  } else {
    return {...ERR_LS_IS_ABSENT};
  }
}
