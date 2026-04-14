const _fIsTypeof = strType => v => typeof v === strType;

export const isStr = _fIsTypeof('string')
export const isFn = _fIsTypeof('function')
export const isBool = _fIsTypeof('boolean')
export const isUndef = _fIsTypeof('undefined')

export const isTypeObj = _fIsTypeof('object')
export const isObj = v => v !== null
  && isTypeObj(v)

export const isArr = Array.isArray
export const isNotEmptyArr = value => isArr(value)
  && value.length > 0

export const isNumber = n => typeof n === 'number'
  && n - n === 0
