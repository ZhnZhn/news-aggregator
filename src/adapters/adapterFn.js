
export const toMls = sec => typeof sec === 'number'
  ? sec*1000
  : void 0

export const joinByBlank = (
  ...args
) => args
 .filter(Boolean)
 .join(' ')
