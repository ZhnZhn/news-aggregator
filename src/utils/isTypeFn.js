
export const isStr = v => typeof v === 'string'
export const isObj = v => v && typeof v === 'object'

export const isArr = Array.isArray

export const isNumber = n => typeof n === 'number'
  && n - n === 0
