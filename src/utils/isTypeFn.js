const _fIsTypeof = strType => v => typeof v === strType;

export const isStr = _fIsTypeof('string')
export const isFn = _fIsTypeof('function')
export const isBool = _fIsTypeof('boolean')
export const isObj = v => v && typeof v === 'object'

export const isArr = Array.isArray

export const isNumber = n => typeof n === 'number'
  && n - n === 0
