const _fIsTypeof = strType => v => typeof v === strType;

export const isStr = _fIsTypeof('string')
export const isFn = _fIsTypeof('function')
export const isBool = _fIsTypeof('boolean')
export const isUndef = _fIsTypeof('undefined')
export const isTypeObj = _fIsTypeof('object')
export const isObj = v => v && isTypeObj(v)

export const isArr = Array.isArray

export const isNumber = n => typeof n === 'number'
  && n - n === 0
